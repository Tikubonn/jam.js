function jam(aD,l){var K;var Z;const ax={source:"",sourcefile:null,compileonly:false,standard:K,standardscope:{},nativescope:{},userscope:{}};var aC;if(arguments.length==2){aC=aD;aD=l;aD.source=aC}else{if(typeof aD=="string"){aC=aD;aD=ax;aD.source=aC}}aD.source=aD.source||ax.source;aD.sourcefile=aD.sourcefile||ax.sourcefile;aD.compileonly=aD.compileonly||ax.compileonly;aD.standard=aD.standard||ax.standard;aD.standardscope=aD.standardscope||ax.standardscope;aD.userscope=aD.userscope||ax.userscope;function R(aJ){return aJ()}function i(aJ){return aJ[aJ.length-1]}function t(aK,aJ){return Array.prototype.slice.call(aK,aJ||0)}function aF(aK,aJ){t(aJ).map(function(aM,aL){aK[aL]&&aK[aL](aM())})}function ac(aK,aJ){if(0<aK.length){return aK[0][aJ]?aK[0][aJ]:ac(aK.slice(1),aJ)}return au(aD.nativescope,aJ)}function au(aK,aJ){return x(aK,aJ)}function E(aK){var aJ;var aL=Z;var aM=s(Z,{});return function(){Z=aM;aJ=aK.apply(arguments);Z=aL;return aJ}}function O(aJ){var aK;var aM;return function aL(aN){if(!aM){aM=Z}if(!aK){aK=aM[0]}if(arguments.length==1){aK[aJ]=aN}return ac(aM,aJ)}}function aw(aJ){return function aK(aL){if(arguments.length==1){aJ=aL}return aJ}}function x(aL,aJ){return function aK(aM){if(arguments.length==1){aL[aJ]=aM}return N(aL,aJ)}}function N(aK,aJ){var aL=aK[aJ];if(aL instanceof Object){if(aL.constructor==Array){return w(aL)}if(aL.constructor==Object){return ad(aL)}}return aL}function w(aJ){return aJ.map(function(aL,aK){return x(aJ,aK)})}function ad(aL){var aK={};var aJ;for(aJ in aL){aK[aJ]=x(aL,aJ)}return aK}function c(aK,aJ){return function(){var aL=aK()();if(!aL){throw ("jam internal error: jam called a undefined function.")}return aL(aJ)}}function F(aJ){return function(){return aJ}}function u(aJ){return aw(Array.prototype.slice.call(arguments,0))}function H(aJ){return aJ.slice(1)}function s(aK,aJ){return[aJ].concat(aK)}function an(){Z=s(Z,{})}function ao(){Z=H(Z)}function b(aJ){return aw(function(aK){return aJ.apply(null,aK())})}function p(aJ){return F(aJ)}var X=function(){return ad(aD.nativescope)};var m=p(true);var J=p(false);var A=p(null);var r=p(undefined);var aA=b(function(aK,aJ){return aw(aK===aJ)});var g=b(function(aJ){return aw(aJ()()===true)});var M=b(function(aJ){return aw(aJ()()===false)});var W=b(function(aJ){return aw(typeof aJ()()==="boolean")});var k=b(function(aJ){return aw(typeof aJ()()==="number")});var T=b(function(aJ){return aw(aJ()()===null)});var G=b(function(aJ){return aw(aJ()()===undefined)});var ay=b(function(aJ){return aw(!aJ()())});var Y=b(function(aL){var aK;var aJ=m();for(aK=0;aK<arguments.length;aK++){aJ=arguments[aK]();if(!aJ()){break}}return aJ});var v=b(function(aL){var aK;var aJ=m();for(aK=0;aK<arguments.length;aK++){aJ=arguments[aK]();if(aJ()){break}}return aJ});var aa=b(function(aJ){return F(aJ)});var n=b(function(aJ){return aJ()});var B=b(function(aL){var aJ=aL();var aM;var aK;for(aK=1;aK<arguments.length;aK++){aM=arguments[aK]();if(!(aJ()<aM())){return J}aJ=aM}return m});var ab=b(function(aL){var aJ=aL();var aM;var aK;for(aK=1;aK<arguments.length;aK++){aM=arguments[aK]();if(!(aJ()>aM())){return J}aJ=aM}return m});var aG=b(function(aL){var aJ=aL();var aM;var aK;for(aK=1;aK<arguments.length;aK++){aM=arguments[aK]();if(!(aJ()<=aM())){return J}aJ=aM}return m});var ar=b(function(aL){var aJ=aL();var aM;var aK;for(aK=1;aK<arguments.length;aK++){aM=arguments[aK]();if(!(aJ()>=aM())){return J}aJ=aM}return m});var h=b(function(aL){var aK=aL()();var aJ;for(aJ=1;aJ<arguments.length;aJ++){aK+=arguments[aJ]()()}return aw(aK)});var av=b(function(aL){var aK=aL()();var aJ;for(aJ=1;aJ<arguments.length;aJ++){aK-=arguments[aJ]()()}return aw(aK)});var aH=b(function(aL){var aK=aL()();var aJ;for(aJ=1;aJ<arguments.length;aJ++){aK*=arguments[aJ]()()}return aw(aK)});var j=b(function(aL){var aK=aL()();var aJ;for(aJ=1;aJ<arguments.length;aJ++){aK/=arguments[aJ]()()}return aw(aK)});var aI=b(function(aL){var aK=aL()();var aJ;for(aJ=1;aJ<arguments.length;aJ++){aK%=arguments[aJ]()()}return aw(aK)});var e=b(function(aK){var aJ=t(arguments,1);return aK()()?ap()(F(aJ)):A});var U=b(function(aK){var aJ=t(arguments,1);return aK()()?A:ap()(F(aJ))});var z=b(function(aL,aK,aJ){return aL()()?aK():aJ()});var ag=b(function(aJ,aK){return aJ(aK())});var al=b(function(aK,aL){var aJ=aK();aJ(aL()());return aJ});var aq=b(function(aK){var aJ=aK();console.log(aJ());return aJ});var D=b(function(aM){var aL={};var aK;for(aK=0;aK<arguments.length;aK+=2){var aJ=arguments[aK];var aN=arguments[aK+1];aL[aJ()()]=aN()}return aw(aL)});var S=b(function(aJ){return aw(t(arguments).map(R))});var Q=b(function(aJ){return aw(t(arguments))});var a=b(function(aJ){return aw(Object.prototype.toString.call(aJ()())===Object.prototype.toString.call([]))});var am=b(function(aM,aL){var aK=aM()();var aJ=aL()();return aJ[aK]||x(aL,aK)});var f=b(function(aK,aM){var aL=aK()();var aJ=aM()();return aJ[aL]||x(aJ,aL)});var ap=b(function(aJ){return i(t(arguments).map(R))});var ae=b(function(aK){var aJ=t(arguments,1);return aK()()(F(aJ))});var af=b(function(aK,aJ){return aK()()(F(aJ()().map(F)))});var o=b(function(aK){var aL=aK()();var aJ=t(arguments,1);return E(b(function(aN){var aM;an();aF(aL,arguments);aM=ap()(F(aJ));ao();return aM}))});var aj=b(function(aK){var aL=t(arguments,1);var aJ=o()(F(aL));return ag()(u(aK,F(aJ)))});K={"native":X,">":ab,"<":B,">=":ar,"<=":aG,when:e,unless:U,"if":z,not:ay,and:Y,or:v,"true":m,"false":J,"null":A,"undefined":r,"true?":g,"false?":M,"null?":T,"undefined?":G,"bool?":W,"list?":a,lazy:aa,force:n,setq:ag,setf:al,print:aq,lambda:o,defun:aj,funcall:ae,apply:af,progn:ap,object:D,list:S,lisy:Q,get:am,nth:f,"+":h,"-":av,"*":aH,"/":j,"%":aI};Z=[aD.userscope,aD.standardscope,K];const L=function(){};const V=function(){};const C="symbol";const I="string";const aB="number";function y(aQ,aN){this.value=aQ;this.type=aN;var aP=this;function aK(aS){return F(aw(parseInt(aS)))}function aL(aS){return F(aw(parseFloat(aS)))}function aO(aT){var aS=aT.indexOf(".");if(aS==-1){return aK(aT)}return aL(aT)}function aR(aS){return F(aw(aS))}function aM(aS){return O(aS)}function aJ(){switch(aP.type){case C:return aM(aP.value);case I:return aR(aP.value);case aB:return aO(aP.value);default:return F(null)}}this.force=aJ}function az(aJ){return new y(aJ,C)}function aE(aJ){return new y(aJ,I)}function P(aJ){return new y(aJ,aB)}function ai(aU){function aV(a4,a5){var a6=[];while(0<a5--){a6.push(a4.shift())}return a6.join("")}function aX(a4,a6){var a5;for(a5=0;a5<a4.length;a5++){if(a6.indexOf(a4[a5])<0){break}}return aV(a4,a5)}function aQ(a4,a6){var a5;for(a5=0;a5<a4.length;a5++){if(0<=a6.indexOf(a4[a5])){break}}return aV(a4,a5)}function a1(a5){var a4=aL(a5,1);var a6=aV(a5,a4+1);return a6.slice(1,-1)}function aL(a5,a6){var a4=a5.indexOf('"',a6);if(0<=a4&&a5[a4-1]=="\\"){return aL(a5,a4+1)}return a4}function aM(a4,a5){return a4[0]=="("}function a2(a4,a5){return a4[0]==")"}function a0(a4,a5){return 0<="1234567890".indexOf(a4[0])}function aW(a4,a5){return a4[0]=='"'}function aY(a4,a5){return true}function aN(a4,a5){return true}function aZ(a4,a5){return 0<=" \t\n".indexOf(a4[0])}function aK(a4,a5){a4.shift();a5.push(L)}function a3(a4,a5){a4.shift();a5.push(V)}function aP(a4,a6){var a5=aX(a4,"1234567890.");a6.push(P(a5))}function aT(a4,a6){var a5=a1(a4);a6.push(aE(a5))}function aS(a4,a6){var a5=aQ(a4,"( \t\n)");a6.push(az(a5))}function aO(a4,a5){a4.shift()}function aJ(a4,a5){a4.shift()}function aR(a6,a8){var a4=a8.split("");var a7=[];while(0<a4.length){for(var a5=0;a5<a6.length;a5++){if(a6[a5][0](a4)){a6[a5][1](a4,a7);break}}}return a7}return aR([[aZ,aO],[aM,aK],[a2,a3],[a0,aP],[aW,aT],[aY,aS],[aN,aJ]],aU)}function q(aJ){function aK(aM){var aN=[];while(0<aM.length){var aL=aM.shift();if(aL==L){aN.push(aK(aM))}else{if(aL==V){break}else{aN.push(aL)}}}return aN}return aK(aJ)}function d(aK){function aJ(aO){var aN=aO[0];var aP=aO.slice(1);return c(aM(aN),F(aP.map(aM)))}function aM(aN){if(aN instanceof Array){return aJ(aN)}return aN.force()}function aL(aN){return c(O("progn"),F(aN.map(aM)))}return aL(aK)}var ah=ai(aD.source);var ak=q(ah);var at=d(ak);if(aD.compileonly){return at}return at()};