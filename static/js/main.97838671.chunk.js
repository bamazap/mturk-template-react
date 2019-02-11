(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);n(82);var a=n(0),r=n.n(a),o=n(73),i=n.n(o),c=(n(120),n(4)),l=n(74),s=n(6),u=n(5),p=n(7),h=n(75),m=n.n(h),d=n(76),f=n.n(d),g=n(77),v=n.n(g),b=function(e){var t=e.onContinue;return r.a.createElement("div",{className:v.a.instructions},r.a.createElement("h2",null,"Instructions"),r.a.createElement("p",{className:"bold"},"A one-line description of the task."),r.a.createElement("p",null,"A paragraph explaining a bit more about the task."),r.a.createElement("h3",null,"Guidelines"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read the instructions."),r.a.createElement("li",null,"Do the task."),r.a.createElement("li",null,"Profit!")),r.a.createElement("button",{onClick:t},"Continue"),r.a.createElement("h3",null,"Examples"),r.a.createElement("img",{src:"https://i.gifer.com/UGQn.gif"}))},E=n(78),y=n.n(E),k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDone=function(){n.props.onDone&&n.props.onDone({timestamp:new Date})},n.render=function(){return r.a.createElement("div",{className:y.a.task},r.a.createElement("button",{onClick:n.handleDone},"Click the button to win!"))},n}return Object(p.a)(t,e),t}(a.Component),O=n(44),w=n(80),j=n(45),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).inputType=void 0,n.onChange=function(e){n.props.onChange(e.target.value)},n.render=function(){var e=Object.entries(n.props.options);return n.props.addOther&&e.push(["other",void 0]),e.push(["unspecified","Prefer Not To Say"]),r.a.createElement("div",{onChange:n.onChange},e.map(function(e){var t=Object(w.a)(e,2),a=t[0],o=t[1];return r.a.createElement("label",{key:a},r.a.createElement("input",{type:n.inputType,name:name,value:a,checked:n.isChecked(a),readOnly:!0}),r.a.createElement("span",null,j.isString(o)?o:j.startCase(a)))}))},n}return Object(p.a)(t,e),t}(a.Component),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).inputType="radio",n.isChecked=function(e){return n.props.value===e},n}return Object(p.a)(t,e),t}(C),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).inputType="checkbox",n.isChecked=function(e){return n.props.value.indexOf(e)>=0},n}return Object(p.a)(t,e),t}(C),I=n(79),_=n.n(I),A={ageGroup18:"18 to 24",ageGroup25:"25 to 34",ageGroup35:"35 to 44",ageGroup45:"45 to 54",ageGroup55:"55 to 64",ageGroup65:"65 and over"},x={lessThanHighSchool:void 0,highSchool:"High School / GED",someCollege:void 0,twoYearDegree:void 0,fourYearDegree:void 0,mastersDegree:"Master's Degree",doctoralDegree:void 0,professionalDegree:void 0},G={Asian:void 0,Latino_Hispanic:"Latino / Hispanic",Pacific_Islander:void 0,Black_African:"Black / African Descent",Middle_Eastern:void 0,White_Caucasian:"White / Caucasian",East_Indian:void 0,Native_American:void 0},T={gender:"",age:"",education:"",ethnicity:[],feedback:""},N=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state=T,n.handleInput=function(e){return function(t){n.setState(Object(O.a)({},e,t))}},n.handleCheck=function(e){return function(t){n.setState(function(n){var a=n[e],r=a.indexOf(t);return r>=0?a.splice(r,1):a.push(t),Object(O.a)({},e,a)})}},n.handleSubmit=function(e){e.preventDefault(),n.state.gender&&n.state.age&&n.state.education&&0!=n.state.ethnicity.length?n.props.onSubmit&&n.props.onSubmit(n.state):alert("Please complete the survey.")},n.render=function(){return r.a.createElement("form",{className:_.a.survey,onSubmit:n.handleSubmit},r.a.createElement("h2",null,"Demographic Survey"),r.a.createElement("p",null,"Before you submit the task, please take a moment to fill out this survey."),r.a.createElement("h4",null,"Gender"),r.a.createElement(S,{name:"gender",options:{male:void 0,female:void 0},addOther:!0,value:n.state.gender,onChange:n.handleInput("gender")}),r.a.createElement("h4",null,"Age"),r.a.createElement(S,{name:"age",options:A,value:n.state.age,onChange:n.handleInput("age")}),r.a.createElement("h4",null,"Education"),r.a.createElement(S,{name:"education",options:x,value:n.state.education,onChange:n.handleInput("education")}),r.a.createElement("h4",null,"Ethnicity"),r.a.createElement(D,{name:"ethnicity",options:G,addOther:!0,value:n.state.ethnicity,onChange:n.handleCheck("ethnicity")}),r.a.createElement("h4",null,"Feedback"),r.a.createElement("textarea",{name:"feedback",rows:2,placeholder:"If you have any feedback, comments, or suggestions, please describe them here.",onChange:function(e){return n.handleInput("feedback")(e.target.value)},value:n.state.feedback}),r.a.createElement("button",{type:"submit"},"Submit"))},n}return Object(p.a)(t,e),t}(a.Component);function P(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Thank You"),r.a.createElement("p",null,"The task is now over."))}var B,H="Experiment Title";document.title=H,function(e){e[e.instructions=0]="instructions",e[e.task=1]="task",e[e.survey=2]="survey",e[e.done=3]="done"}(B||(B={}));var J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={page:B.instructions},n.submit=function(){var e=new FormData,t=new URLSearchParams(window.location.search);e.set("assignmentId",t.get("assignmentId")||"?"),e.set("workerId",t.get("workerId")||"?"),e.set("hitId",t.get("workerId")||"?"),e.set("taskData",JSON.stringify(n.state.taskData)),e.set("surveyData",JSON.stringify(n.state.surveyData));var a=t.get("turkSubmitTo")||"https://www.mturk.com/";a.endsWith("/")||(a+="/");var r="".concat(a,"mturk/externalSubmit");m.a.post(r,e,{headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{}}).then(function(){n.setState({page:B.done})}).catch(function(){alert("Something went wrong. Please try again, or contact us if the problem persists.")})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.state.page===B.instructions?r.a.createElement(b,{onContinue:function(){return t.setState({page:B.task})}}):this.state.page===B.task?r.a.createElement(k,{onDone:function(e){return t.setState({page:B.survey,taskData:e})}}):this.state.page===B.survey?r.a.createElement(N,{onSubmit:function(e){t.setState({surveyData:e},t.submit)}}):r.a.createElement(P,null),r.a.createElement("div",{className:f.a.app},r.a.createElement("header",null,r.a.createElement("h1",null,H)),r.a.createElement("main",null,e),r.a.createElement("footer",null,r.a.createElement("p",null,"This is a disclaimer. You are participating voluntarily.")))}}]),t}(a.Component);i.a.render(r.a.createElement(J,null),document.getElementById("root"))},76:function(e,t,n){e.exports={app:"App_app__W2tGk"}},77:function(e,t,n){e.exports={instructions:"Instructions_instructions__2yno8"}},78:function(e,t,n){},79:function(e,t,n){e.exports={survey:"DemographicSurvey_survey__3Grmp"}},81:function(e,t,n){e.exports=n(145)}},[[81,2,1]]]);
//# sourceMappingURL=main.97838671.chunk.js.map