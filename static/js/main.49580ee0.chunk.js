(this["webpackJsonplearn-project"]=this["webpackJsonplearn-project"]||[]).push([[1],{121:function(e,t,n){"use strict";var r=n.p+"static/media/three-dots.4837ff4e.svg",a=n(7);t.a=function(){return Object(a.jsx)("img",{src:r,alt:"preloader"})}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return O}));var r=n(56),a=n(8),c=n(14),s=function(e){return c.c.get("profile/".concat(e)).then((function(e){var t=e.status,n=e.data;return console.log(t,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"),n}))},o=function(e){return c.c.get("/profile/status/".concat(e)).then((function(e){var t=e.status,n=e.data;return console.log(t,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"),n}))},u=function(e){return c.c.put("/profile/status",{status:e}).then((function(e){var t=e.status,n=e.data;return console.log(t,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"),n}))},i=function(e){var t=new FormData;return t.append("image",e),c.c.put("/profile/photo",t,{headers:{"Content-Type":"multipart*form-data"}}).then((function(e){var t=e.status,n=e.data;return console.log(t,"\u0424\u043e\u0442\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"),n}))},l={postsData:[{id:0,message:"Hello",name:"Kira",age:"13"},{id:1,message:"How are you?",name:"Line",age:52},{id:2,message:"Are you fine?",name:"Lina",age:12},{id:3,message:"How old are you?",name:"Kostya",age:53},{id:4,message:"Glad to see you",name:"Dasha",age:36}],profile:null,status:""},d={addPost:function(e){return{type:"ADD_POST",postText:e}},removePost:function(e){return{type:"REMOVE_POST",id:e}},savePhotoSuccess:function(e){return{type:"SET_PHOTO_SUCCESS",photo:e}},setStatus:function(e){return{type:"SET_STATUS",status:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}}},f=function(e){return function(t){s(e).then((function(e){t(d.setUserProfile(e))}))}},b=function(e){return function(t){o(e).then((function(e){t(d.setStatus(e))}))}},j=function(e){return function(t){u(e).then((function(n){n.resultCode===c.a.Success&&t(d.setStatus(e))}))}},O=function(e){return function(t){i(e).then((function(e){e.resultCode===c.a.Success&&t(d.savePhotoSuccess(e.data.photos))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":if(void 0===t.postText)return e;var n={id:e.postsData.length+1,message:t.postText,name:"Masha",age:20};return Object(a.a)(Object(a.a)({},e),{},{postsData:[].concat(Object(r.a)(e.postsData),[n])});case"REMOVE_POST":return Object(a.a)(Object(a.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});case"SET_USER_PROFILE":return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(a.a)(Object(a.a)({},e),{},{status:t.status});case"SET_PHOTO_SUCCESS":return Object(a.a)(Object(a.a)({},e),{},{profile:Object(a.a)(Object(a.a)({},e.profile),{},{photos:t.photo})});default:return e}}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return O}));var r=n(56),a=n(8),c=n(14),s=function(e,t,n){var r=n.term,a=n.friend;return c.c.get("users?page=".concat(e,"&count=").concat(t)+(r?"&term=".concat(r):"")+(null===a?"":"&friend=".concat(a))).then((function(e){var t=e.status,n=e.data;return console.log(t,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),n}))},o=function(e){return c.c.post("follow/".concat(e)).then((function(e){var t=e.status,n=e.data;return console.log(t,"follow"),n}))},u=function(e){return c.c.delete("follow/".concat(e)).then((function(e){var t=e.status,n=e.data;return console.log(t,"unfollow"),n}))},i=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(a.a)(Object(a.a)({},e),r):e}))},l={usersData:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,filter:{term:"",friend:null},followingProgress:[]},d={acceptFollow:function(e){return{type:"FOLLOW",userId:e}},acceptUnfollow:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SET_USERS",usersData:e}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},setFilter:function(e){return{type:"SET_FILTER",payload:e}},setTotalUsersCount:function(e){return{type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},toggleFollowingProgress:function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",followingProgress:e,userId:t}}},f=function(e,t,n){return function(r){r(d.toggleIsFetching(!0)),r(d.setCurrentPage(e)),r(d.setFilter(n)),s(e,t,n).then((function(e){r(d.setUsers(e.items)),r(d.toggleIsFetching(!1)),r(d.setTotalUsersCount(e.totalCount))}))}},b=function(e,t,n,r){e(d.toggleFollowingProgress(!0,t)),n(t).then((function(n){n.resultCode===c.a.Success&&e(r(t)),e(d.toggleFollowingProgress(!1,t))}))},j=function(e){return function(t){var n=o,r=d.acceptFollow;b(t,e,n,r)}},O=function(e){return function(t){var n=u,r=d.acceptUnfollow;b(t,e,n,r)}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(a.a)(Object(a.a)({},e),{},{usersData:i(e.usersData,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(a.a)(Object(a.a)({},e),{},{usersData:i(e.usersData,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(a.a)(Object(a.a)({},e),{},{usersData:Object(r.a)(t.usersData)});case"SET_CURRENT_PAGE":return Object(a.a)(Object(a.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(a.a)(Object(a.a)({},e),{},{totalUsersCount:t.totalUsersCount/100});case"TOGGLE_IS_FETCHING":return Object(a.a)(Object(a.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(a.a)(Object(a.a)({},e),{},{followingProgress:t.followingProgress?[].concat(Object(r.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});case"SET_FILTER":return Object(a.a)(Object(a.a)({},e),{},{filter:Object(a.a)({},t.payload)});default:return e}}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r,a,c=n(175),s=n.n(c).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"c1f0b7d1-dc16-41bd-b130-0fd123149d60"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CapthaIsRequired=10]="CapthaIsRequired"}(a||(a={}))},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(56),a=n(8),c={dialogsData:[{id:1,name:"\u041f\u0435\u0442\u044f"},{id:2,name:"\u041c\u0430\u0448\u0430"},{id:3,name:"\u041a\u0430\u0442\u044f"},{id:4,name:"\u0412\u0430\u043d\u044f"},{id:5,name:"\u041a\u0438\u0440\u0430"}],messagesData:[{id:1,message:"\u041a\u0443!"},{id:2,message:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:3,message:"\u0412\u0441\u0435 \u0433\u0443\u0434"}]},s={sendMessage:function(e){return{type:"SEND_MESSAGE",message:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if("SEND_MESSAGE"===t.type){if(void 0===t.message)return e;var n={id:4,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])})}return e}},323:function(e,t,n){},360:function(e,t){},362:function(e,t){},412:function(e,t,n){"use strict";n.r(t);var r=n(74),a=n(174),c=n(173),s=n(177),o=n(8),u=n(64),i={initialized:!1},l=function(){return{type:"SET_INITIALIZE"}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;return"SET_INITIALIZE"===t.type?Object(o.a)(Object(o.a)({},e),{},{initialized:!0}):e},f=n(141),b=n(125),j=n(128),O=Object(r.combineReducers)({profilePage:b.b,dialogsPage:f.b,usersPage:j.b,auth:u.b,form:c.a,app:d}),g=Object(r.createStore)(O,Object(a.composeWithDevTools)(Object(r.applyMiddleware)(s.a))),h=n(0),p=n.n(h),m=n(29),S=n.n(m),E=n(415),v=(n(317),n(32)),T=n(41),_=n(9),x=(n(323),n(121)),y=n(418),P=n(416),I=n(53),C=n(70),U=n.n(C),w=n(7),L=function(){var e=Object(v.d)(I.b),t=e.isAuth,n=e.login,r=Object(v.c)();return Object(w.jsx)("header",{className:U.a.header,children:Object(w.jsxs)("div",{className:U.a.login,children:[Object(w.jsx)(P.a,{icon:Object(w.jsx)(y.a,{})}),t?Object(w.jsxs)("div",{className:U.a.user,children:[n,Object(w.jsx)("button",{onClick:function(){r(Object(u.d)())},className:U.a.button,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(w.jsx)(T.c,{to:"/login",className:U.a.button,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},R=n(417),D=function(){var e=Object(v.d)(I.b).userId;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(R.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},children:[Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(T.b,{to:"/profile/".concat(e),children:"Profile"})},"1"),Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(T.b,{to:"/dialogs",children:"Messages"})},"2"),Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(T.b,{to:"/users",children:"Users"})},"3"),Object(w.jsx)(R.a.Item,{children:Object(w.jsx)(T.b,{to:"/chat",children:"Chat"})},"4")]})})},F=E.a.Header,A=E.a.Content,N=E.a.Sider,G=p.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,506))})),H=p.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,505))})),M=p.a.lazy((function(){return Promise.all([n.e(5),n.e(8)]).then(n.bind(null,507))})),z=p.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,503))})),k=p.a.lazy((function(){return n.e(9).then(n.bind(null,504))})),W=function(){var e=Object(v.c)(),t=Object(v.d)(I.b).userId,n=Object(v.d)(I.a).initialized;return Object(h.useEffect)((function(){e((function(e){var t=e(Object(u.a)());Promise.all([t]).then((function(){e(l())}))}))}),[]),n?Object(w.jsx)(T.a,{children:Object(w.jsxs)(E.a,{children:[Object(w.jsxs)(F,{className:"header",children:[Object(w.jsx)("div",{className:"logo"}),Object(w.jsx)(L,{})]}),Object(w.jsx)(A,{style:{padding:"0 50px"},children:Object(w.jsxs)(E.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(w.jsx)(N,{className:"site-layout-background",width:200,children:Object(w.jsx)(D,{})}),Object(w.jsx)(A,{style:{padding:"0 24px",minHeight:280},children:Object(w.jsx)(h.Suspense,{fallback:Object(w.jsx)(x.a,{}),children:Object(w.jsxs)(_.d,{children:[Object(w.jsx)(_.b,{path:"/",element:Object(w.jsx)(_.a,{to:"/profile/".concat(t)})}),Object(w.jsx)(_.b,{path:"/dialogs/*",element:Object(w.jsx)(G,{})}),Object(w.jsx)(_.b,{path:"/profile/:id",element:Object(w.jsx)(H,{})}),Object(w.jsx)(_.b,{path:"/users",element:Object(w.jsx)(M,{})}),Object(w.jsx)(_.b,{path:"/login",element:Object(w.jsx)(z,{})}),Object(w.jsx)(_.b,{path:"/chat",element:Object(w.jsx)(k,{})}),Object(w.jsx)(_.b,{path:"*",element:Object(w.jsx)("div",{children:"404 not found"})})]})})})]})})]})}):Object(w.jsx)(x.a,{})};n(326).publish("dist",{repo:"https://github.com/TheCatLucky/FirstGame.git"}),S.a.render(Object(w.jsx)(v.a,{store:g,children:Object(w.jsx)(W,{})}),document.getElementById("root"))},53:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}));var r=function(e){return e.usersPage},a=function(e){return e.profilePage},c=function(e){return e.auth},s=function(e){return e.dialogsPage},o=function(e){return e.app}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return O}));var r=n(8),a=n(106),c=n(14),s=function(){return c.c.get("auth/me").then((function(e){var t=e.status,n=e.data;return console.log(t,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),n}))},o=function(e){var t=e.email,n=e.password,r=e.rememberMe,a=e.captcha;return c.c.post("auth/login",{email:t,password:n,rememberMe:r,captcha:a}).then((function(e){var t=e.status,n=e.data;return console.log(t,"\u041b\u043e\u0433\u0438\u043d\u0438\u0437\u0430\u0446\u0438\u044f"),n}))},u=function(){return c.c.delete("auth/login").then((function(e){var t=e.status,n=e.data;return console.log(t,"\u0420\u0430\u0437\u043b\u043e\u0433\u0438\u043d\u0435\u043d"),n}))},i=function(){return c.c.get("security/get-captcha-url").then((function(e){var t=e.status,n=e.data;return console.log(t,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043f\u0447\u0438"),n}))},l={userId:null,email:null,login:null,isAuth:!1,captchaURL:null},d=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},f=function(e){return{type:"SET_CAPTCHA_URL",payload:{captchaUrl:e}}},b=function(){return function(e){return s().then((function(t){if(t.resultCode===c.a.Success){var n=t.data,r=n.id,a=n.login,s=n.email;e(d(r,s,a,!0))}}))}},j=function(e){return function(t){o(e).then((function(e){var n=e.resultCode,r=e.messages;if(n===c.b.Success)t(b());else if(n===c.b.CapthaIsRequired)t(g());else{var s=r.length>0?r[0]:"Some Error";t(Object(a.b)("login",{_error:s}))}}))}},O=function(){return function(e){u().then((function(t){t.resultCode===c.a.Success&&e(d(null,null,null,!1))}))}},g=function(){return function(e){i().then((function(t){var n=t.url;console.log(n),e(f(n))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(r.a)(Object(r.a)({},e),t.payload);case"SET_CAPTCHA_URL":return Object(r.a)(Object(r.a)({},e),{},{captchaURL:t.payload.captchaUrl});default:return e}}},70:function(e,t,n){e.exports={login:"MyHeader_login__3yixz",button:"MyHeader_button__23zdP",user:"MyHeader_user__3m10Z"}}},[[412,2,3]]]);
//# sourceMappingURL=main.49580ee0.chunk.js.map