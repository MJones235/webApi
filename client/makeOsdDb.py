#!/usr/bin/env python3
"""
makeOsdDb.py
This script downloads osdDb data from the remote server using the webAPI.
It then determines the unique events in the data before creating a
JSON file which contains the unique events along with the associated
datapoints.

Graham Jones 20 August 2022


Licence: GPL v3 or later.

"""

import argparse
import pandas as pd
import json
import tabulate

import libosd.webApiConnection
import libosd.loadConfig


def extractJsonVal(row, elem, debug=False):
    if (debug): print("extractJsonVal(): row=",row)
    dataJSON = row['dataJSON']
    if (dataJSON is not None):
        if (debug): print("extractJsonVal(): dataJSON=",dataJSON)
        dataObj = json.loads(dataJSON)
        elemVal = dataObj[elem]
    else:
        elemVal = None
    return(elemVal)


def getUniqueEventsLIsts(userId, credentialsFname="client.cfg",
               outFile="listEvents",
               download=True, debug=False):
    osd = libosd.webApiConnection.WebApiConnection(cfg=credentialsFname,
                                                   download=download,
                                                   debug=debug)
    if (userId == "all"):
        eventLst = osd.getEvents(userId=None, includeDatapoints=False)
    else:
        eventLst = osd.getEvents(userId=userId, includeDatapoints=False)

    print("Loaded %d Events" % len(eventLst))

    # In this section we try to produce a list of unique events.
    # We select all events that are either
    #    - marked as a seizure
    #    - not an OSD warning (because we don't consisder warnings false alarms
    #    - does not include the word 'test' in the description.
    # We then group them by user ID and by time - all events within a 10 minute period are
    #  considered a single event rather than multiple seizures or false alarms.
    # We then select the 'best' event from within the group and add that to the list.  The
    #   'best' event is one that either
    #    - contains a text description
    #    - is a manual alarm
    #    - Otherwise the middle event in the time period is used.
    #print(eventLst)

    # Read the event list into a pandas data frame.
    df = pd.read_json(json.dumps(eventLst))
    df['dataTime'] = pd.to_datetime(df['dataTime'])
    # FIXME - this crashes!
    #df['dataSource'] = df.apply(lambda row: extractJsonVal(row,'dataSource'), axis = 1)
    # drop the dataJSON column because we do not need it.
    df=df.drop('dataJSON', axis=1)
    # Filter out warnings (unless they are tagged as a seizure) and tests.
    df=df.query("type=='Seizure' or osdAlarmState!=1")
    df=df.query("not(desc.str.lower().str.contains('test'))")
    #print(df.columns)
    #print(df.dtypes)
    #print(df.describe())
    #print(df.dtypes)
    allUniqueEventsDf = pd.DataFrame()
    tcUniqueEventsDf = pd.DataFrame()
    allSeizureUniqueEventsDf = pd.DataFrame()
    falseAlarmUniqueEventsDf = pd.DataFrame()
    unknownUniqueEventsDf = pd.DataFrame()
    #
    # This is to set the print order when we print the data frames
    columnList = ['id', 'userId',
                  'dataTime', 'type',
                  'subType', 'osdAlarmState',
                  'desc']

    # Group the data by userID and time period
    groupedDf=df.groupby(['userId','type',pd.Grouper(key='dataTime', freq='10min')])

    # Loop through the grouped data
    for groupParts, group in groupedDf:
        userId, eventType, dataTime = groupParts
        if (debug): print()
        if (debug): print("Starting New Group....")
        #print("UserId=%d, type=%s, dataTime=%s" % (userId, eventType,
        #                                           dataTime.strftime('%Y-%m-%d %H:%M:%S')))
        #print(type(group))
        #print(group[columnList])
        # non-zero length description
        taggedRows=group[group.desc.str.len()>0]
        # description is not 'null'
        taggedRows=taggedRows[~taggedRows.desc.str.contains("null")]
        if len(taggedRows.index)>0:
            if (debug): print("Tagged Rows:")
            #print(taggedRows[columnList])
            outputRows = taggedRows
        else:
            if (debug): print("No tagged rows")
            alarmRows=group[group.osdAlarmState==2]
            if len(alarmRows.index)>0:
                if (debug): print("alarmRows:")
                #print(alarmRows[columnList])
                outputRows = alarmRows
            else:
                if (debug): print("No alarm rows")
                outputRows = group

        # Now just pick the middle row of the ouput rows list as the unique event.
        outputIndex = int(len(outputRows.index)/2)
        #print("len(outputRows)=%d, outputIndex=%d" % (len(outputRows), outputIndex))
        if (debug): print("UniqueEvent=")
        eventRow = outputRows.iloc[[outputIndex]]
        if (debug): print(eventRow[columnList])
        allUniqueEventsDf = allUniqueEventsDf.append(eventRow)


        if eventRow['type'].str.contains('Seizure').any():
            allSeizureUniqueEventsDf = allSeizureUniqueEventsDf.append(eventRow)
        if eventRow['subType'].str.contains('Tonic-Clonic').any():
            tcUniqueEventsDf = tcUniqueEventsDf.append(eventRow)
        if eventRow['type'].str.contains('False Alarm').any():
            falseAlarmUniqueEventsDf = falseAlarmUniqueEventsDf.append(eventRow)
        if eventRow['type'].str.contains('Unknown').any():
            unknownUniqueEventsDf = unknownUniqueEventsDf.append(eventRow)


    if (debug): print("All Unique Events (%d):" % len(allUniqueEventsDf.index))
    #print(tabulate(df, headers='keys', tablefmt='fancy_grid'))
    if (debug): print(tabulate.tabulate(allUniqueEventsDf[columnList], headers=columnList, tablefmt='fancy_grid'))

    if (debug): print()
    if (debug): print("Unique Unknown Events (%d):" % len(unknownUniqueEventsDf.index))
    if (debug): print(tabulate.tabulate(unknownUniqueEventsDf[columnList], headers=columnList, tablefmt='fancy_grid'))


    if (debug): print()
    if (debug): print("Unique False Alarm Events (%d):" % len(falseAlarmUniqueEventsDf.index))
    if (debug): print(tabulate.tabulate(falseAlarmUniqueEventsDf[columnList], headers=columnList, tablefmt='fancy_grid'))


    if (debug): print()
    if (debug): print("Unique Seizure Events (%d):" % len(allSeizureUniqueEventsDf.index))
    if (debug): print(tabulate.tabulate(allSeizureUniqueEventsDf[columnList], headers=columnList, tablefmt='fancy_grid'))

    if (debug): print()
    if (debug): print("Unique TC Seizure Events (%d):" % len(tcUniqueEventsDf.index))
    if (debug): print(tabulate.tabulate(tcUniqueEventsDf[columnList], headers=columnList, tablefmt='fancy_grid'))

    fname = "%s_tcSeizures.csv" % outFile
    tcUniqueEventsDf.to_csv(fname, index=False, columns=columnList)
    print("Tonic-Clonic Seizure Events saved as %s" % fname)

    fname = "%s_allSeizures.csv" % outFile
    allSeizureUniqueEventsDf.to_csv(fname, index=False, columns=columnList)
    print("All Seizure Events saved as %s" % fname)

    fname = "%s_falseAlarms.csv" % outFile
    falseAlarmUniqueEventsDf.to_csv(fname, index=False, columns=columnList)
    print("False Alarm Events saved as %s" % fname)

    fname = "%s_unknownEvents.csv" % outFile
    unknownUniqueEventsDf.to_csv(fname, index=False, columns=columnList)
    print("Unknown Events saved as %s" % fname)

    fname = "%s_allEvents.csv" % outFile
    allUniqueEventsDf.to_csv(fname, index=False, columns=columnList)
    print("All Events saved as %s" % fname)

    #print(tcUniqueEventsDf, tcUniqueEventsDf.columns)

    
    return(allSeizureUniqueEventsDf['id'].tolist(),
           tcUniqueEventsDf['id'].tolist(),
           falseAlarmUniqueEventsDf['id'].tolist(),
           unknownUniqueEventsDf['id'].tolist())


