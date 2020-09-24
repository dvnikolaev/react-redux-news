(this["webpackJsonpreact-redux-news"]=this["webpackJsonpreact-redux-news"]||[]).push([[0],{27:function(e,t,n){e.exports=n(47)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),u=n(3),l=n(10),i=n(25),o=n(4),m={isAuth:!1,user:{id:null,username:"",isAdmin:!1},users:[{id:1,login:"user",password:"user",isAdmin:!1},{id:2,login:"admin",password:"admin",isAdmin:!0}],errorAuth:""},d=n(26),b={news:[{id:1,author_id:1,title:"Lorem, ipsum.",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid.",date:"2020-09-23",isAccept:!0},{id:2,author_id:1,title:"Expedita provident eligendi.",description:"Expedita provident eligendi repellendus corrupti culpa soluta laboriosam sint?",date:"2020-09-23",isAccept:!0},{id:3,author_id:1,title:"de Finibus Bonorum et Malorum.",description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",date:"2020-09-23",isAccept:!1}]},p=Object(l.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{isAuth:t.isAuth,user:t.user,errorAuth:""});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{isAuth:!1,user:t.user});case"SET_ERROR_AUTH":return Object(o.a)(Object(o.a)({},e),{},{errorAuth:t.text});default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_NEWS":return Object(o.a)(Object(o.a)({},e),{},{news:[].concat(Object(d.a)(e.news),[t.news])});case"ACCEPT_NEWS":return Object(o.a)(Object(o.a)({},e),{},{news:e.news.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{isAccept:!0}):e}))});case"DECLINE_NEWS":return Object(o.a)(Object(o.a)({},e),{},{news:e.news.filter((function(e){return e.id!==t.id}))});default:return Object(o.a)({},e)}}}),E=Object(l.createStore)(p,Object(i.composeWithDevTools)()),f=n(13),h=n(2),w=(n(36),n(37),n(38),function(e){var t=e.name,n=e.link,a=e.icon;return r.a.createElement("li",{className:"header-nav__item"},r.a.createElement(f.c,{exact:!0,to:n,className:"header-nav__link",activeClassName:"header-nav__link--active"},r.a.createElement("i",{className:a})," ",r.a.createElement("span",{className:"icon__text"},t)))}),_=function(){var e=[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",link:"/react-redux-news",icon:"fas fa-home"},{name:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",link:"/react-redux-news/news",icon:"fas fa-newspaper"}].map((function(e){return r.a.createElement(w,{name:e.name,link:e.link,icon:e.icon,key:e.name})}));return r.a.createElement("ul",{className:"header-nav__list"},e)},N=function(){return r.a.createElement("nav",{className:"header-nav"},r.a.createElement(_,null))},O=n(8),v=function(e){return{type:"SET_ERROR_AUTH",text:e}},A=(n(40),n(41),n(42),function(e){var t=e.children,n=e.setIsOpen;return s.a.createPortal(r.a.createElement("div",{className:"modal",onClick:function(){return n(!1)}},r.a.createElement("div",{className:"modal-body",onClick:function(e){return e.stopPropagation()}},t)),document.querySelector("#modal"))}),j=function(e){var t=e.label,n=e.value,a=e.setValue,c=e.type,s=e.name;return r.a.createElement("label",{className:"form__label"},r.a.createElement("span",{className:"form__text"},t,":"),r.a.createElement("input",{name:s,type:c,className:"form__input",value:n,onChange:function(e){return a(e.target.value)}}))},g=Object(u.b)((function(e){return{errorAuth:e.auth.errorAuth}}),{onLogin:function(e,t){var n=E.getState().auth.users.find((function(n){return e.toLowerCase()===n.login.toLowerCase()&&t===n.password}));return n?{type:"LOGIN",isAuth:!0,user:{id:n.id,username:e,isAdmin:n.isAdmin}}:(E.dispatch(v("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")),{type:""})}})((function(e){var t=e.setIsOpen,n=e.onLogin,c=e.errorAuth,s=Object(a.useState)(""),u=Object(O.a)(s,2),l=u[0],i=u[1],o=Object(a.useState)(""),m=Object(O.a)(o,2),d=m[0],b=m[1];return r.a.createElement(A,{setIsOpen:t},r.a.createElement("h2",{className:"form__header"},"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),l&&d&&n(l,d)}},r.a.createElement(j,{label:"\u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",value:l,setValue:i,type:"text",name:"username"}),r.a.createElement(j,{label:"\u043f\u0430\u0440\u043e\u043b\u044c",value:d,setValue:b,type:"password",name:"password"}),c?r.a.createElement("span",{className:"text__error"},c):null,r.a.createElement("button",{className:"button form__button form__button-enter button--success",disabled:!l||!d},"\u0412\u0445\u043e\u0434"),r.a.createElement("button",{className:"button form__button button--error",type:"button",onClick:function(){return t(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430")))})),S=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{onLogout:function(){return{type:"LOGOUT",user:{id:null,username:"",isAdmin:!1}}}})((function(e){var t=e.isAuth,n=e.onLogout,c=Object(a.useState)(!1),s=Object(O.a)(c,2),u=s[0],l=s[1],i=function(){l(!1),n()};return r.a.createElement("div",{className:"auth"},t?r.a.createElement("button",{className:"button button--error",onClick:i},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement("button",{className:"button button--success",onClick:function(){return l(!0)}},r.a.createElement("i",{className:"fas fa-sign-in-alt"}),r.a.createElement("span",{className:"icon__text"},"\u0412\u043e\u0439\u0442\u0438")),!u||t?null:r.a.createElement(g,{setIsOpen:l}))})),C=function(){return r.a.createElement("header",{className:"page__header"},r.a.createElement("h1",{className:"logo"},r.a.createElement(f.b,{to:"/",className:"logo__link"},"React News")),r.a.createElement(N,null),r.a.createElement(S,null))},y=(n(43),Object(u.b)((function(e){return{username:e.auth.user.username}}))((function(e){var t=e.username,n=t||"\u0433\u043e\u0441\u0442\u044c";return r.a.createElement("main",{className:"page__main"},r.a.createElement("h3",null,"\u041f\u0440\u0438\u0432\u0435\u0442, ",r.a.createElement("span",{className:"name"},n,"!")),t?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u0414\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0430\u0440\u044b \u043b\u043e\u0433\u0438\u043d - \u043f\u0430\u0440\u043e\u043b\u044c:"),r.a.createElement("p",null,"user - user"),r.a.createElement("p",null,"admin - admin")))}))),k=(n(44),Object(u.b)((function(e){return{isAdmin:e.auth.user.isAdmin}}),{onAcceptNews:function(e){return{type:"ACCEPT_NEWS",id:e}},onDeclineNews:function(e){return{type:"DECLINE_NEWS",id:e}}})((function(e){var t=e.isAdmin,n=e.isAccept,a=e.newsId,c=e.onAcceptNews,s=e.onDeclineNews;return!t||n?null:r.a.createElement("div",{className:"news-actions"},r.a.createElement("button",{className:"button news-actions__button button--success",onClick:function(){return c(a)}},"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"),r.a.createElement("button",{className:"button news-actions__button button--error",onClick:function(){return s(a)}},"\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c"))}))),I=function(e){var t=e.news;return r.a.createElement("article",{className:"news-list__item"},r.a.createElement("div",{className:"news-content"},r.a.createElement("h3",{className:"news__title"},t.title),r.a.createElement("p",{className:"news__description"},t.description),r.a.createElement("span",{className:"news__date"},t.date)),r.a.createElement(k,{isAccept:t.isAccept,newsId:t.id}))},x=Object(u.b)((function(e,t){return{newsIsAccept:e.news.news.filter((function(e){return e.isAccept&&(e.title.toLowerCase().includes(t.search)||e.description.toLowerCase().includes(t.search)||e.date.includes(t.search))}))}}))((function(e){var t=e.newsIsAccept;e.search;return r.a.createElement("section",null,r.a.createElement("h2",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),t.length?t.map((function(e){return r.a.createElement(I,{key:e.id,news:e})})):r.a.createElement("h5",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043f\u0443\u0441\u0442"))})),L=Object(u.b)((function(e,t){return{newsIsNotAccept:e.news.news.filter((function(e){return!e.isAccept&&(e.title.toLowerCase().includes(t.search)||e.description.toLowerCase().includes(t.search)||e.date.includes(t.search))})),isOwnNews:e.news.news.some((function(t){return t.author_id===e.auth.user.id&&!t.isAccept})),userId:e.auth.user.id,isAdmin:e.auth.user.isAdmin}}))((function(e){var t=e.newsIsNotAccept,n=e.userId,a=e.isAdmin,c=e.isOwnNews,s=(e.search,t.map((function(e){return e.author_id===n||a?r.a.createElement(I,{key:e.id,news:e}):null}))),u=c||a&&t.length?r.a.createElement("h2",null,"\u041d\u0435\u0440\u0430\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"):null;return r.a.createElement("section",null,u,s)})),D=function(e){var t=e.search;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{search:t}),r.a.createElement(x,{search:t}))},T=(n(45),Object(u.b)(null,{addNews:function(e,t){var n=(new Date).toISOString().substr(0,10);return{type:"ADD_NEWS",news:{id:E.getState().news.news[E.getState().news.news.length-1].id+1,author_id:E.getState().auth.user.id,title:e,description:t,date:n,isAccept:!1}}}})((function(e){var t=e.setIsOpen,n=e.addNews,c=Object(a.useState)(""),s=Object(O.a)(c,2),u=s[0],l=s[1],i=Object(a.useState)(""),o=Object(O.a)(i,2),m=o[0],d=o[1];return r.a.createElement(A,{setIsOpen:t},r.a.createElement("h2",{className:"form__header"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),u&&m&&(n(u,m),t(!1))}},r.a.createElement(j,{label:"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:u,setValue:l,type:"text",name:"title"}),r.a.createElement(j,{label:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:m,setValue:d,type:"text",name:"description"}),r.a.createElement("button",{className:"button form__button form__button-enter button--success"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("button",{className:"button form__button button--error",type:"button",onClick:function(){return t(!1)}},"\u041e\u0442\u043c\u0435\u043d\u0430")))}))),R=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(e){var t=e.isAuth,n=Object(a.useState)(!1),c=Object(O.a)(n,2),s=c[0],u=c[1],l=s?r.a.createElement(T,{setIsOpen:u}):null;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"button button--add-news",onClick:function(){return u(!0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"),l):null})),V=(n(46),function(e){var t=e.value,n=e.setValue;return r.a.createElement("input",{className:"news__search",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:t,onChange:function(e){return n(e.target.value)}})}),W=function(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1];return r.a.createElement("main",{className:"page__main"},r.a.createElement(V,{value:n,setValue:c}),r.a.createElement(R,null),r.a.createElement(D,{search:n.toLowerCase().trim()}))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{basename:"/react-redux-news"},r.a.createElement(C,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0},r.a.createElement(y,null)),r.a.createElement(h.a,{path:"/news"},r.a.createElement(W,null)))))};s.a.render(r.a.createElement(u.a,{store:E},r.a.createElement(F,null)),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2ac4def9.chunk.js.map