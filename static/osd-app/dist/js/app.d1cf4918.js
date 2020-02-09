(function(e){function t(t){for(var a,s,i=t[0],l=t[1],u=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-navigation"),n("v-content",{attrs:{transition:"slide-x-transition"}},[n("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-app-bar",{attrs:{app:"",color:"brown darken4",dark:""}},[n("v-toolbar-title",[e._v(e._s(e.appTitle))]),n("v-btn",{attrs:{text:"",to:"/About"}},[e._v("About")]),n("v-spacer"),e.isAuthenticated?e._e():n("v-btn",{attrs:{text:"",to:"/Login"}},[e._v("Login/Register")]),e.isAuthenticated?n("v-btn",{attrs:{text:"",to:"/profile"}},[e._v("Account")]):e._e()],1),n("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[e._l(e.items,(function(t,a){return[n("v-list-item",[e._v(" "+e._s(t.title)+" ")]),n("v-divider",{key:"divider-"+a})]}))],2)],1)],1)},i=[],l={name:"AppNavigation",data:function(){return{appTitle:"OpenSeizureDetector WebAPI",drawer:!1,items:[{title:"drawer-btn1"},{title:"drawer-Log In"}]}},computed:{isAuthenticated:function(){return this.$store.getters["isAuthenticated"]}}},u=l,c=n("2877"),d=Object(c["a"])(u,s,i,!1,null,"4fb5f558",null),f=d.exports,m={name:"App",components:{AppNavigation:f}},p=m,v=Object(c["a"])(p,r,o,!1,null,null,null),h=v.exports,g=n("8c4f"),b=n("2f62"),w=n("bc3a"),_=n.n(w);a["default"].use(b["a"]);var x=new b["a"].Store({state:{baseUrl:"https://osd.dynu.net",isAuthenticated:!1,token:null},getters:{isAuthenticated:function(e){return console.log("getters.isAuthenticated: "+e.isAuthenticated),e.isAuthenticated}},mutations:{setToken:function(e,t){e.token=t,console.log("store.mutations.setToken - token = "+e.token)},setIsAuthenticated:function(e,t){e.isAuthenticated=t,console.log("setIsAuthenticated: "+e.isAuthenticated)}},actions:{login:function(e,t){var n=t.uname,a=t.password;console.log("login("+n+","+a+")");var r=e.state.baseUrl;console.log("....url="+r),_()({method:"post",url:r+"/accounts/login/",data:{login:n,password:a},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",t.data["token"]),e.commit("setIsAuthenticated",!0),console.log("redirecting to home page"),ce.push({path:"/home"})):(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1))})).catch((function(t){console.log("catch(): err="+JSON.stringify(t)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)}))},logout:function(e){console.log("logout"),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)},getUserDetails:function(e){console.log("getUserDetails")}},modules:{}}),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("h1",[e._v("Home Page")]),n("events")],1)],1)],1)},k=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("h1",[e._v("Events")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}})],1)],1)],1)},O=[],P={name:"Events",data:function(){return{valid:!1}},methods:{getEvents:function(){this.$refs.form.validate()&&console.log("getEvents() - FIXME - this doesn't do anything")}}},j=P,E=Object(c["a"])(j,A,O,!1,null,"0593b7ef",null),$=E.exports;console.log("Home.vue");var T={name:"home",components:{Events:$}},I=T,S=Object(c["a"])(I,y,k,!1,null,null,null),N=S.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],U={},z=Object(c["a"])(U,R,q,!1,null,null,null),C=z.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("h1",[e._v("Login to OpenSeizureDetector WebAPI")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Login")])],1),n("p",[e._v(" Not Registered? "),n("v-btn",{attrs:{text:"",to:"/register"}},[e._v("Create account")])],1)],1)],1)],1)},L=[],D={name:"Login",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("login",{uname:this.uname,password:this.password})}}},F=D,J=Object(c["a"])(F,M,L,!1,null,"04d828be",null),W=J.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs24:"",sm16:"",md8:""}},[n("h1",[e._v("Create Account to Use OpenSeizureDetector WebAPI")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{name:"confirmpassword",label:"Confrm Password",id:"confirmpassword",type:"password",required:"",rules:e.passwordRules},model:{value:e.confirmpassword,callback:function(t){e.confirmpassword=t},expression:"confirmpassword"}}),n("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Create Account")])],1)],1)],1)],1)},H=[],B={name:"Register",data:function(){return{valid:!1,uname:"",email:"",password:"",confirmpassword:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&console.log("FIXME - register button does not work!")}}},G=B,K=Object(c["a"])(G,X,H,!1,null,"5a956be0",null),Q=K.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageNotFound"},[n("h1",[e._v("Page Not Found")])])}],Z={},ee=Object(c["a"])(Z,V,Y,!1,null,null,null),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("h1",[e._v("User Profile")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Update")])],1),n("p",[e._v(" Not Registered? "),n("v-btn",{attrs:{text:""}},[e._v("Create account")])],1)],1)],1)],1)},ae=[],re={name:"Profile",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&console.log("submit() - FIXME - this doesn't do anything")}}},oe=re,se=Object(c["a"])(oe,ne,ae,!1,null,"59d872fe",null),ie=se.exports;a["default"].use(g["a"]);var le=[{path:"/",alias:"/home",name:"home",component:N,meta:{auth:!0}},{path:"/login",name:"login",component:W,meta:{auth:!1}},{path:"/register",name:"register",component:Q,meta:{auth:!1}},{path:"/profile",name:"profile",component:ie,meta:{auth:!0}},{path:"/about",name:"about",component:C,meta:{auth:!1}},{path:"*",name:"pagenotfound",component:te,meta:{auth:!1}}],ue=new g["a"]({mode:"history",base:"/",routes:le});ue.beforeEach((function(e,t,n){e.meta.auth?(console.log("router.beforeach - to.meta.auth is true..."),x.getters["isAuthenticated"]?(console.log("router.beforeEach - we are authenticated so continuing to page"),n()):(console.log("router.beforeEach - redirecting to login screen"),n({name:"login"}))):(console.log("router.beforeEach - meta.auth is false - continuing to page"),n())}));var ce=ue,de=n("ce5b"),fe=n.n(de);n("bf40");a["default"].use(fe.a);var me=new fe.a({});a["default"].config.productionTip=!1,new a["default"]({router:ce,store:x,vuetify:me,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.d1cf4918.js.map