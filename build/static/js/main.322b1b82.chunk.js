(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{15:function(t,n,e){t.exports=e(37)},37:function(t,n,e){"use strict";e.r(n);var a=e(13),r=e.n(a),o=e(0),c=e.n(o),u=e(14),i=e(3),l=e(2),f=e.n(l),m=function(t){var n=t.note,e=t.toggleImportance,a=n.important?"make not important":"make important";return c.a.createElement("li",null,n.content,c.a.createElement("button",{onClick:e},a))},p=function(){return f.a.get("/api/notes").then((function(t){return t.data}))},s=function(t){return f.a.post("/api/notes",t).then((function(t){return t.data}))},d=function(t,n){return f.a.put("".concat("/api/notes","/").concat(t),n).then((function(t){return t.data}))},b=function(t){var n=Object(o.useState)([]),e=Object(i.a)(n,2),a=e[0],r=e[1],l=Object(o.useState)("a new note..."),f=Object(i.a)(l,2),b=f[0],h=f[1],E=Object(o.useState)(!1),v=Object(i.a)(E,2),g=v[0],O=v[1];Object(o.useEffect)((function(){p().then((function(t){r(t)}))}),[]);var j=g?a:a.filter((function(t){return t.important}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Notes"),c.a.createElement("button",{onClick:function(){return O(!g)}},"Show ",g?"important":"all"),c.a.createElement("ul",null,j.map((function(t,n){return c.a.createElement(m,{key:n,note:t,toggleImportance:function(){return function(t){var n=a.find((function(n){return n.id===t})),e=Object(u.a)({},n,{important:!n.important});d(t,e).then((function(n){r(a.map((function(e){return e.id!==t?e:n})))})).catch((function(e){alert("the note '".concat(n.content,"' was already deleted from server")),r(a.filter((function(n){return n.id!==t})))}))}(t.id)}})}))),c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={content:b,date:(new Date).toISOString(),important:Math.random()>.5};s(n).then((function(t){r(a.concat(t)),h("")}))}},c.a.createElement("input",{value:b,onChange:function(t){h(t.target.value)}}),c.a.createElement("button",{type:"submit"},"save")))};r.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.322b1b82.chunk.js.map