(this["webpackJsonpemployees-birthday"]=this["webpackJsonpemployees-birthday"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(9),c=n.n(r),i=(n(16),n(8)),o=n.n(i),l=n(10),u=n(2),h=n(3),p=n(6),j=n(5),m=n(4),d=n(11),b=n(0),v=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return this.props.employees.length<1?null:Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:this.props.month}),Object(b.jsx)("div",{children:this.props.employees.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[t.lastName," ",t.firstName]})," ","\u2014"," ",t.dob.slice(8,10)," ",e.props.month,","," ",t.dob.slice(0,4)," year"]},t.id)}))})]})}}]),n}(a.a.Component),f=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={months:[["January","01"],["February","02"],["March","03"],["April","04"],["May","05"],["June","06"],["July","07"],["August","08"],["September","09"],["October","10"],["November","11"],["December","12"]],names:[]},s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e,t=new Date,n=this.state.months.splice(0,t.getMonth());(e=this.state.months).push.apply(e,Object(d.a)(n))}},{key:"render",value:function(){var e=this;return this.props.employees.length<1?Object(b.jsx)("h2",{children:"Employees List is empty"}):Object(b.jsx)("div",{className:"birthday-months",children:this.state.months.map((function(t){return Object(b.jsx)(v,{month:t[0],employees:e.props.employees.filter((function(e){return e.dob.slice(5,7)===t[1]}))},t[1])}))})}}]),n}(a.a.Component),y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={active:!!localStorage.getItem(s.props.employee.id)},s}return Object(h.a)(n,[{key:"activate",value:function(e){this.setState({active:e}),e?localStorage.setItem(this.props.employee.id,e):localStorage.removeItem(this.props.employee.id),this.props.onclick()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:!0===this.state.active?"active":"",children:this.props.employee.lastName+" "+this.props.employee.firstName}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("label",{className:!1===this.state.active?"selected":"",children:[Object(b.jsx)("input",{type:"radio",name:"activate",value:"not-active",onClick:function(){return e.activate(!1)}})," ","not active"]}),Object(b.jsxs)("label",{className:!0===this.state.active?"selected":"",children:[Object(b.jsx)("input",{type:"radio",name:"activate",value:"active",onClick:function(){return e.activate(!0)}})," ","active"]})]})]})}}]),n}(a.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={focus:!1,mouseover:!1},s}return Object(h.a)(n,[{key:"activate",value:function(e){this.setState({focus:e})}},{key:"mouseover",value:function(e){this.setState({mouseover:e})}},{key:"render",value:function(){var e=this,t=this.props.names.filter((function(t){return t.lastName[0]===e.props.letter})).sort((function(e,t){return e.lastName>t.lastName?1:-1}));return Object(b.jsxs)("div",{onMouseEnter:function(t){e.mouseover(!0),setTimeout((function(){e.state.mouseover&&e.activate(!0)}),350),t.currentTarget.scrollIntoView()},onMouseLeave:function(){e.mouseover(!1),e.activate(!1)},id:this.state.focus?"selected-letter":"",children:[Object(b.jsx)("h3",{children:this.props.letter}),Object(b.jsx)("div",{className:"employees-by-letter",children:t.length>0?t.map((function(t){return Object(b.jsx)(y,{employee:t,onclick:e.props.onclick},t.id)})):Object(b.jsx)("p",{children:"___"})})]})}}]),n}(a.a.Component),x=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={alphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]},s}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"employees",children:this.state.alphabet.map((function(t){return Object(b.jsx)(O,{letter:t,names:e.props.employees,onclick:e.props.onclick},t)}))})}}]),n}(a.a.Component),k=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={employees:[],activeEmployees:[]},s.renderBirthday=s.renderBirthday.bind(Object(p.a)(s)),s}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:t=e.sent,this.setState({employees:t}),this.renderBirthday();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderBirthday",value:function(){var e=this.state.employees.filter((function(e){return!!localStorage.getItem(e.id)})).sort((function(e,t){return e.lastName>t.lastName?1:-1}));this.setState({activeEmployees:e})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{children:Object(b.jsxs)("h2",{children:["Test task for ",Object(b.jsx)("span",{children:"Yalantis"})," React.js School"]})}),Object(b.jsxs)("div",{className:"main-container",children:[Object(b.jsxs)("section",{className:"left-side",children:[Object(b.jsx)("h1",{children:"Employees"}),Object(b.jsx)(x,{employees:this.state.employees,onclick:this.renderBirthday})]}),Object(b.jsxs)("section",{className:"right-side",children:[Object(b.jsx)("h1",{children:"Employees birthday"}),Object(b.jsx)(f,{employees:this.state.activeEmployees})]})]}),Object(b.jsx)("footer",{children:"by Tetiana Larina"})]})}}]),n}(a.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};var N=function(){var e=document.querySelector(".employees");e.addEventListener("wheel",(function(t){var n=document.querySelector("#selected-letter > div");if(0===t.deltaX){if(t.preventDefault(),n&&n.clientHeight<n.scrollHeight)return void(n.scrollTop+=t.deltaY);e.scrollLeft+=t.deltaY}}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),N(),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.d2e1469e.chunk.js.map