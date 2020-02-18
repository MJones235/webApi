(function(e){function t(t){for(var n,r,i=t[0],l=t[1],d=t[2],c=0,v=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("app-navigation"),a("v-content",{attrs:{transition:"slide-x-transition"}},[a("router-view")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("v-app-bar",{attrs:{app:"",color:"brown darken4",dark:""}},[a("v-toolbar-title",[e._v(e._s(e.appTitle))]),a("v-btn",{attrs:{text:"",to:"/About"}},[e._v("About")]),a("v-spacer"),e.isAuthenticated?e._e():a("v-btn",{attrs:{text:"",to:"/Login"}},[e._v("Login/Register")]),e.isAuthenticated?a("v-btn",{attrs:{text:"",to:"/profile"}},[e._v("Account")]):e._e()],1),a("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",[e._l(e.items,(function(t,n){return[a("v-list-item",[e._v(" "+e._s(t.title)+" ")]),a("v-divider",{key:"divider-"+n})]}))],2)],1)],1)},i=[],l={name:"AppNavigation",data:function(){return{appTitle:"OpenSeizureDetector WebAPI",drawer:!1,items:[{title:"drawer-btn1"},{title:"drawer-Log In"}]}},computed:{isAuthenticated:function(){return this.$store.getters["isAuthenticated"]}}},d=l,u=a("2877"),c=Object(u["a"])(d,r,i,!1,null,"4fb5f558",null),v=c.exports,m={name:"App",components:{AppNavigation:v}},f=m,p=Object(u["a"])(f,s,o,!1,null,null,null),h=p.exports,g=a("8c4f"),b=a("2f62"),y=a("bc3a"),w=a.n(y);n["default"].use(b["a"]);var x=new b["a"].Store({state:{baseUrl:"https://osd.dynu.net",isAuthenticated:!1,token:null},getters:{baseUrl:function(e){return e.baseUrl},token:function(e){return e.token},isAuthenticated:function(e){return console.log("getters.isAuthenticated: "+e.isAuthenticated),e.isAuthenticated}},mutations:{setToken:function(e,t){e.token=t,console.log("store.mutations.setToken - token = "+e.token)},setIsAuthenticated:function(e,t){e.isAuthenticated=t,console.log("setIsAuthenticated: "+e.isAuthenticated)}},actions:{login:function(e,t){var a=t.uname,n=t.password;console.log("login("+a+","+n+")");var s=e.state.baseUrl;console.log("....url="+s),w()({method:"post",url:s+"/api/accounts/login/",data:{login:a,password:n},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",t.data["token"]),e.commit("setIsAuthenticated",!0),console.log("redirecting to events page"),ie.push({path:"/events/"})):(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1))})).catch((function(t){console.log("catch(): err="+JSON.stringify(t)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)}))},logout:function(e){console.log("logout"),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)},getUserDetails:function(e){console.log("getUserDetails")}},modules:{}}),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[a("h1",[e._v("Events - Select Events by Date")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-datetime-picker",{attrs:{label:"Start","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}})],1),a("v-col",[a("v-datetime-picker",{attrs:{label:"End","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}},[e._v(" > ")])],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:e.getEvents}},[e._v("Get Events")])],1)],1),a("v-card-actions")],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.tableHeaders,items:e.events,"items-per-page":20},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},n),[e._v("Add New Event")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Create / Edit Event")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-datetime-picker",{attrs:{label:"Event Date/Time","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.editedEvent.dataTime,callback:function(t){e.$set(e.editedEvent,"dataTime",t)},expression:"editedEvent.dataTime"}},[e._v(" > ")])],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.eventTypes,"menu-props":"auto","hide-details":"",label:"Event Type","single-line":""},model:{value:e.editedEvent.eventType,callback:function(t){e.$set(e.editedEvent,"eventType",t)},expression:"editedEvent.eventType"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Description"},model:{value:e.editedEvent.desc,callback:function(t){e.$set(e.editedEvent,"desc",t)},expression:"editedEvent.desc"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)]},proxy:!0},{key:"item.dataTime",fn:function(t){var a=t.item;return[e._v(" "+e._s(e.dateStr(a.dataTime))+" ")]}},{key:"item.eventType",fn:function(t){var n=t.item;return[a("span",{style:{backgroundColor:n.eventType<2?"LightYellow":"transparent",color:n.eventType>3?"red":"black","font-weight":n.eventType>3?"bold":"normal"}},[e._v(" "+e._s(e.eventTypes[n.eventType].text)+" ")])]}},{key:"item.action",fn:function(t){var n=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editEvent(n)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteEvent(n)}}},[e._v(" mdi-delete ")])]}}])})],1)},k=[],E=(a("c975"),a("a434"),a("53ca")),_=a("b9b9"),S={name:"Events",data:function(){return{dialog:!1,valid:!1,dateFormatStr:"yyyy-mm-dd hh:MM:ss",startDateTime:"2019-01-01 00:00:00",endDateTime:"2021-01-01 00:00:00",events:[],eventTypes:[{value:0,text:"Alarm (unvalidated)"},{value:1,text:"Warning (unvalidated)"},{value:2,text:"False Alarm"},{value:3,text:"False Warning"},{value:4,text:"Tonic-Clonic Seizure"},{value:5,text:"Other Seizure"},{value:6,text:"Other Medical Issue"},{value:7,text:"Other Event"}],tableHeaders:[{text:"Date/Time",value:"dataTime"},{text:"Event Type",value:"eventType"},{text:"Notes",value:"desc"},{text:"Actions",value:"action"}],editedIndex:-1,editedEvent:{id:null,dataTime:new Date,eventType:7,desc:""},defaultEvent:{dataTime:new Date,eventType:7,desc:"Please enter description"}}},computed:{token:function(){return this.$store.state.token},url:function(){return this.$store.state.baseUrl},eventTypeText:function(e){return this.eventTypes[e]}},watch:{dialog:function(e){e||this.close()}},created:function(){console.log("Events.vue.created()")},mounted:function(){console.log("Events.vue.mounted()"),this.getEvents()},methods:{dateStr:function(e){var t;t=e instanceof Date?e:Date.parse(e);var a=_(t,this.dateFormatStr);return a},getEvents:function(){var e=this;if(this.$refs.form.validate()){var t={headers:{Authorization:"Token "+this.token}};console.log("getEvents()....config="+JSON.stringify(t)),w()({method:"get",url:this.url+"/api/events/?start="+_(this.startDateTime,e.dateFormatStr)+"&end="+_(this.endDateTime,e.dateFormatStr),headers:{Authorization:"Token "+this.token},data:{},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.events=t.data["results"],console.log("set events to "+JSON.stringify(e.events))):console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data))}))}},uploadToServer:function(e){var t,a;this.token;console.log("uploadToServer()....event="+JSON.stringify(e)),null!=e["id"]?(console.log("we have an existing record id, so updating it"),t="PUT",a=this.url+"/api/events/"+e["id"]+"/"):(console.log("no record id present - creating it"),t="POST",a=this.url+"/api/events/"),console.log(".........methodStr="+t+" urlStr="+a),w()({method:t,url:a,headers:{Authorization:"Token "+this.token},data:e,validateStatus:function(e){return e<500}}).then((function(e){200==e.status||201==e.status?console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Failed to upload record: "+e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)))}))},deleteOnServer:function(e){var t,a;this.token;t="DELETE",a=this.url+"/api/events/"+e+"/",console.log(".........methodStr="+t+" urlStr="+a),w()({method:t,url:a,headers:{Authorization:"Token "+this.token},data:{},validateStatus:function(e){return e<500}}).then((function(e){204==e.status?console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert("Failed to delete record: "+e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)))}))},editEvent:function(e){if(this.editedIndex=this.events.indexOf(e),this.editedEvent=Object.assign({},e),console.log("Type of dataTime = "+Object(E["a"])(this.editedEvent["dataTime"])),this.editedEvent["dataTime"]instanceof Date)console.log("editEvent: converting Date object to String"),this.editedEvent["dataTime"]=_(this.editedEvent["dataTime"],this.dateFormatStr);else{console.log("editEvent - dataTime is already a String object - reformatting");var t=Date.parse(this.editedEvent["dataTime"]);this.editedEvent["dataTime"]=_(t,this.dateFormatStr),console.log("dataTime="+this.editedEvent["dataTime"])}this.dialog=!0},deleteEvent:function(e){var t=this.events.indexOf(e),a=e["id"];confirm("Are you sure you want to delete this event?")&&(this.events.splice(t,1),this.deleteOnServer(a))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedEvent=Object.assign({},e.defaultEvent),e.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.events[this.editedIndex],this.editedEvent):this.events.push(this.editedEvent),this.uploadToServer(this.editedEvent),this.close()}}},O=S,A=Object(u["a"])(O,T,k,!1,null,"3e8f3691",null),D=A.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],N={},$=Object(u["a"])(N,P,j,!1,null,null,null),I=$.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("h1",[e._v("Login")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account-circle",name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"success"},on:{click:e.onRegister}},[e._v("Register ")]),a("v-btn",{attrs:{color:"info"},on:{click:e.onLogin}},[e._v("Login")])],1)],1)},M=[],R={name:"Login",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=3||"Password must be greater than 3 characters"}]}},methods:{onLogin:function(){this.$refs.form.validate()&&this.$store.dispatch("login",{uname:this.uname,password:this.password})},onRegister:function(){ie.push({path:"/register"})}}},C=R,F=Object(u["a"])(C,J,M,!1,null,"7c28acef",null),U=F.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("h1",[e._v("Create Account to Use OpenSeizureDetector WebAPI")])]),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{name:"confirmpassword",label:"Confrm Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.confirmpassword,callback:function(t){e.confirmpassword=t},expression:"confirmpassword"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Create Account")])],1)],1)},q=[],L={name:"Register",data:function(){return{valid:!1,uname:"",email:"",password:"",confirmpassword:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&(alert("FIXME - register button does not work!"),console.log("FIXME - register button does not work!"))}}},H=L,W=Object(u["a"])(H,z,q,!1,null,"5b699c70",null),X=W.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PageNotFound"},[a("h1",[e._v("Page Not Found")]),a("p",[e._v(" URL: "+e._s(e.url))])])},Y=[],B={name:"Login",data:function(){return{url:window.location.pathname,urlText:"test text"}}},K=B,Q=Object(u["a"])(K,G,Y,!1,null,null,null),V=Q.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[a("h1",[e._v("User Profile")]),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),a("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Update")])],1),a("p",[e._v(" Not Registered? "),a("v-btn",{attrs:{text:""}},[e._v("Create account")])],1)],1)],1)],1)},ee=[],te={name:"Profile",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&console.log("submit() - FIXME - this doesn't do anything")}}},ae=te,ne=Object(u["a"])(ae,Z,ee,!1,null,"59d872fe",null),se=ne.exports;n["default"].use(g["a"]);var oe=[{path:"/",alias:["/home/","/static/dist/","/events/"],name:"home",component:D,meta:{auth:!0}},{path:"/login/",name:"login",component:U,meta:{auth:!1}},{path:"/register/",name:"register",component:X,meta:{auth:!1}},{path:"/profile/",name:"profile",component:se,meta:{auth:!0}},{path:"/about/",name:"about",component:I,meta:{auth:!1}},{path:"*",name:"pagenotfound",component:V,meta:{auth:!1}}],re=new g["a"]({mode:"history",base:"",routes:oe});re.beforeEach((function(e,t,a){e.meta.auth?(console.log("router.beforeach - to.meta.auth is true..."),x.getters["isAuthenticated"]?(console.log("router.beforeEach - we are authenticated so continuing to page"),a()):(console.log("router.beforeEach - redirecting to login screen"),a({name:"login"}))):(console.log("router.beforeEach - meta.auth is false - continuing to page"),a())}));var ie=re,le=a("ce5b"),de=a.n(le);a("bf40");n["default"].use(de.a);var ue=new de.a({}),ce=a("ad24");a("87df");n["default"].use(ce["a"]),n["default"].config.productionTip=!1,new n["default"]({router:ie,store:x,vuetify:ue,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.0c97b0d7.js.map