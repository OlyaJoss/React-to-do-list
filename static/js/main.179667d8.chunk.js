(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),s=n.n(c),r=n(2),i=n(3),o=n(5),l=n(4),u=n(8),b=(n(13),n(0)),h=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("ul",{className:"todo-list list-group list-group-numbered",children:this.props.items.map((function(t){return Object(b.jsx)("li",{className:"list-group-item list-group-item-action",children:t.text},t.id)}))})}}]),n}(a.Component),j=(n(15),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={items:[],text:""},t.handleChange=function(e){t.setState({text:e.target.value})},t.handleSubmit=function(e){if(e.preventDefault(),0!==t.state.text.length){var n={text:t.state.text,id:Date.now()};t.setState((function(t){return{items:[].concat(Object(u.a)(t.items),[n]),text:""}}))}},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"todo-app",children:[Object(b.jsx)("h1",{className:"h3 mb-3 fw-normal",children:"TODO"}),Object(b.jsx)(h,{items:this.state.items}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("div",{className:"form-floating",children:[Object(b.jsx)("input",{onChange:this.handleChange,value:this.state.text,type:"text",className:"form-control todo-list__input",placeholder:" What needs to be done?",id:"new-todo"}),Object(b.jsx)("label",{htmlFor:"floatingInput",children:" What needs to be done?"})]}),Object(b.jsxs)("button",{className:"w-100 btn btn-lg btn-primary",children:["Add # ",this.state.items.length+1]})]})]})}}]),n}(a.Component)),d=(n(16),function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(j,{})})}}]),n}(a.Component));n(17);s.a.render(Object(b.jsx)(d,{}),document.querySelector("#root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.179667d8.chunk.js.map