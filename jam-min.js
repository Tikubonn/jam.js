function jam(aC,l){var K;var Y;const aw={source:"",sourcefile:null,compileonly:false,standard:K,standardscope:{},nativescope:{},userscope:{}};var aB;if(arguments.length==2){aB=aC;aC=l;aC.source=aB}else{if(typeof aC=="string"){aB=aC;aC=aw;aC.source=aB}}aC.source=aC.source||aw.source;aC.sourcefile=aC.sourcefile||aw.sourcefile;aC.compileonly=aC.compileonly||aw.compileonly;aC.standard=aC.standard||aw.standard;aC.standardscope=aC.standardscope||aw.standardscope;aC.userscope=aC.userscope||aw.userscope;function R(aI){return aI()}function i(aI){return aI[aI.length-1]}function t(aJ,aI){return Array.prototype.slice.call(aJ,aI||0)}function aE(aJ,aI){t(aI).map(function(aL,aK){aJ[aK]&&aJ[aK](aL())})}function ab(aJ,aI){if(0<aJ.length){return aJ[0][aI]?aJ[0][aI]:ab(aJ.slice(1),aI)}return at(aC.nativescope,aI)}function at(aJ,aI){return x(aJ,aI)}function E(aJ){var aI;var aK=Y;var aL=s(Y,{});return function(){Y=aL;aI=aJ.apply(arguments);Y=aK;return aI}}function O(aI){var aJ;var aL;return function aK(aM){if(!aL){aL=Y}if(!aJ){aJ=aL[0]}if(arguments.length==1){aJ[aI]=aM}return ab(aL,aI)}}function av(aI){return function aJ(aK){if(arguments.length==1){aI=aK}return aI}}function x(aK,aI){return function aJ(aL){if(arguments.length==1){aK[aI]=aL}return N(aK,aI)}}function N(aJ,aI){var aK=aJ[aI];if(aK instanceof Object){if(aK.constructor==Array){return w(aK)}if(aK.constructor==Object){return ac(aK)}}return aK}function w(aI){return aI.map(function(aK,aJ){return x(aI,aJ)})}function ac(aK){var aJ={};var aI;for(aI in aK){aJ[aI]=x(aK,aI)}return aJ}function c(aJ,aI){return function(){var aK=aJ()();if(!aK){throw ("jam internal error: jam called a undefined function.")}return aK(aI)}}function F(aI){return function(){return aI}}function u(aI){return av(Array.prototype.slice.call(arguments,0))}function H(aI){return aI.slice(1)}function s(aJ,aI){return[aI].concat(aJ)}function am(){Y=s(Y,{})}function an(){Y=H(Y)}function b(aI){return av(function(aJ){return aI.apply(null,aJ())})}function p(aI){return F(aI)}var m=p(true);var J=p(false);var A=p(null);var r=p(undefined);var az=b(function(aJ,aI){return av(aJ===aI)});var g=b(function(aI){return av(aI()()===true)});var M=b(function(aI){return av(aI()()===false)});var W=b(function(aI){return av(typeof aI()()==="boolean")});var k=b(function(aI){return av(typeof aI()()==="number")});var T=b(function(aI){return av(aI()()===null)});var G=b(function(aI){return av(aI()()===undefined)});var ax=b(function(aI){return av(!aI()())});var X=b(function(aK){var aJ;var aI=m();for(aJ=0;aJ<arguments.length;aJ++){aI=arguments[aJ]();if(!aI()){break}}return aI});var v=b(function(aK){var aJ;var aI=m();for(aJ=0;aJ<arguments.length;aJ++){aI=arguments[aJ]();if(aI()){break}}return aI});var Z=b(function(aI){return F(aI)});var n=b(function(aI){return aI()});var B=b(function(aK){var aI=aK();var aL;var aJ;for(aJ=1;aJ<arguments.length;aJ++){aL=arguments[aJ]();if(!(aI()<aL())){return J}aI=aL}return m});var aa=b(function(aK){var aI=aK();var aL;var aJ;for(aJ=1;aJ<arguments.length;aJ++){aL=arguments[aJ]();if(!(aI()>aL())){return J}aI=aL}return m});var aF=b(function(aK){var aI=aK();var aL;var aJ;for(aJ=1;aJ<arguments.length;aJ++){aL=arguments[aJ]();if(!(aI()<=aL())){return J}aI=aL}return m});var aq=b(function(aK){var aI=aK();var aL;var aJ;for(aJ=1;aJ<arguments.length;aJ++){aL=arguments[aJ]();if(!(aI()>=aL())){return J}aI=aL}return m});var h=b(function(aK){var aJ=aK()();var aI;for(aI=1;aI<arguments.length;aI++){aJ+=arguments[aI]()()}return av(aJ)});var au=b(function(aK){var aJ=aK()();var aI;for(aI=1;aI<arguments.length;aI++){aJ-=arguments[aI]()()}return av(aJ)});var aG=b(function(aK){var aJ=aK()();var aI;for(aI=1;aI<arguments.length;aI++){aJ*=arguments[aI]()()}return av(aJ)});var j=b(function(aK){var aJ=aK()();var aI;for(aI=1;aI<arguments.length;aI++){aJ/=arguments[aI]()()}return av(aJ)});var aH=b(function(aK){var aJ=aK()();var aI;for(aI=1;aI<arguments.length;aI++){aJ%=arguments[aI]()()}return av(aJ)});var e=b(function(aJ){var aI=t(arguments,1);return aJ()()?ao()(F(aI)):A});var U=b(function(aJ){var aI=t(arguments,1);return aJ()()?A:ao()(F(aI))});var z=b(function(aK,aJ,aI){return aK()()?aJ():aI()});var af=b(function(aI,aJ){return aI(aJ())});var ak=b(function(aJ,aK){var aI=aJ();aI(aK()());return aI});var ap=b(function(aJ){var aI=aJ();console.log(aI());return aI});var D=b(function(aL){var aK={};var aJ;for(aJ=0;aJ<arguments.length;aJ+=2){var aI=arguments[aJ];var aM=arguments[aJ+1];aK[aI()()]=aM()}return av(aK)});var S=b(function(aI){return av(t(arguments).map(R))});var Q=b(function(aI){return av(t(arguments))});var a=b(function(aI){return av(Object.prototype.toString.call(aI()())===Object.prototype.toString.call([]))});var al=b(function(aL,aK){var aJ=aL()();var aI=aK()();return aI[aJ]});var f=b(function(aJ,aL){var aK=aJ()();var aI=aL()();return aI[aK]});var ao=b(function(aI){return i(t(arguments).map(R))});var ad=b(function(aJ){var aI=t(arguments,1);return aJ()()(F(aI))});var ae=b(function(aJ,aI){return aJ()()(F(aI()().map(F)))});var o=b(function(aJ){var aK=aJ()();var aI=t(arguments,1);return E(b(function(aM){var aL;am();aE(aK,arguments);aL=ao()(F(aI));an();return aL}))});var ai=b(function(aJ){var aK=t(arguments,1);var aI=o()(F(aK));return af()(u(aJ,F(aI)))});K={">":aa,"<":B,">=":aq,"<=":aF,when:e,unless:U,"if":z,not:ax,and:X,or:v,"true":m,"false":J,"null":A,"undefined":r,"true?":g,"false?":M,"null?":T,"undefined?":G,"bool?":W,"list?":a,lazy:Z,force:n,setq:af,setf:ak,print:ap,lambda:o,defun:ai,funcall:ad,apply:ae,progn:ao,object:D,list:S,lisy:Q,get:al,nth:f,"+":h,"-":au,"*":aG,"/":j,"%":aH};Y=[aC.userscope,aC.standardscope,K];const L=function(){};const V=function(){};const C="symbol";const I="string";const aA="number";function y(aP,aM){this.value=aP;this.type=aM;var aO=this;function aJ(aR){return F(av(parseInt(aR)))}function aK(aR){return F(av(parseFloat(aR)))}function aN(aS){var aR=aS.indexOf(".");if(aR==-1){return aJ(aS)}return aK(aS)}function aQ(aR){return F(av(aR))}function aL(aR){return O(aR)}function aI(){switch(aO.type){case C:return aL(aO.value);case I:return aQ(aO.value);case aA:return aN(aO.value);default:return F(null)}}this.force=aI}function ay(aI){return new y(aI,C)}function aD(aI){return new y(aI,I)}function P(aI){return new y(aI,aA)}function ah(aT){function aU(a3,a4){var a5=[];while(0<a4--){a5.push(a3.shift())}return a5.join("")}function aW(a3,a5){var a4;for(a4=0;a4<a3.length;a4++){if(a5.indexOf(a3[a4])<0){break}}return aU(a3,a4)}function aP(a3,a5){var a4;for(a4=0;a4<a3.length;a4++){if(0<=a5.indexOf(a3[a4])){break}}return aU(a3,a4)}function a0(a4){var a3=aK(a4,1);var a5=aU(a4,a3+1);return a5.slice(1,-1)}function aK(a4,a5){var a3=a4.indexOf('"',a5);if(0<=a3&&a4[a3-1]=="\\"){return aK(a4,a3+1)}return a3}function aL(a3,a4){return a3[0]=="("}function a1(a3,a4){return a3[0]==")"}function aZ(a3,a4){return 0<="1234567890".indexOf(a3[0])}function aV(a3,a4){return a3[0]=='"'}function aX(a3,a4){return true}function aM(a3,a4){return true}function aY(a3,a4){return 0<=" \t\n".indexOf(a3[0])}function aJ(a3,a4){a3.shift();a4.push(L)}function a2(a3,a4){a3.shift();a4.push(V)}function aO(a3,a5){var a4=aW(a3,"1234567890.");a5.push(P(a4))}function aS(a3,a5){var a4=a0(a3);a5.push(aD(a4))}function aR(a3,a5){var a4=aP(a3,"( \t\n)");a5.push(ay(a4))}function aN(a3,a4){a3.shift()}function aI(a3,a4){a3.shift()}function aQ(a5,a7){var a3=a7.split("");var a6=[];while(0<a3.length){for(var a4=0;a4<a5.length;a4++){if(a5[a4][0](a3)){a5[a4][1](a3,a6);break}}}return a6}return aQ([[aY,aN],[aL,aJ],[a1,a2],[aZ,aO],[aV,aS],[aX,aR],[aM,aI]],aT)}function q(aI){function aJ(aL){var aM=[];while(0<aL.length){var aK=aL.shift();if(aK==L){aM.push(aJ(aL))}else{if(aK==V){break}else{aM.push(aK)}}}return aM}return aJ(aI)}function d(aJ){function aI(aN){var aM=aN[0];var aO=aN.slice(1);return c(aL(aM),F(aO.map(aL)))}function aL(aM){if(aM instanceof Array){return aI(aM)}return aM.force()}function aK(aM){return c(O("progn"),F(aM.map(aL)))}return aK(aJ)}var ag=ah(aC.source);var aj=q(ag);var ar=d(aj);if(aC.compileonly){return ar}return ar()};
