(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{48:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(21),a=c.n(s),r=(c(48),c(10)),l=(c(54),c(22)),o=c(3),d="/receipt",j="fav",u=c.p+"static/media/Placeholder.1dc604e1.svg",b=(c(55),c(1)),O=function(e){var t=e.imgSrc,c=e.title,n=e.description;return Object(b.jsxs)("section",{className:"fav__receipt",children:[Object(b.jsx)("img",{className:"fav__receipts_img",src:""===t?u:t,alt:"Dish"}),Object(b.jsxs)("h3",{className:"fav__title",children:[" ",c]}),Object(b.jsx)("p",{className:"fav__description",children:null===n||void 0===n?void 0:n.substr(0,1500)})]})},v=(c(57),function(){var e=Object(r.c)((function(e){return e.fav})).receipts;return Object(b.jsx)("div",{className:"fav__maim",children:0===e.length?null:e.map((function(e,t){return Object(b.jsx)(O,{imgSrc:e.imgSrc,description:e.description,title:e.title},t)}))})}),p=(c(58),c(6)),h=(c(59),c(92)),m=c(5),f=c(11),x=(c(60),c.p+"static/media/circle.c0675367.svg"),g="ADD_TO_FAV",N="ADD_CUSTOM",_=function(e){var t=e.close,c=Object(r.b)(),i=Object(n.useState)({title:"",description:""}),s=Object(p.a)(i,2),a=s[0],l=s[1],o=function(e){l(Object(f.a)(Object(f.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(b.jsx)("div",{className:"modal-back",children:Object(b.jsx)("div",{className:"base-modal",children:Object(b.jsx)("div",{className:"base-modal-wrapper",children:Object(b.jsxs)("div",{className:"base-modal__header",children:[Object(b.jsxs)("div",{className:"first",children:[Object(b.jsx)("input",{name:"title",className:"input",placeholder:"Title",value:a.title,onChange:function(e){o(e)}}),Object(b.jsx)("img",{src:x,onClick:t,alt:"closeCircle"})]}),Object(b.jsxs)("div",{className:"second",children:[Object(b.jsx)("input",{name:"description",className:"input",placeholder:"Description",value:a.description,onChange:function(e){o(e)}}),Object(b.jsx)(h.a,{color:"secondary",variant:"text",onClick:function(){var e;c((e={title:a.title,description:a.description,imgSrc:""},{type:N,data:e})),t()},children:"Add"})]})]})})})})},k=function(){var e=Object(o.g)(),t=Object(o.f)(),c=Object(n.useState)(""),i=Object(p.a)(c,2),s=i[0],a=i[1],r=Object(n.useState)(!1),l=Object(p.a)(r,2),u=l[0],O=l[1],v=function(){O(!u)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:"layout__header",children:[Object(b.jsxs)("div",{className:"buttons_block",children:[Object(b.jsx)(h.a,{id:"receipt",size:"small",color:"receipt"===s?"primary":"secondary",variant:"contained",onClick:function(){a("receipt"),e(d)},children:"Random dish"}),Object(b.jsx)(h.a,{id:"fav",size:"small",color:"fav"===s?"primary":"secondary",variant:"contained",onClick:function(){a("fav"),e(j)},children:"Favourites"})]}),"/fav"===t.pathname&&Object(b.jsx)(h.a,{variant:"text",color:"secondary",onClick:v,children:"Add custom dish"}),u&&Object(b.jsx)(_,{close:v})]})})},S=function(e){e.children;return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(k,{}),Object(b.jsx)(o.a,{})]})},C=c(15),w=c.n(C),y=c(23),D=c(40),T=c.n(D),F=function(){var e=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("https://www.themealdb.com/api/json/v1/1/random.php");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),M=(c(80),function(e){var t=e.imgSrc,c=e.title,n=e.description;return Object(b.jsxs)("section",{className:"receipt",children:[Object(b.jsx)("img",{className:"receipts_img",src:""===t?u:t,alt:"Dish"}),Object(b.jsxs)("h3",{className:"title",children:[" ",c]}),Object(b.jsx)("p",{className:"description",children:null===n||void 0===n?void 0:n.substr(0,1500)})]})}),A=(c(81),function(){var e=Object(r.b)(),t=Object(n.useState)(null),c=Object(p.a)(t,2),i=c[0],s=c[1];Object(n.useEffect)((function(){a()}),[]);var a=function(){var e=Object(y.a)(w.a.mark((function e(){var t,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,c=t.data,s((null===c||void 0===c?void 0:c.meals[0])||null);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i?Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{children:Object(b.jsx)(M,{title:i.strMeal,description:i.strInstructions,imgSrc:i.strMealThumb})}),Object(b.jsxs)("div",{className:"btn_block",children:[Object(b.jsx)(h.a,{color:"error",onClick:a,children:"Skip"}),Object(b.jsx)(h.a,{color:"success",onClick:function(){var t;e((t={id:null===i||void 0===i?void 0:i.idMeal,title:null===i||void 0===i?void 0:i.strMeal,imgSrc:null===i||void 0===i?void 0:i.strMealThumb,description:null===i||void 0===i?void 0:i.strInstructions},{type:g,data:t})),a()},children:"like"})]})]}):null}),I=function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)(o.d,{children:Object(b.jsxs)(o.b,{path:"/testHeadworks/",element:Object(b.jsx)(S,{}),children:[Object(b.jsx)(o.b,{path:d,element:Object(b.jsx)(A,{})}),Object(b.jsx)(o.b,{path:j,element:Object(b.jsx)(v,{})})]})})})};var P=function(){return Object(b.jsx)(I,{})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,93)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))},B=c(24),E=c(41),J={receipts:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:case N:return Object(f.a)(Object(f.a)({},e),{},{receipts:e.receipts.concat(t.data)});default:return e}},R=Object(B.combineReducers)({fav:L}),H=Object(B.createStore)(R,Object(E.composeWithDevTools)());a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(r.a,{store:H,children:Object(b.jsx)(P,{})})}),document.getElementById("root")),z()}},[[82,1,2]]]);
//# sourceMappingURL=main.cbd3df6e.chunk.js.map