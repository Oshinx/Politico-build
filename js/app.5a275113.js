(function(t){function e(e){for(var n,a,o=e[0],u=e[1],c=e[2],h=0,d=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,o=1;o<i.length;o++){var u=i[o];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},r={app:0},s=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/Politico-build/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),r=i.n(n);r.a},"2d32":function(t,e,i){"use strict";var n=i("6258"),r=i.n(n);r.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=i("5f5b"),s=i("b1e0"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header",{attrs:{numCorrect:t.numCorrect,numTotal:t.numTotal,questionTimer:t.questionTimer}}),i("b-container",{staticClass:"bv-example-row question-row"},[t.isLoading?i("b-row",[i("b-col",{attrs:{sm:"6","offset-md":"3 "}},[i("b-jumbotron",[i("vue-content-loading",{attrs:{primary:t.primary,width:400,height:270}},[i("rect",{attrs:{x:"15",y:"13",rx:"0",ry:"14",width:"400",height:"50"}}),i("rect",{attrs:{x:"15",y:"70",rx:"0",ry:"10",width:"480",height:"2"}}),i("rect",{attrs:{x:"15",y:"79",rx:"0",ry:"10",width:"400",height:"40"}}),i("rect",{attrs:{x:"15",y:"125",rx:"0",ry:"10",width:"400",height:"40"}}),i("rect",{attrs:{x:"15",y:"170",rx:"0",ry:"10",width:"400",height:"40"}}),i("rect",{attrs:{x:"15",y:"215",rx:"0",ry:"10",width:"400",height:"40"}})])],1)],1)],1):t._e(),t.hasquizfinished?t._e():i("b-row",[i("b-col",{attrs:{sm:"6","offset-md":"3 "}},[t.questions.length?i("Question",{attrs:{currentQuestion:t.questions[t.index],next:t.next,increment:t.increment,isNextButtonDisabled:t.isNextButtonDisabled}}):t._e()],1)],1),t.hasquizfinished?i("b-row",{staticClass:"result-row"},[i("b-col",{attrs:{sm:"6",offset:"3 "}},[i("div",{staticClass:"result-container"},[i("h2",[t._v("Result")]),i("p",[t._v("You Scored "+t._s(t.numCorrect)+" out of "+t._s(t.numTotal))]),i("b-button",{on:{click:t.restartquiz}},[t._v("Restart")])],1)])],1):t._e(),t.hasquizfinished&&t.numCorrect>7?i("div",{staticClass:"lottie-container"},[i("lottie",{staticClass:"lottie",attrs:{options:t.defaultOptions,height:250,width:250},on:{animCreated:t.handleAnimation}})],1):t._e()],1)],1)},o=[],u=(i("d3b7"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-jumbotron",[i("p",[t._v(t._s(t.currentQuestion.question)+" ")]),i("hr",{staticClass:"my-4"}),i("b-list-group",t._l(t.shuffledAnswers,(function(e,n){return i("b-list-group-item",{key:n,class:[t.answered||t.selectedIndex!==n?t.answered&&t.correctIndex===n?"correct":t.answered&&t.selectedIndex===n&&t.correctIndex!==n?"incorrect":"":"selected"],on:{click:function(e){return t.selectedAnswer(n)}}},[t._v(" "+t._s(e)+" ")])})),1),i("b-button",{attrs:{variant:"primary",disabled:null===t.selectedIndex||t.answered},on:{click:t.submitAnswer}},[t._v(" Submit ")]),i("b-button",{attrs:{disabled:t.isNextButtonDisabled,variant:"primary",href:"#"},on:{click:t.next}},[t._v("Next")])],1)],1)}),c=[],l=(i("99af"),i("c975"),i("2909")),h=i("2ef0"),d=i.n(h),m={props:{currentQuestion:Object,next:Function,increment:Function,isNextButtonDisabled:Boolean},data:function(){return{selectedIndex:null,correctIndex:null,shuffledAnswers:[],answered:!1}},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedIndex=null,this.answered=!1,this.shuffleAnswers()}}},methods:{selectedAnswer:function(t){this.selectedIndex=t},shuffleAnswers:function(){var t=[].concat(Object(l["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffledAnswers=d.a.shuffle(t),this.correctIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)},submitAnswer:function(){var t=!1;this.selectedIndex===this.correctIndex&&(t=!0),this.answered=!0,this.increment(t)}},computed:{answers:function(){var t=[].concat(Object(l["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);return t}}},x=m,f=(i("2d32"),i("2877")),p=Object(f["a"])(x,u,c,!1,null,"7639f49e",null),k=p.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"main-header"},[t._m(0),i("div",{staticClass:"counter-timer-container"},[i("p",{attrs:{disabled:""}},[t._v("Counter: "+t._s(t.numCorrect)+"/"+t._s(t.numTotal))]),i("p",{staticClass:"timer-container"},[t._v("Timer: "+t._s(t.questionTimer))])])])])},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("b",[t._v("Politico Quiz App")])])}],v={props:["numCorrect","numTotal","questionTimer"]},w=v,T=(i("6726"),Object(f["a"])(w,y,b,!1,null,"1385f56b",null)),_=T.exports,g=i("8c2c"),q=i("f016"),A=i("68ee"),S=i.n(A),C={name:"App",components:{Question:k,Header:_,lottie:g["a"],VueContentLoading:S.a},data:function(){return{questions:[],index:0,numCorrect:0,numTotal:0,hasquizfinished:!1,error:"",defaultOptions:{animationData:q},animationSpeed:1,fullPage:!0,tempnumCorrect:0,hasquestionTimeExpire:!1,questionTimer:0,questionTimerId:0,isLoading:!0,primary:"#9fa6a1",isNextButtonDisabled:!1}},watch:{questionTimer:function(){this.isNextButtonDisabled=!1,this.questionTimer>10&&this.index<this.questions.length-1&&(this.index++,this.numTotal++,this.restartTimer()),10==this.questionTimer&&(this.isNextButtonDisabled=!0),this.index===this.questions.length-1&&10==this.questionTimer&&(clearInterval(this.questionTimerId),this.timer="finished",this.hasquizfinished=!0);var t=this.questionTimer;return this.questionTimer=t},index:function(){return this.index}},methods:{next:function(){this.index===this.questions.length-1?(this.hasquizfinished=!0,this.pause,this.numCorrect=this.tempnumCorrect,clearInterval(this.questionTimerId),this.questionTimer=""):(this.restartTimer(),this.index++,this.numTotal++)},increment:function(t){this.numTotal<this.questions.length&&t&&this.numCorrect++},restartquiz:function(){location.reload()},handleAnimation:function(t){this.anim=t},stop:function(){this.anim.stop()},play:function(){this.anim.play()},pause:function(){this.anim.pause()},onSpeedChange:function(){this.anim.setSpeed(this.animationSpeed)},startTimer:function(){var t=this;this.questionTimerId=setInterval((function(){++t.questionTimer}),1e3),this.hasquestionTimeExpire=!1},restartTimer:function(){this.questionTimer=0,this.hasquestionTimeExpire=!0,clearInterval(this.questionTimerId),this.startTimer()},clearTimer:function(){clearInterval(this)}},mounted:function(){var t=this;fetch("https://opentdb.com/api.php?amount=10&category=24&type=multiple",{method:"get"}).then((function(t){return t.json()})).then((function(e){t.questions=e.results,t.numTotal++,t.startTimer(),t.isLoading=!1})).catch((function(e){t.error=e}))}},I=C,j=(i("034f"),Object(f["a"])(I,a,o,!1,null,null,null)),O=j.exports,B=(i("f9e3"),i("2dd8"),i("d18b"));n["default"].use(B["a"]),n["default"].use(r["a"]),n["default"].use(s["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(O)}}).$mount("#app")},6258:function(t,e,i){},6726:function(t,e,i){"use strict";var n=i("6bbb"),r=i.n(n);r.a},"6bbb":function(t,e,i){},"85ec":function(t,e,i){},f016:function(t){t.exports=JSON.parse('{"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.20","a":"","k":"","d":"","tc":""},"fr":29.9700012207031,"ip":0,"op":33.0000013441176,"w":1080,"h":1080,"nm":"fireworks","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"t":32.0000013033867,"s":[0]}],"ix":11},"r":{"a":0,"k":-23,"ix":10},"p":{"a":0,"k":[540.5,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[105,105,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-0.5],[0,-38.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.665743898878,0,0.725489956725,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,-5],"to":[0,-44.167],"ti":[0,44.167]},{"t":29.0000011811942,"s":[0,-270]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,156],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"t":25.0000010182709,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":2,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":0,"op":33.0000013441176,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"t":32.0000013033867,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.5,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[69,69,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-0.5],[0,-38.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.343529555377,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,-5],"to":[0,-22.693],"ti":[0,56.706]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[0,-55.069],"to":[0,-53.661],"ti":[0,21.474]},{"t":29.0000011811942,"s":[0,-317]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,156],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"t":25.0000010182709,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":2,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":0,"op":33.0000013441176,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"t":32.0000013033867,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540.5,540,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[107,107,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-0.5],[0,-38.5]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,0.795294608322,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[0,-5],"to":[0,-44.167],"ti":[0,44.167]},{"t":29.0000011811942,"s":[0,-270]}],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,156],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[100]},{"t":25.0000010182709,"s":[100]}],"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"rp","c":{"a":0,"k":8,"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":2,"tr":{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":45,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false}],"ip":0,"op":33.0000013441176,"st":0,"bm":0}],"markers":[]}')}});
//# sourceMappingURL=app.5a275113.js.map