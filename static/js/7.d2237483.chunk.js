/*! For license information please see 7.d2237483.chunk.js.LICENSE.txt */
(this["webpackJsonplearn-project"]=this["webpackJsonplearn-project"]||[]).push([[7],{229:function(e,n,r){"use strict";n.a=r.p+"static/media/user_default.a6143582.png"},244:function(e,n,r){e.exports={img:"Users_img__2iXmX",ava:"Users_ava__348my",button:"Users_button__2IeHC",user:"Users_user__3yQyo",userInfo:"Users_userInfo__T3yNp",name:"Users_name__1rXLe",userName:"Users_userName__1mHvV",selected:"Users_selected__2Mk6F",pagesNumber:"Users_pagesNumber__2soYk",pageNumber:"Users_pageNumber__2nv0Z"}},293:function(e,n,r){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var u=o.apply(null,t);u&&e.push(u)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var i in t)r.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},296:function(e,n,r){"use strict";r.r(n);var t=r(28),o=r(29),s=r(31),u=r(30),i=r(0),a=r.n(i),c=r(18),l=r(48),f=r(73),p="NOT_FOUND";var g=function(e,n){return e===n};function h(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,o=void 0===t?g:t,s=r.maxSize,u=void 0===s?1:s,i=r.resultEqualityCheck,a=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(o),c=1===u?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:p},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(a):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var o=r[t];return t>0&&(r.splice(t,1),r.unshift(o)),o.value}return p}return{get:t,put:function(n,o){t(n)===p&&(r.unshift({key:n,value:o}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,a);function l(){var n=c.get(arguments);if(n===p){if(n=e.apply(null,arguments),i){var r=c.getEntries(),t=r.find((function(e){return i(e.value,n)}));t&&(n=t.value)}c.put(arguments,n)}return n}return l.clearCache=function(){return c.clear()},l}function d(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function v(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var s,u=0,i={memoizeOptions:void 0},a=t.pop();if("object"===typeof a&&(i=a,a=t.pop()),"function"!==typeof a)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof a+"]");var c=i,l=c.memoizeOptions,f=void 0===l?r:l,p=Array.isArray(f)?f:[f],g=d(t),h=e.apply(void 0,[function(){return u++,a.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=g.length,r=0;r<n;r++)e.push(g[r].apply(null,arguments));return s=h.apply(null,e)}));return Object.assign(v,{resultFunc:a,memoizedResultFunc:h,dependencies:g,lastResult:function(){return s},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return o}var b=v(h),j=b((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),m=function(e){return e.usersPage.pageSize},y=function(e){return e.usersPage.totalUsersCount},w=function(e){return e.usersPage.currentPage},O=function(e){return e.usersPage.isFetching},_=function(e){return e.usersPage.followingProgress},P=r(21),x=r(293),C=r.n(x),N=r(244),U=r.n(N),S=r(2),k=function(e){for(var n=Object(i.useState)(1),r=Object(P.a)(n,2),t=r[0],o=r[1],s=Math.ceil(e.totalUsersCount/e.pageSize),u=[],a=1;a<=s;a++)u.push(a);var c=Math.ceil(s/e.portionSize),l=(t-1)*e.portionSize+1,f=t*e.portionSize;return Object(S.jsxs)("div",{className:U.a.pagesNumber,children:[t>1&&Object(S.jsx)("button",{onClick:function(){return o(t-1)},children:"Prev"}),u.filter((function(e){return e>=l&&e<=f})).map((function(n){return Object(S.jsx)("span",{className:C()(e.currentPage===n&&U.a.selected,U.a.pageNumber),onClick:function(){e.onPageChanged(n)},children:n},n)})),c>t&&Object(S.jsx)("button",{onClick:function(){return o(t+1)},children:"Next"})]})},z=r(11),F=r(229),A=function(e){return Object(S.jsxs)("div",{className:U.a.user,children:[Object(S.jsxs)("div",{className:U.a.ava,children:[Object(S.jsx)(z.b,{to:"/profile/"+e.user.id,children:Object(S.jsx)("img",{className:U.a.img,src:null!=e.user.photos.small?e.user.photos.small:F.a,alt:"avatar"})}),e.user.followed?Object(S.jsx)("button",{className:U.a.button,disabled:e.followingProgress.some((function(n){return n===e.user.id})),onClick:function(){e.unfollow(e.user.id)},children:"Unfollow"}):Object(S.jsx)("button",{className:U.a.button,disabled:e.followingProgress.some((function(n){return n===e.user.id})),onClick:function(){e.follow(e.user.id)},children:"Follow"})]}),Object(S.jsx)("div",{className:U.a.userInfo,children:Object(S.jsxs)("div",{className:U.a.name,children:[Object(S.jsxs)("div",{children:[e.user.name," "]}),Object(S.jsx)("div",{className:U.a.userName,children:e.user.status})]})})]})},I=function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k,{totalUsersCount:e.totalUsersCount,pageSize:e.pageSize,currentPage:e.currentPage,onPageChanged:e.onPageChanged,portionSize:10}),e.users.map((function(n){return Object(S.jsx)(A,{user:n,followingProgress:e.followingProgress,follow:e.follow,unfollow:e.unfollow},n.id)}))]})},E=function(e){Object(s.a)(r,e);var n=Object(u.a)(r);function r(){var e;Object(t.a)(this,r);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(e=n.call.apply(n,[this].concat(s))).onPageChanged=function(n){e.props.getUsers(n,e.props.pageSize)},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[this.props.isFetching?Object(S.jsx)(l.a,{}):null,Object(S.jsx)(I,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingProgress:this.props.followingProgress,userId:this.props.userId,onPageChanged:this.onPageChanged})]})}}]),r}(a.a.Component);n.default=Object(c.b)((function(e){return{users:j(e),pageSize:m(e),totalUsersCount:y(e),currentPage:w(e),isFetching:O(e),followingProgress:_(e)}}),{getUsers:f.c,follow:f.b,unfollow:f.d})(E)}}]);
//# sourceMappingURL=7.d2237483.chunk.js.map