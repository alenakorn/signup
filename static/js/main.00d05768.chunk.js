(this.webpackJsonpsignup=this.webpackJsonpsignup||[]).push([[0],{197:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n(41),i=n.n(a),s=n(9),o=n(8),l=n(201),u=n(7),d="GOTO_STEP",j={currentStepId:0,steps:[{id:0,name:"PASSWORD"},{id:1,name:"USERDATA"},{id:2,name:"THANK"}]},b=Object(o.b)({form:l.a,registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;return t.type===d?Object(u.a)(Object(u.a)({},e),{},{currentStepId:t.stepId}):e}}),m=Object(o.c)(b),p=n(199),h=n(1),O=Object(p.a)({form:"registrationForm",destroyOnUnmount:!1,forceUnregisterOnUnmount:!0})((function(e){var t=e.children;return Object(h.jsx)("form",{className:"container",children:t})})),v=n(86),x=["visualClass","isShown","children"],f=function(e){var t=e.visualClass,n=e.isShown,r=e.children,c=Object(v.a)(e,x),a=["button","button-".concat(t),n?"button-active":""];return Object(h.jsx)("button",Object(u.a)(Object(u.a)({},c),{},{className:a.join(" "),children:r}))},g=function(){var e=Object(s.d)((function(e){return e.registration})),t=e.currentStepId,n=100/(e.steps.length/(t+1));return Object(h.jsx)("div",{className:"progress-bar",children:Object(h.jsx)("span",{style:{width:"".concat(n,"%")}})})},w=function(e){var t=e.children,n=e.cardTitle,r=Object(s.c)(),c=Object(s.d)((function(e){return e.registration})),a=c.currentStepId,i=Object(s.d)((function(e){return e.form})),o=i.registrationForm,l=function(e){r(function(e){return{type:d,stepId:e}}(e))};return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("h1",{className:"card-title",children:2===a?"Thank you!":n}),Object(h.jsx)(g,{}),Object(h.jsx)("div",{className:"card-content",children:t}),Object(h.jsxs)("div",{className:"card-footer",children:[Object(h.jsx)(f,{type:"button",visualClass:"back",isShown:1===a,onClick:function(){return l(a-1)},children:"Back"}),Object(h.jsx)(f,{type:"button",visualClass:"next",isShown:2!==a,onClick:function(){return l(a+1)},disabled:null===o||void 0===o?void 0:o.syncErrors,children:"Next \u279e"}),Object(h.jsx)(f,{type:"submit",visualClass:"goto",isShown:2===a,onClick:function(e){e.preventDefault();var t=null===o||void 0===o?void 0:o.values,n=t.email,r=t.password,c=t.day,a=t.month,i=t.year,s=t.gender,l=t.howHearAboutUs,u={user_data:{email:n,gender:s,password:r,date_of_birth:new Date("".concat(a,"/").concat(c,"/").concat(i)).getTime(),how_hear_about_us:l}};console.log(u)},children:"Go to Dashboard"})]})]})},N=function(){return Object(h.jsx)("div",{className:"thank-image",children:Object(h.jsxs)("svg",{className:"ft-green-tick",xmlns:"http://www.w3.org/2000/svg",height:"160",width:"160",viewBox:"0 0 48 48","aria-hidden":"true",children:[Object(h.jsx)("circle",{className:"circle",fill:"#5bb543",cx:"24",cy:"24",r:"22"}),Object(h.jsx)("path",{className:"tick",fill:"none",stroke:"#FFF",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M14 27l5.917 4.917L34 17"})]})})},y=Object(c.memo)(N),k=n(200),S=(r=6,function(e){return(null===e||void 0===e?void 0:e.length)<r?"must be ".concat(r," characters or more"):void 0}),F=function(e){return e?void 0:"is required"},_=function(e){return e&&isNaN(Number(e))?"must be a number":void 0},D=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"is invalid":void 0},I=function(e,t){return e!==t.password?"don't match":void 0},T=function(e){return e&&(e<1||e>31)?"has invalid DD":void 0},A=function(e){return e&&(e<1||e>12)?"has invalid MM":void 0},C=function(e){if(e)return(new Date).getFullYear()-e<18?"must be 18 year old or more":void 0},M=function(e){var t=e.input,n=e.label,r=e.type,c=e.meta,a=c.touched,i=c.error,s=e.placeholder,o=a&&i;return Object(h.jsxs)("div",{className:"input-wrap",children:[Object(h.jsxs)("label",{className:"input-label ".concat(o&&"input-label__error"),children:[n," ",o&&i]}),Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(u.a)(Object(u.a)({},t),{},{placeholder:s,type:r,className:"input"}))})]})},U=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k.a,{name:"email",type:"email",component:M,label:"Email",validate:[F,D]}),Object(h.jsx)(k.a,{name:"password",type:"password",component:M,label:"Password",validate:[F,S]}),Object(h.jsx)(k.a,{name:"confirmPassword",type:"password",component:M,label:"Confirm Password",validate:[F,S,I]})]})},E=Object(c.memo)(U),P=n(202),Y=function(e){var t=null===e||void 0===e?void 0:e.names.map((function(t){return e[t].meta})),n=t.filter((function(e){return e.touched&&e.error})),r=(null===n||void 0===n?void 0:n.length)>0,c=t.filter((function(e){return e.error}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{className:"input-label ".concat(r&&"input-label__error"," input-group-label"),children:[e.label," ",r&&c[0].error]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("div",{className:"input-row",children:Object(h.jsx)("input",Object(u.a)(Object(u.a)({},e.day.input),{},{placeholder:"DD",type:"text",className:"input"}))}),Object(h.jsx)("div",{className:"input-row",children:Object(h.jsx)("input",Object(u.a)(Object(u.a)({},e.month.input),{},{placeholder:"MM",type:"text",className:"input"}))}),Object(h.jsx)("div",{className:"input-row",children:Object(h.jsx)("input",Object(u.a)(Object(u.a)({},e.year.input),{},{placeholder:"YYYY",type:"text",className:"input"}))})]})]})},B=function(e){var t=e.label,n=e.name,r=e.values;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{className:"input-label input-group-label",children:t}),Object(h.jsx)("div",{className:"input-group input-group-radio",children:r.map((function(e){return Object(h.jsxs)("label",{className:"input-group-radio__label",children:[Object(h.jsx)(k.a,{name:n,component:"input",type:"radio",value:e}),e]},e)}))})]})},G=Object(c.memo)(B),H=function(e){var t=e.input,n=e.children,r=e.label;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{className:"input-label input-group-label",children:r}),Object(h.jsx)("select",Object(u.a)(Object(u.a)({},t),{},{className:"select",children:n}))]})},L=Object(c.memo)(H),W=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P.a,{names:["day","month","year"],component:Y,validate:{day:[T,F,_],month:[A,F,_],year:[C,F,_]},label:"Date of birth"}),Object(h.jsx)(G,{label:"Gender",name:"gender",values:["male","female","unspecified"]}),Object(h.jsxs)(k.a,{name:"howHearAboutUs",component:L,label:"Where did you heard about us?",children:[Object(h.jsx)("option",{}),Object(h.jsx)("option",{value:"Internet",children:"Internet"}),Object(h.jsx)("option",{value:"From friends",children:"From friends"}),Object(h.jsx)("option",{value:"TV advertising",children:"TV advertising"})]})]})},Z=Object(c.memo)(W),J=function(){var e=Object(s.d)((function(e){return e.registration})),t=e.currentStepId,n=[Object(h.jsx)(E,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(y,{})];return Object(h.jsx)(h.Fragment,{children:n[t]})},R=Object(c.memo)(J);n(197);i.a.render(Object(h.jsx)(s.a,{store:m,children:Object(h.jsx)(O,{children:Object(h.jsx)(w,{cardTitle:"Signup",children:Object(h.jsx)(R,{})})})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.00d05768.chunk.js.map