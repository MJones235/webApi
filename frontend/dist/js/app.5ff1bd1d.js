(function(e){function t(t){for(var s,i,r=t[0],l=t[1],c=t[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},o=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("app-navigation"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-app-bar",{attrs:{app:"",color:"brown darken4",dark:""}},[a("v-toolbar-title",[e._v(e._s(e.appTitle))]),a("v-btn",{attrs:{text:"",to:"/About"}},[e._v("About")]),a("v-spacer"),e.isAuthenticated?e._e():a("v-btn",{attrs:{text:"",to:"/Login"}},[e._v("Login/Register")]),e.isAuthenticated?a("v-btn",{attrs:{text:"",to:"/profile"}},[e._v("Account")]):e._e(),e.isAuthenticated?a("v-btn",{attrs:{text:"",to:"/Logout"}},[e._v("Logout")]):e._e()],1),a("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[e._l(e.items,(function(t,s){return[a("v-list-item",[e._v(" "+e._s(t.title)+" ")]),a("v-divider",{key:"divider-"+s})]}))],2)],1)],1)},r=[],l={name:"AppNavigation",data:function(){return{appTitle:"OpenSeizureDetector WebAPI",drawer:!1,items:[{title:"drawer-btn1"},{title:"drawer-Log In"}]}},computed:{isAuthenticated:function(){return this.$store.getters["isAuthenticated"]}}},c=l,u=a("2877"),d=Object(u["a"])(c,i,r,!1,null,"3072b382",null),f=d.exports,m={name:"App",components:{AppNavigation:f}},v=m,p=Object(u["a"])(v,n,o,!1,null,null,null),h=p.exports,g=a("8c4f"),b=a("2f62"),y=a("bc3a"),x=a.n(y);s["default"].use(b["a"]);var w=new b["a"].Store({state:{baseUrl:"https://api.osd.dynu.net",isAuthenticated:!1,token:null},getters:{baseUrl:function(e){return e.baseUrl},token:function(e){return e.token},isAuthenticated:function(e){return console.log("getters.isAuthenticated: "+e.isAuthenticated),e.isAuthenticated}},mutations:{setToken:function(e,t){e.token=t,console.log("store.mutations.setToken - token = "+e.token)},setIsAuthenticated:function(e,t){e.isAuthenticated=t,console.log("setIsAuthenticated: "+e.isAuthenticated)}},actions:{login:function(e,t){var a=t.uname,s=t.password;console.log("login("+a+","+s+")");var n=e.state.baseUrl;console.log("....url="+n),x()({method:"post",url:n+"/api/accounts/login/",data:{login:a,password:s},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",t.data["token"]),e.commit("setIsAuthenticated",!0),console.log("redirecting to events page"),Pe.push({path:"/events/"})):(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1))})).catch((function(t){console.log("catch(): err="+JSON.stringify(t)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)}))},logout:function(e){console.log("logout"),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)},authRequest:function(e,t){var a=t["url"],s=t["action"],n=t["data"],o=t["successCb"],i=t["failCb"],r={Authorization:"Token "+e.state.token};console.log("store.authRequest: url="+a+", action="+s+", data="+JSON.stringify(n)+", headers="+JSON.stringify(r)),x()({method:s,url:a,headers:r,data:n,validateStatus:function(e){return e<500}}).then((function(e){console.log("store.authRequest- response="+JSON.stringify(e)),o(e)})).catch((function(e){console.log("store.authRequest.catch(): err="+JSON.stringify(e)),i(e)}))},getUserDetails:function(e){console.log("getUserDetails")}},modules:{}}),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[a("h1",[e._v("Events - Select Events by Date")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-datetime-picker",{attrs:{label:"Start","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}})],1),a("v-col",[a("v-datetime-picker",{attrs:{label:"End","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}},[e._v(" > ")])],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:e.getEvents}},[e._v("Get Events")])],1)],1),a("v-card-actions")],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.tableHeaders,items:e.events,"items-per-page":20},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},s),[e._v("Add New Event")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Create / Edit Event")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-datetime-picker",{attrs:{label:"Event Date/Time","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.editedEvent.dataTime,callback:function(t){e.$set(e.editedEvent,"dataTime",t)},expression:"editedEvent.dataTime"}},[e._v(" > ")])],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.eventTypes,"menu-props":"auto","hide-details":"",label:"Event Type","single-line":""},model:{value:e.editedEvent.eventType,callback:function(t){e.$set(e.editedEvent,"eventType",t)},expression:"editedEvent.eventType"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Description"},model:{value:e.editedEvent.desc,callback:function(t){e.$set(e.editedEvent,"desc",t)},expression:"editedEvent.desc"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)]},proxy:!0},{key:"item.dataTime",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.dateStr(a.dataTime))+" ")]}},{key:"item.eventType",fn:function(t){var s=t.item;return[a("span",{style:{backgroundColor:s.eventType<2?"LightYellow":"transparent",color:s.eventType>3?"red":"black","font-weight":s.eventType>3?"bold":"normal"}},[e._v(" "+e._s(e.eventTypes[s.eventType].text)+" ")])]}},{key:"item.action",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editEvent(s)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteEvent(s)}}},[e._v(" mdi-delete ")])]}}])})],1)},T=[],k=(a("c975"),a("a434"),a("53ca")),S=a("b9b9"),O={name:"Events",data:function(){return{dialog:!1,valid:!1,dateFormatStr:"yyyy-mm-dd hh:MM:ss",startDateTime:"2019-01-01 00:00:00",endDateTime:"2021-01-01 00:00:00",events:[],eventTypes:[{value:0,text:"Alarm (unvalidated)"},{value:1,text:"Warning (unvalidated)"},{value:2,text:"False Alarm"},{value:3,text:"False Warning"},{value:4,text:"Tonic-Clonic Seizure"},{value:5,text:"Other Seizure"},{value:6,text:"Other Medical Issue"},{value:7,text:"Other Event"}],tableHeaders:[{text:"Date/Time",value:"dataTime"},{text:"Event Type",value:"eventType"},{text:"Notes",value:"desc"},{text:"Actions",value:"action"}],editedIndex:-1,editedEvent:{id:null,dataTime:new Date,eventType:7,desc:""},defaultEvent:{dataTime:new Date,eventType:7,desc:"Please enter description"}}},computed:{token:function(){return this.$store.state.token},url:function(){return this.$store.state.baseUrl},eventTypeText:function(e){return this.eventTypes[e]}},watch:{dialog:function(e){e||this.close()}},created:function(){console.log("Events.vue.created()")},mounted:function(){console.log("Events.vue.mounted()"),this.getEvents()},methods:{dateStr:function(e){var t;t=e instanceof Date?e:Date.parse(e);var a=S(t,this.dateFormatStr);return a},getEvents:function(){var e=this;if(this.$refs.form.validate()){var t={headers:{Authorization:"Token "+this.token}};console.log("getEvents()....config="+JSON.stringify(t)),x()({method:"get",url:this.url+"/api/events/?start="+S(this.startDateTime,e.dateFormatStr)+"&end="+S(this.endDateTime,e.dateFormatStr),headers:{Authorization:"Token "+this.token},data:{},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.events=t.data["results"],console.log("set events to "+JSON.stringify(e.events))):console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data))}))}},uploadToServer:function(e){var t,a;this.token;console.log("uploadToServer()....event="+JSON.stringify(e)),null!=e["id"]?(console.log("we have an existing record id, so updating it"),t="PUT",a=this.url+"/api/events/"+e["id"]+"/"):(console.log("no record id present - creating it"),t="POST",a=this.url+"/api/events/"),console.log(".........methodStr="+t+" urlStr="+a),x()({method:t,url:a,headers:{Authorization:"Token "+this.token},data:e,validateStatus:function(e){return e<500}}).then((function(e){200==e.status||201==e.status?console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Failed to upload record: "+e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)))}))},deleteOnServer:function(e){var t,a;this.token;t="DELETE",a=this.url+"/api/events/"+e+"/",console.log(".........methodStr="+t+" urlStr="+a),x()({method:t,url:a,headers:{Authorization:"Token "+this.token},data:{},validateStatus:function(e){return e<500}}).then((function(e){204==e.status?console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Failed to delete record: "+e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)))}))},editEvent:function(e){if(this.editedIndex=this.events.indexOf(e),this.editedEvent=Object.assign({},e),console.log("Type of dataTime = "+Object(k["a"])(this.editedEvent["dataTime"])),this.editedEvent["dataTime"]instanceof Date)console.log("editEvent: converting Date object to String"),this.editedEvent["dataTime"]=S(this.editedEvent["dataTime"],this.dateFormatStr);else{console.log("editEvent - dataTime is already a String object - reformatting");var t=Date.parse(this.editedEvent["dataTime"]);this.editedEvent["dataTime"]=S(t,this.dateFormatStr),console.log("dataTime="+this.editedEvent["dataTime"])}this.dialog=!0},deleteEvent:function(e){var t=this.events.indexOf(e),a=e["id"];confirm("Are you sure you want to delete this event?")&&(this.events.splice(t,1),this.deleteOnServer(a))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedEvent=Object.assign({},e.defaultEvent),e.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.events[this.editedIndex],this.editedEvent):this.events.push(this.editedEvent),this.uploadToServer(this.editedEvent),this.close()}}},E=O,N=Object(u["a"])(E,_,T,!1,null,"3e8f3691",null),A=N.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],J={},R=Object(u["a"])(J,$,P,!1,null,null,null),C=R.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("h1",[e._v("Login")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-circle",name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"success"},on:{click:e.onRegister}},[e._v("Register ")]),a("v-btn",{attrs:{color:"info"},on:{click:e.onLogin}},[e._v("Login")]),a("br"),a("a",{attrs:{href:"/request-password-reset"}},[e._v("Reset Password")])],1)],1)},D=[],U={name:"Login",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=3||"Password must be greater than 3 characters"}]}},methods:{onLogin:function(){this.$refs.form.validate()&&this.$store.dispatch("login",{uname:this.uname,password:this.password})},onRegister:function(){Pe.push({path:"/register"})}}},j=U,L=Object(u["a"])(j,q,D,!1,null,"60d1de07",null),F=L.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"logout_text"}},[e.isAuthenticated?a("h1",[e._v("Still Logged in - why???")]):e._e(),e.isAuthenticated?e._e():a("h1",[e._v("Logged Out Successfully")])])},I=[],M={name:"Logout",data:function(){},created:function(){console.log("created called."),this.$store.dispatch("logout",{})},computed:{isAuthenticated:function(){return console.log("Logout.computed.isAuthenticated()"),this.$store.getters["isAuthenticated"]}},methods:{}},H=M,W=Object(u["a"])(H,z,I,!1,null,"5a3d56c6",null),V=W.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("h1",[e._v("Create Account to Use OpenSeizureDetector WebAPI")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),a("v-text-field",{attrs:{name:"firstname",label:"First Name:",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}}),a("v-text-field",{attrs:{name:"lastname",label:"Last Name:",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{name:"confirmpassword",label:"Confrm Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.confirmpassword,callback:function(t){e.confirmpassword=t},expression:"confirmpassword"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Create Account")])],1)],1)},G=[],Y={name:"Register",data:function(){return{valid:!1,uname:"",firstname:"",lastname:"",email:"",password:"",confirmpassword:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){if(console.log("Register.submit()"),this.$refs.form.validate()){var e={username:this.uname,first_name:this.firstname,last_name:this.lastname,email:this.email,password:this.password,password_confirm:this.confirmpassword};console.log("register: data = "+JSON.stringify(e));var t=this.$store.state.baseUrl;console.log("....url="+t),x()({method:"post",url:t+"/api/accounts/register/",data:e,validateStatus:function(e){return e<500}}).then((function(e){201==e.status?(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("User created successfully - you will receive a confirmation email in a few minutes"),console.log("redirecting to login page"),router.push({path:"/login/"})):console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data))})).catch((function(e){console.log("catch(): err="+JSON.stringify(e)),alert("error - "+JSON.stringify(e))}))}else console.log("Register.submit() - validation failed"),alert("Form Validation Failed - Please check form")}}},K=Y,Q=Object(u["a"])(K,B,G,!1,null,"c947da2e",null),X=Q.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.isConfirmed?a("h1",[e._v("Registration confirmed ok - Please "),a("a",{attrs:{href:"/login"}},[e._v("Login")])]):e._e(),e.isConfirmed?e._e():a("h1",[e._v('Confirmation Failed "'+e._s(e.msg)+'" : please try again....')])])},ee=[],te={name:"RegisterConfirm",data:function(){return{isConfirmed:!1,msg:""}},created:function(){console.log("created called.");var e=this,t={user_id:this.$route.query.user_id,timestamp:this.$route.query.timestamp,signature:this.$route.query.signature};x()({method:"post",url:this.url+"/api/accounts/verify-registration/",data:t,validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.isConfirmed=!0):(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.isConfirmed=!1,e.msg=t.data.detail)})).catch((function(t){console.log("catch(): err="+JSON.stringify(t)),e.isConfirmed=!1}))},computed:{url:function(){return this.$store.state.baseUrl}},methods:{}},ae=te,se=Object(u["a"])(ae,Z,ee,!1,null,"46aa7627",null),ne=se.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("h1",[e._v("Password Reset")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Reset Password")])],1)],1)},ie=[],re={name:"RequestPasswordReset",data:function(){return{valid:!1,uname:""}},methods:{submit:function(){console.log("RequestPasswordReset.submit()");var e={login:this.uname};console.log("requestPasswordReset.submit(): data = "+JSON.stringify(e));var t=this.$store.state.baseUrl;console.log("....url="+t),x()({method:"post",url:t+"/api/accounts/send-reset-password-link/",data:e,validateStatus:function(e){return e<500}}).then((function(e){200==e.status?(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Request Accepted - you will receive a confirmation email in a few minutes"),console.log("redirecting to login page"),router.push({path:"/login/"})):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),console.log("Wrong Response Code: "+e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)))})).catch((function(e){console.log("catch(): err="+JSON.stringify(e))}))}}},le=re,ce=Object(u["a"])(le,oe,ie,!1,null,"3fecb66d",null),ue=ce.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("h1",[e._v("Reset Password")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{name:"confirmpassword",label:"Confrm Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.confirmpassword,callback:function(t){e.confirmpassword=t},expression:"confirmpassword"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Reset Password")])],1)],1)},fe=[],me={name:"ResetPassword",data:function(){return{valid:!1,password:"",confirmpassword:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){if(console.log("ResetPassword.submit()"),this.$refs.form.validate()){var e={user_id:this.$route.query.user_id,timestamp:this.$route.query.timestamp,signature:this.$route.query.signature,password:this.password};console.log("resetPassword: data = "+JSON.stringify(e));var t=this.$store.state.baseUrl;console.log("....url="+t),x()({method:"post",url:t+"/api/accounts/reset-password/",data:e,validateStatus:function(e){return e<500}}).then((function(e){200==e.status?(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Password Reset successfully - please Login"),console.log("redirecting to login page"),Pe.push({path:"/login/"})):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Unexpected Response: "+e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)))})).catch((function(e){console.log("catch(): err="+JSON.stringify(e))}))}else console.log("Register.submit() - validation failed"),alert("Form Validation Failed - Please check form")}}},ve=me,pe=Object(u["a"])(ve,de,fe,!1,null,"171c79e4",null),he=pe.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PageNotFound"},[a("h1",[e._v("Page Not Found")]),a("p",[e._v(" URL: "+e._s(e.url))])])},be=[],ye={name:"Login",data:function(){return{url:window.location.pathname,urlText:"test text"}}},xe=ye,we=Object(u["a"])(xe,ge,be,!1,null,null,null),_e=we.exports,Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",[a("h1",[e._v("User Profile - User Id: "+e._s(e.profile.user))]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.profile.username,callback:function(t){e.$set(e.profile,"username",t)},expression:"profile.username"}})],1),a("v-col",[a("v-text-field",{attrs:{name:"email",label:"email:",required:""},model:{value:e.profile.email,callback:function(t){e.$set(e.profile,"email",t)},expression:"profile.email"}})],1)],1),a("v-row",[a("v-col",[a("v-text-field",{attrs:{name:"firstname",label:"First Name:",required:""},model:{value:e.profile.first_name,callback:function(t){e.$set(e.profile,"first_name",t)},expression:"profile.first_name"}})],1),a("v-col",[a("v-text-field",{attrs:{name:"lastname",label:"Last Name:",required:""},model:{value:e.profile.last_name,callback:function(t){e.$set(e.profile,"last_name",t)},expression:"profile.last_name"}})],1)],1),a("v-row",[a("v-date-picker",{attrs:{label:"Date of Birth: {{ profile.dob }}","date-format":"yyyy-MM-dd"},model:{value:e.profile.dob,callback:function(t){e.$set(e.profile,"dob",t)},expression:"profile.dob"}})],1),a("v-row",[a("v-text-field",{attrs:{name:"medicalconditions",label:"Medical Conditions:",required:""},model:{value:e.profile.medicalConditions,callback:function(t){e.$set(e.profile,"medicalConditions",t)},expression:"profile.medicalConditions"}})],1),a("v-row",[a("v-checkbox",{attrs:{label:"Lience Agreement Accepted?: "},model:{value:e.profile.licenceAccepted,callback:function(t){e.$set(e.profile,"licenceAccepted",t)},expression:"profile.licenceAccepted"}})],1),a("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Update")])],1)],1)],1)],1)},ke=[],Se=(a("b9b9"),{name:"Profile",data:function(){return{valid:!1,profile:{uname:"none",user:null,dob:null,medicalConditions:""},profileDefault:{uname:"none",user:null,dob:null,medicalConditions:""}}},methods:{submit:function(){this.$refs.form.validate()&&this.saveProfile()},getProfile:function(){console.log("getProfile()....");var e=this,t=this.$store.state.baseUrl+"/api/profile/",a="get",s={};this.$store.dispatch("authRequest",{url:t,action:a,data:s,successCb:function(t){console.log("successCb - response="+JSON.stringify(t)),200==t.status?t.data.count>0?(e.profile=t.data.results[0],console.log("profile="+JSON.stringify(e.profile))):(console.log("no profile returned"),e.profile=e.profileDefault):(console.log("Unexpected status code "+t.status+": "+t.statusText),alert("Unexpected status code "+t.status+": "+t.statusText),e.profile=e.profileDefault)},failCb:function(e){console.log("failCb - response="+JSON.stringify(e)),alert("failCb - response="+JSON.stringify(e))}})},saveProfile:function(){console.log("saveProfile()....");var e=this,t=this.$store.state.baseUrl+"/api/profile/"+e.profile.id+"/",a="put",s=e.profile;this.$store.dispatch("authRequest",{url:t,action:a,data:s,successCb:function(t){console.log("successCb - response="+JSON.stringify(t)),200==t.status?t.data.count>0&&(e.profile=t.data.results[0],console.log("profile="+JSON.stringify(e.profile))):(console.log("Unexpected status code "+t.status+": "+t.statusText),alert("Unexpected status code "+t.status+": "+t.statusText))},failCb:function(e){console.log("failCb - response="+JSON.stringify(e)),alert("failCb - response="+JSON.stringify(e))}})}},mounted:function(){console.log("Events.vue.mounted()"),this.getProfile()}}),Oe=Se,Ee=Object(u["a"])(Oe,Te,ke,!1,null,"82730c20",null),Ne=Ee.exports;s["default"].use(g["a"]);var Ae=[{path:"/",alias:["/home/","/static/dist/","/events/"],name:"home",component:A,meta:{auth:!0}},{path:"/login/",name:"login",component:F,meta:{auth:!1}},{path:"/logout/",name:"logout",component:V,meta:{auth:!0}},{path:"/register/",name:"register",component:X,meta:{auth:!1}},{path:"/confirm/",name:"registerconfirm",component:ne,meta:{auth:!1}},{path:"/request-password-reset/",name:"request-password-reset",component:ue,meta:{auth:!1}},{path:"/reset-password/",name:"reset-password",component:he,meta:{auth:!1}},{path:"/profile/",name:"profile",component:Ne,meta:{auth:!0}},{path:"/about/",name:"about",component:C,meta:{auth:!1}},{path:"*",name:"pagenotfound",component:_e,meta:{auth:!1}}],$e=new g["a"]({mode:"history",base:"",routes:Ae});$e.beforeEach((function(e,t,a){e.meta.auth?(console.log("router.beforeach - to.meta.auth is true..."),w.getters["isAuthenticated"]?(console.log("router.beforeEach - we are authenticated so continuing to page"),a()):(console.log("router.beforeEach - redirecting to login screen"),a({name:"login"}))):(console.log("router.beforeEach - meta.auth is false - continuing to page"),a())}));var Pe=$e,Je=a("ce5b"),Re=a.n(Je);a("bf40");s["default"].use(Re.a);var Ce=new Re.a({}),qe=a("ad24");a("87df");s["default"].use(qe["a"]),s["default"].config.productionTip=!1,new s["default"]({router:Pe,store:w,vuetify:Ce,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.5ff1bd1d.js.map