(this.webpackJsonpvEngine=this.webpackJsonpvEngine||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo2.2269fc6a.png"},46:function(e,a,t){e.exports=t(64)},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(33),r=t.n(l),s=(t(51),t(52),t(2)),m=t(22),i=t.n(m),o=t(76),u=t(17),E=t.n(u),d=(t(53),t(34)),v=t(14),p=(t(54),t(19)),h=t.n(p),f=t(3),b=Object(n.createContext)(),g=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(b.Provider,{value:Object(n.useReducer)(a,t)},l)},N=function(){return Object(n.useContext)(b)},w=t(28),O="SET_SEARCH_TERM",S=function(e,a){switch(console.log(a),a.type){case O:return Object(w.a)(Object(w.a)({},e),{},{term:a.term});default:return e}};var y=function(e){var a=e.hideButtons,t=void 0!==a&&a,l=e.termm,r=N(),s=Object(v.a)(r,2);Object(d.a)(s[0]);var m=s[1],i=Object(n.useState)(""),o=Object(v.a)(i,2),u=o[0],E=o[1],p=Object(f.f)(),b=function(e){e.preventDefault(),p.push("/search"),m({type:O,term:u})};return c.a.createElement("div",{className:"searchBar"},c.a.createElement("form",null,c.a.createElement("div",{className:"bar"},c.a.createElement(h.a,{id:"searchIcon"}),t?c.a.createElement("input",{className:"search",value:u,placeholder:l,onChange:function(e){return E(e.target.value)}}):c.a.createElement("input",{className:"search",value:u,onChange:function(e){return E(e.target.value)}}),c.a.createElement("svg",{className:"micIcon",focusable:"false",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z",fill:"#4285f4"}),c.a.createElement("path",{d:"m11 18.08h2v3.92h-2z",fill:"#34a853"}),c.a.createElement("path",{d:"m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z",fill:"#f4b400"}),c.a.createElement("path",{d:"m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z",fill:"#ea4335"}))),t?c.a.createElement("div",{className:"searchButton"},c.a.createElement("input",{className:"searchButton__hidden",type:"submit",onClick:b,value:"DevEngine Search"}),c.a.createElement("input",{className:"searchButton__hidden",type:"button",value:"I'm Felling Lucky"})):c.a.createElement("div",{className:"searchButton"},c.a.createElement("input",{id:"subBut",type:"submit",onClick:b,value:"vEngine Search"}),c.a.createElement("input",{id:"subBut",type:"button",value:"I'm Felling Lucky"}))))};t(61);var j=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footerCredit"},c.a.createElement("span",null,"Developed by BSM.")),c.a.createElement("div",null,c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null)),c.a.createElement("div",{className:"footerLR"},c.a.createElement("div",{className:"footerLeft"},c.a.createElement(s.b,{to:"/Advertising"},"Advertising"),c.a.createElement(s.b,{to:"/business"},"Business"),c.a.createElement(s.b,{to:"/about"},"About"),c.a.createElement(s.b,{to:"/faq"},"How Search works")),c.a.createElement("div",{className:"footerRight"},c.a.createElement(s.b,{to:"/privacy"},"Privacy"),c.a.createElement(s.b,{to:"/terms"},"Terms"),c.a.createElement(s.b,{to:"/settings"},"Settings")))))};var k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"topBar"},c.a.createElement(s.b,{to:"/gmail"},"Gmail"),c.a.createElement(s.b,{to:"/images"},"Images"),c.a.createElement(i.a,{id:"appIcon"}),c.a.createElement(o.a,{id:"avatar"})),c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:E.a,alt:""})),c.a.createElement("div",{className:"searchElement"},c.a.createElement(y,null)),c.a.createElement("div",{className:"Footer"},c.a.createElement(j,null)))},B=(t(62),t(27)),I=t.n(B),x=t(38),_=function(e){var a=Object(n.useState)(null),t=Object(v.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(x.a)(I.a.mark((function a(){return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyAsxbk97IUSpBNQ6K5KhCxgq187amii0X0&cx=".concat("3b7d248ed38f2a460","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){l(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},C=t(39),A=t.n(C),L=t(40),P=t.n(L),R=t(41),T=t.n(R),z=t(42),M=t.n(z),q=t(43),D=t.n(q);var F=function(){var e=N(),a=Object(v.a)(e,2),t=a[0].term,n=(a[1],_(t).data);return console.log(n),c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"header"},c.a.createElement(s.b,{to:"/"},c.a.createElement("img",{className:"headerLogo",src:E.a,alt:""})),c.a.createElement(y,{hideButtons:!0,termm:t}),c.a.createElement("div",{className:"topSec"},c.a.createElement(i.a,{id:"appIcon"}),c.a.createElement(o.a,{id:"avatar"})),c.a.createElement("div",{className:"options"},c.a.createElement("div",{className:"optionsLeft"},c.a.createElement("div",{className:"spOptions"},c.a.createElement(h.a,{id:"lcn"}),c.a.createElement(s.b,{to:"/all"},"All")),c.a.createElement("div",{className:"spOptions"},c.a.createElement(A.a,{id:"lcn"}),c.a.createElement(s.b,{to:"/news"},"News")),c.a.createElement("div",{className:"spOptions"},c.a.createElement(P.a,{id:"lcn"}),c.a.createElement(s.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"spOptions"},c.a.createElement(T.a,{id:"lcn"}),c.a.createElement(s.b,{to:"/shopping"},"Shopping")),c.a.createElement("div",{className:"spOptions"},c.a.createElement(M.a,{id:"lcn"}),c.a.createElement(s.b,{to:"/maps"},"Maps")),c.a.createElement("div",{className:"spOptions"},c.a.createElement(D.a,{id:"lcn"}),c.a.createElement(s.b,{to:"/more"},"More")))),c.a.createElement("div",{className:"optionsRight"},c.a.createElement("div",{className:"spOptions"},c.a.createElement(s.b,{to:"/settings"},"Settings"),c.a.createElement(s.b,{to:"/tools"},"Tools")))),t&&c.a.createElement("div",{className:"results"},c.a.createElement("p",{className:"searchPage_count"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results ",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds for ",t),null===n||void 0===n?void 0:n.items.map((function(e){return c.a.createElement("div",{className:"searchPage_result"},c.a.createElement("a",{href:e.link,className:"links"},e.displayLink),c.a.createElement("a",{className:"searchPage_title",href:e.link},c.a.createElement("h3",null,e.title)),c.a.createElement("p",{className:"searchPage_snippet"},e.snippet))}))),c.a.createElement(j,null))};var H=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(s.a,null,c.a.createElement(f.c,null,c.a.createElement(f.a,{path:"/search"},c.a.createElement(F,null)),c.a.createElement(f.a,{path:"/"},c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,{initialState:{term:null},reducer:S},c.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.d3b1d0c1.chunk.js.map