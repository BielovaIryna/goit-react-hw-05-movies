"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{155:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(689),a=n(87),u="MoviesList_moviesList__P6SP5",c="MoviesList_moviesItem__r+0sq",s="MoviesList_moviesLink__sYKmc",i=n(184),o=function(e){var t=e.moviesList,n=(0,r.TH)();return(0,i.jsx)("ul",{className:u,children:t.length>0?t.map((function(e){return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(a.rU,{className:s,state:{from:n},to:"/movies/".concat(e.id),children:e.title})},e.id)})):(0,i.jsx)("li",{children:"We dont have any film according your request"})})}},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(414),i=n(155),o=n(686),f=n(791),p=n(87),l=n(220),v="Movies_moviesInput__UOzRX",m="Movies_moviesSubmit__o4Cye",d=n(184),h=function(){var e=(0,p.lr)(),t=(0,a.Z)(e,2),n=t[0],u=t[1],h=(0,f.useState)(null),_=(0,a.Z)(h,2),x=_[0],y=_[1],k=(0,f.useState)(!1),w=(0,a.Z)(k,2),Z=w[0],b=w[1],g=(0,f.useState)(null),j=(0,a.Z)(g,2),L=j[0],S=j[1],q=n.get("query");return(0,f.useEffect)((function(){if(q){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,l.XK)(q);case 4:t=e.sent,y(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S(o.Notify.failure("Something went wrong"));case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[q]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("form",{onClick:function(e){e.preventDefault();var t=e.currentTarget.elements.searchKey.value;u({query:t})},children:[(0,d.jsx)("label",{className:v,children:(0,d.jsx)("input",{type:"text",name:"searchKey",required:!0})}),(0,d.jsx)("button",{className:m,type:"submit",children:"Search"})]}),null!==L&&L,Z&&(0,d.jsx)(s.Z,{}),null!==x&&(0,d.jsx)(i.Z,{moviesList:x})]})}},220:function(e,t,n){n.d(t,{Tg:function(){return i},XK:function(){return o},hG:function(){return f},k8:function(){return p},oV:function(){return l}});var r=n(861),a=n(757),u=n.n(a),c=n(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="e80bad7f60debc82d80be78f7cb21a36",i=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t,"&include_adult=false"));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=881.e1d3206a.chunk.js.map