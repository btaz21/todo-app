(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),s=a.n(i),l=(a(16),a(2)),c=a(3),r=a(5),d=a(4),u=a(6),h=a(10),m=a(1),p=a(7),b=a(23),g=(a(17),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={task:""},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.createTodo(Object(u.a)(Object(u.a)({},this.state),{},{id:Object(b.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return o.a.createElement("form",{className:"NewTodoForm",onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"task"},"New Todo"),o.a.createElement("input",{type:"text",placeholder:"Add new item",value:this.state.task,onChange:this.handleChange,name:"task"}),o.a.createElement("button",null,"Add Todo"))}}]),a}(n.Component)),v=(a(18),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isEditing:!1,task:n.props.task},n.handleRemove=n.handleRemove.bind(Object(m.a)(n)),n.toggleForm=n.toggleForm.bind(Object(m.a)(n)),n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(m.a)(n)),n.handleToggle=n.handleToggle.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(e){e.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.toggleForm()}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"handleToggle",value:function(e){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?o.a.createElement("div",{className:"Todo"},o.a.createElement("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate},o.a.createElement("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Save"))):o.a.createElement("div",{className:"Todo"},o.a.createElement("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle},this.props.task),o.a.createElement("div",{className:"Todo-buttons"},o.a.createElement("button",{onClick:this.toggleForm},o.a.createElement("i",{class:"fas fa-pen"})),o.a.createElement("button",{onClick:this.handleRemove},o.a.createElement("i",{class:"fas fa-trash"}))))}}]),a}(n.Component)),f=(a(19),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={todos:[]},n.create=n.create.bind(Object(m.a)(n)),n.remove=n.remove.bind(Object(m.a)(n)),n.update=n.update.bind(Object(m.a)(n)),n.toggleComplete=n.toggleComplete.bind(Object(m.a)(n)),n}return Object(c.a)(a,[{key:"create",value:function(e){this.setState({todos:[].concat(Object(h.a)(this.state.todos),[e])})}},{key:"remove",value:function(e){this.setState({todos:this.state.todos.filter((function(t){return t.id!==e}))})}},{key:"update",value:function(e,t){var a=this.state.todos.map((function(a){return a.id===e?Object(u.a)(Object(u.a)({},a),{},{task:t}):a}));this.setState({todos:a})}},{key:"toggleComplete",value:function(e){var t=this.state.todos.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));this.setState({todos:t})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(v,{key:t.id,id:t.id,task:t.task,removeTodo:e.remove,updateTodo:e.update,completed:t.completed,toggleTodo:e.toggleComplete})}));return o.a.createElement("div",{className:"TodoList"},o.a.createElement("h1",null,"Todo List",o.a.createElement("span",null,"React App")),o.a.createElement("ul",null,t),o.a.createElement(g,{createTodo:this.create}))}}]),a}(n.Component)),k=(a(20),function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.57817331.chunk.js.map