def getEventsFromList(eventsLst, credentialsFname="client.cfg",
                      includeDatapoints=True, download=True, debug=False):
    """ Download the data for the evenst in evenstLst, returning a list of
    event Objects.
    """
    osd = libosd.webApiConnection.WebApiConnection(cfg=credentialsFname,
                                                   download=download,
                                                   debug=debug)
    eventsObjLst = []

    for eventId in eventsLst:
        print("Retrieving eventId %d" % eventId)
        eventObj = osd.getEvent(eventId,
                                includeDatapoints=includeDatapoints)
        eventsObjLst.append(eventObj)
    return eventsObjLst


def saveEventsAsJson(eventsLst, fname, credentialsFname,
                     download=True, debug=False):
    eventsObjLst = getEventsFromList(eventsLst,
                                       credentialsFname=credentialsFname,
                                       includeDatapoints=True,
                                       download=download,
                                       debug=debug)
    if (debug): print(eventsObjLst)

    f = open(fname,'w')
    json.dump(eventsObjLst,f, indent=2, sort_keys=True)
    f.close()
    if (debug): print("Wrote events data to %s" % fname)

    return(True)


if (__name__=="__main__"):
    print("makeOsdDb.py.main()")
    parser = argparse.ArgumentParser(description='Create an anonymised database of unique seizure-like events for distribution')
    parser.add_argument('--config', default="client.cfg",
                        help='name of json file containing configuration information and login credientials - see client.cfg.template')
    parser.add_argument('--user', default=None,
                        help='user ID number of user to be analysed')
    parser.add_argument('--nodownload', action='store_true',
                        help="Do not Download data from remote database - use local data instead")
    parser.add_argument('--debug', action='store_true',
                        help="Write debugging information to screen")
    parser.add_argument('--out', default="listEvents",
                        help='root of output filenames')
    
    argsNamespace = parser.parse_args()
    args = vars(argsNamespace)
    print(args)

    print("Analysing False Alarms for User %s" % args['user'])
    (seizureEventsLst, tcEventsLst,
     falseAlarmEventsLst, unknownEventsLst) \
     = getUniqueEventsLIsts(args['user'], args['config'],
                            outFile=args['out'],
                            download=not args['nodownload'],
                            debug=args['debug'])

    if (args['debug']): print(tcEventsLst)

    fname = "%s_tcSeizures.json" % args['out']
    saveEventsAsJson(tcEventsLst,
                     fname,
                     args['config'],
                     download=not args['nodownload'],
                     debug=args['debug'])
    print("Tonic Clonic Seizure Events Saved to %s" % fname)

    fname = "%s_allSeizures.json" % args['out']
    saveEventsAsJson(seizureEventsLst,
                     fname, 
                     args['config'],
                     download=not args['nodownload'],
                     debug=args['debug'])
    print("All Seizure Events Saved to %s" % fname)
    
    fname = "%s_falseAlarms.json" % args['out']
    saveEventsAsJson(falseAlarmEventsLst,
                     fname,
                     args['config'],
                     download=not args['nodownload'],
                     debug=args['debug'])
    print("False Alarm Events Saved to %s" % fname)

    fname = "%s_unknownEvents.json" % args['out']
    saveEventsAsJson(unknownEventsLst,
                     fname,
                     args['config'],
                     download=not args['nodownload'],
                     debug=args['debug'])
    print("Unknown Events Saved to %s" % fname)
    
