(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),a=t(4),u=t(3),o=t(2),i=t(0);var d=function(e){return Object(i.jsxs)("p",{children:[" filter shown with: ",Object(i.jsx)("input",{value:e.filterInput,onChange:e.handleFilterChange})," "]})};var l=function(e){return Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.newNum,onChange:e.handleNumChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",onClick:e.handleFormSubmit,children:" add"})})]})};var s=function(e){return Object(i.jsxs)("li",{children:[" ",e.name,": ",e.num," - ",Object(i.jsx)("button",{onClick:e.handleDelete,children:" Delete "})," "]})},j=function(e){var n=e.message,t={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return e.error&&(t=Object(a.a)(Object(a.a)({},t),{},{color:"red"})),n?Object(i.jsxs)("div",{style:t,children:[" ",n," "]}):null},b=t(5),f=t.n(b),h="/api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(h,"/").concat(e))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))};var x=function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),b=Object(u.a)(r,2),f=b[0],h=b[1],x=Object(o.useState)(""),g=Object(u.a)(x,2),w=g[0],C=g[1],S=Object(o.useState)(!0),y=Object(u.a)(S,2),k=y[0],N=y[1],D=Object(o.useState)(""),F=Object(u.a)(D,2),L=F[0],T=F[1],B=Object(o.useState)(null),I=Object(u.a)(B,2),E=I[0],J=I[1],z=Object(o.useState)(!1),A=Object(u.a)(z,2),P=A[0],R=A[1];Object(o.useEffect)((function(){m().then((function(e){c(e)}))}),[]);var q=k?t:t.filter((function(e){return e.name.toLowerCase().includes(L.toLowerCase())})),G=function(e){O(e).then((function(e){return c(t.concat(e))})),J("added ".concat(e.name)),setTimeout((function(){return J(null)}),5e3)},H=function(e,n){var r=t[e],u=Object(a.a)(Object(a.a)({},r),{},{number:n});window.confirm("".concat(r.name," is already added to the phonebook, update the number?"))&&v(u.id,u).then((function(e){c(t.map((function(n){return n.id!==u.id?n:e}))),J("".concat(u.name," number was updated")),setTimeout((function(){return J(null)}),5e3)})).catch((function(e){R(!0),c(t.filter((function(e){return e.id!==u.id}))),J("information of ".concat(u.name," was already deleted from the server")),setTimeout((function(){J(null),R(!1)}),5e3)}))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:" PhoneBook "}),Object(i.jsx)(j,{message:E,error:P}),Object(i.jsx)(d,{filterInput:L,handleFilterChange:function(e){T(e.target.value),N(!1)}}),Object(i.jsx)("h3",{children:" Add a new contact"}),Object(i.jsx)(l,{newNum:w,newName:f,handleNameChange:function(e){h(e.target.value)},handleNumChange:function(e){C(e.target.value)},handleFormSubmit:function(e){e.preventDefault();var n=t.map((function(e){return e.name.toLowerCase()})),c={name:f,number:w},r=n.indexOf(f.toLowerCase());-1===r?G(c):H(r,w),C(""),h("")}}),Object(i.jsx)("h3",{children:" Numbers "}),Object(i.jsx)("ul",{children:q.map((function(e){return Object(i.jsx)(s,{name:e.name,num:e.number,handleDelete:function(){return function(e){var n=t.find((function(n){return n.id===e}));if(window.confirm("Do you really want to delete this ".concat(n.name,"?"))){p(e);var r=t.filter((function(n){return n.id!==e}));c(r),J("deleted ".concat(n.name," successfully")),setTimeout((function(){return J(null)}),5e3)}}(e.id)}},e.id)}))})]})};r.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1ffc71f7.chunk.js.map