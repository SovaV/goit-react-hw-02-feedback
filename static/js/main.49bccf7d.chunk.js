(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,n){e.exports={container:"Container_container__2oXPs"}},11:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__33OUd"}},2:function(e,t,n){e.exports={box:"Statistics_box__WK8g7",item:"Statistics_item__1fCMh"}},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),r=n.n(i),s=n(6),o=n(7),b=n(8),l=n(14),u=n(13),d=n(9),j=n.n(d),h=n(0);function x(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:j.a.box,children:[t&&Object(h.jsx)("h2",{children:t}),n]})}var O=n(10),f=n.n(O);function v(e){var t=e.children;return Object(h.jsx)("div",{className:f.a.container,children:t})}var m=n(2),k=n.n(m),p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:k.a.box,children:[Object(h.jsxs)("li",{className:k.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:k.a.item,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:k.a.item,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:k.a.item,children:["Total: ",a]}),Object(h.jsxs)("li",{className:k.a.item,children:["Positive feedback: ",i,"%"]})]})};function g(e){var t=e.title;return Object(h.jsx)("section",{children:t&&Object(h.jsx)("h3",{children:t})})}var _=n(11),F=n.n(_),N=n(12),P=n.n(N),y=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:F.a.btn,type:"button",onClick:function(){return n(e)},children:e},P.a.generate())}))})},S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state),i=this.onLeaveFeedback,r=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(h.jsxs)(v,{children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(y,{options:a,onLeaveFeedback:i})}),Object(h.jsx)("h2",{title:"Statistics",children:" "}),Object(h.jsx)(x,{title:"Statistics",children:r>0?Object(h.jsx)(p,{good:t,neutral:n,bad:c,total:r,positivePercentage:s}):Object(h.jsx)(g,{title:"No feedback given"})})]})}}]),n}(c.Component),w=S;function C(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(w,{})})}n(28);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={box:"Section_box__3tney"}}},[[29,1,2]]]);
//# sourceMappingURL=main.49bccf7d.chunk.js.map