(this["webpackJsonpanon-puzzle-board"]=this["webpackJsonpanon-puzzle-board"]||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},19:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(12),o=n.n(s),l=(n(19),n(1)),u=n(2),i=n(4),c=n(3),d=(n(20),n(7)),p=n.n(d);n(22);p.a.initializeApp({apiKey:"AIzaSyDvQF-5yo3RckCip07OjF35Ht7-GD9JU9k",authDomain:"anonpuzzleboard.firebaseapp.com",databaseURL:"https://anonpuzzleboard.firebaseio.com",projectId:"anonpuzzleboard",storageBucket:"anonpuzzleboard.appspot.com",messagingSenderId:"520968649938",appId:"1:520968649938:web:59905411bf7834845e410b"});var h=p.a,m=n(13),b=h.database().ref(),v=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.handleClick=function(t){t.preventDefault(),b.push([e.state.riddleInput,e.state.answerInput,e.state.counter]),e.setState({riddleInput:"",answerInput:"",counter:0})},e.state={riddleInput:"",answerInput:"",counter:0},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{action:"submit"},r.a.createElement("h1",null,"Puzzle Input"),r.a.createElement("div",{className:"riddleArea"},r.a.createElement("label",{htmlFor:"riddleInput"},"Please input your riddle"),r.a.createElement("input",{type:"textarea",id:"riddleInput",onChange:this.handleChange,name:"riddleInput",value:this.state.riddleInput,placeholder:"I am round and I live underground"})),r.a.createElement("div",{className:"answerArea"},r.a.createElement("label",{htmlFor:"answerInput"},"Please input your answer"),r.a.createElement("input",{type:"text",name:"answerInput",id:"answerInput",placeholder:"potato",onChange:this.handleChange,value:this.state.answerInput})),r.a.createElement("button",{onClick:this.handleClick},"Submit"))}}]),n}(a.Component),f=h.database().ref(),g=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).saveRiddleAnswer=function(t){e.setState({userInputAnswer:t.target.value}),console.log(e.state.userInputAnswer,"this is the state of userInputUserInputAnswer")},e.checkUserInputAnswer=function(t){t.preventDefault();var n=t.target.value,a=e.state.userInputAnswer;a===n?e.setState({userFeedback:"You got it right"}):e.setState({userFeedback:"You got it wrong"}),console.log(a,"this is the user answer"),console.log(n,"This is the right answer from the database")},e.state={dbReturn:[],userInputAnswer:"",userFeedback:"Right"},console.log(e.state.userFeedback,"this is the userFeedback"),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.on("value",(function(t){var n=t.val(),a=[];for(var r in n)a.push(n[r]);console.log(a),e.setState({dbReturn:a}),console.log(e.state.dbReturn,"this is my dbReturn")}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"displayBox"},r.a.createElement("h1",null,"Anonymous Puzzle Board"),r.a.createElement("ul",null,r.a.createElement("li",null,this.state.dbReturn.map((function(t){return r.a.createElement("form",{action:"submit"},r.a.createElement("p",null,t[0]),r.a.createElement("input",{type:"text",id:"riddleAnswer",onChange:e.saveRiddleAnswer,placeholder:"Answer"}),r.a.createElement("button",{value:t[1],onClick:e.checkUserInputAnswer},"Submit"),r.a.createElement("p",null,e.state.userFeedback),console.log(e.state.userFeedback,"This is the userFeedback"))})))))}}]),n}(a.Component),w=(h.database().ref(),function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={dbReturn:[],onPuzzleDisplay:!0},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(g,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e743baa2.chunk.js.map