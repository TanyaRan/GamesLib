(this.webpackJsonpgameslib=this.webpackJsonpgameslib||[]).push([[0],{66:function(e,n,t){"use strict";t.r(n);var a,c,r,i,o=t(0),s=t.n(o),d=t(11),l=t.n(d),b=t(6),u=t(10),g=t(18),m=t.n(g),p=t(29),j=t(13),h=t.n(j),f="https://api.rawg.io/api/games?key=f6be025439e4402fa456b90e2735dea4",O=(new Date).getFullYear(),x=function(){var e=(new Date).getMonth()+1;return e<10?"0".concat(e):e}(),v=function(){var e=(new Date).getDay();return e<10?"0".concat(e):e}(),w="".concat(O,"-").concat(x,"-").concat(v),y="".concat(O-1,"-").concat(x,"-").concat(v),k="".concat(O+1,"-").concat(x,"-").concat(v),F="&dates=".concat(y,",").concat(w,"&platforms=18,1,7&ordering=-rating&page_size=10"),z="&dates=".concat(w,",").concat(k,"&platforms=18,1,7&ordering=-added&page_size=10"),_="&dates=".concat(y,",").concat(w,"&platforms=18,1,7&ordering=-released&page_size=10"),D="FETCH_GAMES",M=t(7),C=t(67),E=t(1),G=Object(M.b)(C.a.div)(a||(a=Object(b.a)(["\n  min-height: 30vh;\n  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);\n  text-align: center;\n  border-radius: 0.5rem;\n  img {\n    width: 100%;\n    height: 40vh;\n    object-fit: cover;\n  }\n"]))),S=function(e){var n=e.name,t=e.released,a=e.image;return Object(E.jsxs)(G,{children:[Object(E.jsx)("h3",{children:n}),Object(E.jsx)("p",{children:t}),Object(E.jsx)("img",{src:a,alt:n})]})},T=Object(M.b)(C.a.div)(c||(c=Object(b.a)(["\n  padding: 0rem 3rem;\n  h2 {\n    padding: 3rem 0rem;\n  }\n"]))),P=Object(M.b)(C.a.div)(r||(r=Object(b.a)(["\n  min-height: 80vh;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-column-gap: 3rem;\n  grid-row-gap: 5rem;\n"]))),A=function(){var e=Object(u.b)();Object(o.useEffect)((function(){e(function(){var e=Object(p.a)(m.a.mark((function e(n){var t,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(f).concat(F));case 2:return t=e.sent,e.next=5,h.a.get("".concat(f).concat(z));case 5:return a=e.sent,e.next=8,h.a.get("".concat(f).concat(_));case 8:c=e.sent,n({type:D,payload:{popular:t.data.results,upcoming:a.data.results,newest:c.data.results}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]);var n=Object(u.c)((function(e){return e.games})),t=n.popular,a=n.newest,c=n.upcoming;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(T,{children:[Object(E.jsx)("h2",{children:"Upcoming Games"}),Object(E.jsx)(P,{children:c.map((function(e){return Object(E.jsx)(S,{name:e.name,id:e.id,released:e.released,image:e.background_image},e.id)}))}),Object(E.jsx)("h2",{children:"Popular Games"}),Object(E.jsx)(P,{children:t.map((function(e){return Object(E.jsx)(S,{name:e.name,id:e.id,released:e.released,image:e.background_image},e.id)}))}),Object(E.jsx)("h2",{children:"Newest Games"}),Object(E.jsx)(P,{children:a.map((function(e){return Object(E.jsx)(S,{name:e.name,id:e.id,released:e.released,image:e.background_image},e.id)}))})]})})},B=Object(M.a)(i||(i=Object(b.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    &::-webkit-scrollbar {\n      width: 0.5rem;\n    }\n    &::-webkit-scrollbar-thumb {\n      background-color: darkgrey;\n    }\n  }\n  body {\n    font-family: 'Montserrat', sans-serif;\n    width: 100%;\n  }\n  h2 {\n    font-size: 3rem;\n    font-family: 'Abril Fatface', cursive;\n    font-weight: lighter;\n    color: #339;\n  }\n  h3 {\n    font-size: 1.3rem;\n    color: #555;\n    padding: 1.5rem;\n  }\n  p {\n    font-size: 1.2rem;\n    line-height: 200%;\n    color: #777;\n  }\n  a {\n    text-decoration: none;\n    color: #555;\n\n  }\n"])));var I=function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)(B,{}),Object(E.jsx)(A,{})]})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))},L=t(5),H=t(33),N=t(34),R=t(14),U={popular:[],newest:[],upcoming:[],searched:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D:return Object(R.a)(Object(R.a)({},e),{},{popular:n.payload.popular,newest:n.payload.newest,upcoming:n.payload.upcoming});default:return Object(R.a)({},e)}},Y=Object(L.combineReducers)({games:W}),q=[H.a],K=Object(L.createStore)(Y,{},Object(N.composeWithDevTools)(L.applyMiddleware.apply(void 0,q)));l.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(u.a,{store:K,children:Object(E.jsx)(I,{})})}),document.getElementById("root")),J()}},[[66,1,2]]]);
//# sourceMappingURL=main.f96a9732.chunk.js.map