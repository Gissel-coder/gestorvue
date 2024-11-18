(function(){"use strict";var t={769:function(t,a,s){var e=s(6848),n=function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light custom-bg"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Gestor de Tareas")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ms-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[a("i",{staticClass:"bi bi-house-door"}),t._v(" Home ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/addtask"}},[a("i",{staticClass:"bi bi-plus-circle"}),t._v(" Agregar Tarea ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/tasklist"}},[a("i",{staticClass:"bi bi-list-task"}),t._v(" Lista de Tareas ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/combinedview"}},[a("i",{staticClass:"bi bi-view-list"}),t._v(" Lista Combinada ")])],1)])])])]),a("router-view")],1)},i=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=s(1656),r={},l=(0,o.A)(r,n,i,!1,null,null,null),c=l.exports,u=s(6178),d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("h1",[t._v(t._s(t.welcomeMessage))])])},k=[],v={name:"HomeView",data(){return{welcomeMessage:this.getWelcomeMessage()}},methods:{getWelcomeMessage(){const t=(new Date).getHours();return t<12?"¡Buenos días! Bienvenido a la aplicación Vue.js":t<18?"¡Buenas tardes! Bienvenido a la aplicación Vue.js":"¡Buenas noches! Bienvenido a la aplicación Vue.js"}}},p=v,m=(0,o.A)(p,d,k,!1,null,"d43720ee",null),f=m.exports,h=function(){var t=this,a=t._self._c;return a("div",{staticClass:"add-task-container"},[a("h1",[t._v("Añadir Tarea")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"task-input",attrs:{placeholder:"Añadir nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(a){a.target.composing||(t.newTask=a.target.value)}}}),a("button",{staticClass:"add-button",on:{click:t.addTask}},[t._v("Añadir")])]),t.tasks.length>0?a("div",{staticClass:"task-list"},t._l(t.tasks,(function(s){return a("div",{key:s.id,staticClass:"task-item"},[a("div",{staticClass:"task-text"},[a("span",{class:{completed:s.completed}},[t._v(t._s(s.todo))]),s.completed?a("div",{staticClass:"completed-message"},[t._v(" Completado ")]):t._e()]),a("div",{staticClass:"task-actions"},[a("button",{staticClass:"btn btn-outline-success me-2",attrs:{"aria-label":"Marcar como completada"},on:{click:function(a){return t.toggleTaskCompletion(s)}}},[a("i",{staticClass:"bi bi-check-circle-fill"})]),a("button",{staticClass:"btn btn-outline-danger",attrs:{"aria-label":"Eliminar tarea"},on:{click:function(a){return t.deleteTask(s)}}},[a("i",{staticClass:"bi bi-trash"})])])])})),0):t._e()])},b=[],C=(s(8992),s(4520),{name:"AddTask",data(){return{newTask:"",tasks:[]}},methods:{addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},deleteTask(t){this.tasks=this.tasks.filter((a=>a.id!==t.id))},toggleTaskCompletion(t){t.completed=!t.completed}}}),g=C,T=(0,o.A)(g,h,b,!1,null,"17c71a68",null),_=T.exports,w=function(){var t=this,a=t._self._c;return a("div",{staticClass:"task-container"},[a("h1",[t._v("Lista de Tareas")]),a("button",{staticClass:"fetch-button",on:{click:t.fetchTasks}},[t._v("Cargar Tareas")]),t.tasks.length>0?a("div",{staticClass:"task-list"},t._l(t.tasks,(function(s){return a("div",{key:s.id,staticClass:"task-item"},[a("div",{staticClass:"task-text"},[a("h5",{class:{completed:s.completed}},[t._v(t._s(s.todo))]),a("span",[t._v(t._s(s.completed?"Completada":"Pendiente"))])]),a("div",{staticClass:"task-actions"},[a("button",{staticClass:"btn btn-outline-success",attrs:{"aria-label":"Marcar como completada"},on:{click:function(a){return t.toggleTaskCompletion(s)}}},[a("i",{staticClass:"bi bi-check-circle-fill"})]),a("button",{staticClass:"btn btn-outline-danger",attrs:{"aria-label":"Eliminar tarea"},on:{click:function(a){return t.deleteTask(s)}}},[a("i",{staticClass:"bi bi-trash"})])])])})),0):t._e()])},y=[],x={name:"TaskList",data(){return{tasks:[]}},methods:{fetchTasks(){fetch("https://dummyjson.com/todos").then((t=>t.json())).then((t=>{this.tasks=t.todos})).catch((t=>{console.error("Error al cargar las tareas:",t)}))},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((a=>a.id!==t.id))}}},A=x,j=(0,o.A)(A,w,y,!1,null,"5d17086b",null),O=j.exports,E=function(){var t=this,a=t._self._c;return a("div",{staticClass:"task-container"},[a("h1",[t._v("Lista de Tareas")]),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"task-input",attrs:{placeholder:"Añadir nueva tarea"},domProps:{value:t.newTask},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.addTask.apply(null,arguments)},input:function(a){a.target.composing||(t.newTask=a.target.value)}}}),a("button",{staticClass:"add-button",on:{click:t.addTask}},[t._v("Añadir")])]),t.tasks.length>0?a("div",{staticClass:"task-list"},t._l(t.tasks,(function(s){return a("div",{key:s.id,staticClass:"task-item"},[a("div",{staticClass:"task-text"},[a("h5",{class:{completed:s.completed}},[t._v(t._s(s.todo))]),a("span",[t._v(t._s(s.completed?"Completada":"Pendiente"))])]),a("div",{staticClass:"task-actions"},[a("button",{staticClass:"btn btn-outline-success",attrs:{"aria-label":"Marcar como completada"},on:{click:function(a){return t.toggleTaskCompletion(s)}}},[a("i",{staticClass:"bi bi-check-circle-fill"})]),a("button",{staticClass:"btn btn-outline-danger",attrs:{"aria-label":"Eliminar tarea"},on:{click:function(a){return t.deleteTask(s)}}},[a("i",{staticClass:"bi bi-trash"})])])])})),0):a("p",[t._v("No hay tareas disponibles.")])])},M=[],L={name:"TaskList",data(){return{newTask:"",tasks:[]}},mounted(){this.fetchTasks()},methods:{fetchTasks(){fetch("https://dummyjson.com/todos").then((t=>t.json())).then((t=>{this.tasks=t.todos})).catch((t=>{console.error("Error al cargar las tareas:",t)}))},addTask(){if(""===this.newTask.trim())return;const t={todo:this.newTask,completed:!1,id:Date.now()};this.tasks.unshift(t),this.newTask=""},toggleTaskCompletion(t){t.completed=!t.completed},deleteTask(t){this.tasks=this.tasks.filter((a=>a.id!==t.id))}}},B=L,N=(0,o.A)(B,E,M,!1,null,"924d8500",null),P=N.exports;e.Ay.use(u.Ay);const V=[{path:"/",name:"home",component:f},{path:"/addtask",name:"AddTask",component:_},{path:"/tasklist",name:"TaskList",component:O},{path:"/combinedview",name:"CombinedView",component:P}],D=new u.Ay({mode:"history",base:"/gestorvue/",routes:V});var H=D;e.Ay.config.productionTip=!1,new e.Ay({router:H,render:t=>t(c)}).$mount("#app")}},a={};function s(e){var n=a[e];if(void 0!==n)return n.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(a,e,n,i){if(!e){var o=1/0;for(u=0;u<t.length;u++){e=t[u][0],n=t[u][1],i=t[u][2];for(var r=!0,l=0;l<e.length;l++)(!1&i||o>=i)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(r=!1,i<o&&(o=i));if(r){t.splice(u--,1);var c=n();void 0!==c&&(a=c)}}return a}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[e,n,i]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){var t={524:0};s.O.j=function(a){return 0===t[a]};var a=function(a,e){var n,i,o=e[0],r=e[1],l=e[2],c=0;if(o.some((function(a){return 0!==t[a]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(l)var u=l(s)}for(a&&a(e);c<o.length;c++)i=o[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},e=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[504],(function(){return s(769)}));e=s.O(e)})();
//# sourceMappingURL=app.0a63525e.js.map