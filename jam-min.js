function jam(aG,m){var L;var aa;const aA={source:"",sourcefile:null,compileonly:false,standard:L,standardscope:{},nativescope:{},userscope:{}};var aF;if(arguments.length==2){aF=aG;aG=m;aG.source=aF}else{if(typeof aG=="string"){aF=aG;aG=aA;aG.source=aF}}aG.source=aG.source||aA.source;aG.sourcefile=aG.sourcefile||aA.sourcefile;aG.compileonly=aG.compileonly||aA.compileonly;aG.standard=aG.standard||aA.standard;aG.standardscope=aG.standardscope||aA.standardscope;aG.nativescope=aG.nativescope||aA.nativescope;aG.userscope=aG.userscope||aA.userscope;function S(aM){return aM()}function j(aM){return aM[aM.length-1]}function u(aN,aM){return Array.prototype.slice.call(aN,aM||0)}function aI(aN,aM){u(aM).map(function(aP,aO){aN[aO]&&aN[aO](aP())})}function ae(aN,aM){if(0<aN.length){return aN[0][aM]?aN[0][aM]:ae(aN.slice(1),aM)}return ax(aG.nativescope,aM)}function ax(aN,aM){return y(aN,aM)}function F(aN){var aM;var aO=aa;var aP=t(aa,{});return function(){aa=aP;aM=aN.apply(arguments);aa=aO;return aM}}function P(aM){var aN;var aP;return function aO(aQ){if(!aP){aP=aa}if(!aN){aN=aP[0]}if(arguments.length==1){aN[aM]=aQ}return ae(aP,aM)}}function az(aM){return function aN(aO){if(arguments.length==1){aM=aO}return aM}}function f(aO,aN){return function aM(aP){if(arguments.length==1){aO[aN]=aP}return aO[aN]}}function y(aO,aM){return function aN(aP){if(arguments.length==1){aO[aM]=aP}return O(aO,aM)}}function O(aN,aM){var aO=aN[aM];if(aO instanceof Object){if(aO.constructor==Array){return x(aO)}if(aO.constructor==Object){return af(aO)}}if(typeof aO=="function"){return am(aO)}return aO}function am(aN){return function aM(aO){return az(aN.apply(null,aO().map(S).map(S)))}}function x(aM){return aM.map(function(aO,aN){return y(aM,aN)})}function af(aO){var aN={};var aM;for(aM in aO){aN[aM]=y(aO,aM)}return aN}function c(aN,aM){return function(){var aO=aN()();if(!aO){throw ("jam internal error: jam called a undefined function.")}if(typeof aO!="function"){throw ("jam internal error: jam called a not function.")}return aO(aM)}}function G(aM){return function(){return aM}}function v(aM){return az(Array.prototype.slice.call(arguments,0))}function I(aM){return aM.slice(1)}function t(aN,aM){return[aM].concat(aN)}function aq(){aa=t(aa,{})}function ar(){aa=I(aa)}function b(aM){return az(function(aN){return aM.apply(null,aN())})}function q(aM){return G(aM)}var Y=function(){return af(aG.nativescope)};var n=q(true);var K=q(false);var B=q(null);var s=q(undefined);var aD=b(function(aN,aM){return az(aN===aM)});var ad=b(function(aN,aM){return az(aN()()===aM()())});var h=b(function(aM){return az(aM()()===true)});var N=b(function(aM){return az(aM()()===false)});var X=b(function(aM){return az(typeof aM()()==="boolean")});var l=b(function(aM){return az(typeof aM()()==="number")});var U=b(function(aM){return az(aM()()===null)});var H=b(function(aM){return az(aM()()===undefined)});var aB=b(function(aM){return az(!aM()())});var Z=b(function(aO){var aN;var aM=n();for(aN=0;aN<arguments.length;aN++){aM=arguments[aN]();if(!aM()){break}}return aM});var w=b(function(aO){var aN;var aM=n();for(aN=0;aN<arguments.length;aN++){aM=arguments[aN]();if(aM()){break}}return aM});var ab=b(function(aM){return G(aM)});var o=b(function(aM){return aM()});var C=b(function(aO){var aM=aO();var aP;var aN;for(aN=1;aN<arguments.length;aN++){aP=arguments[aN]();if(!(aM()<aP())){return K}aM=aP}return n});var ac=b(function(aO){var aM=aO();var aP;var aN;for(aN=1;aN<arguments.length;aN++){aP=arguments[aN]();if(!(aM()>aP())){return K}aM=aP}return n});var aJ=b(function(aO){var aM=aO();var aP;var aN;for(aN=1;aN<arguments.length;aN++){aP=arguments[aN]();if(!(aM()<=aP())){return K}aM=aP}return n});var av=b(function(aO){var aM=aO();var aP;var aN;for(aN=1;aN<arguments.length;aN++){aP=arguments[aN]();if(!(aM()>=aP())){return K}aM=aP}return n});var i=b(function(aO){var aN=aO()();var aM;for(aM=1;aM<arguments.length;aM++){aN+=arguments[aM]()()}return az(aN)});var ay=b(function(aO){var aN=aO()();var aM;for(aM=1;aM<arguments.length;aM++){aN-=arguments[aM]()()}return az(aN)});var aK=b(function(aO){var aN=aO()();var aM;for(aM=1;aM<arguments.length;aM++){aN*=arguments[aM]()()}return az(aN)});var k=b(function(aO){var aN=aO()();var aM;for(aM=1;aM<arguments.length;aM++){aN/=arguments[aM]()()}return az(aN)});var aL=b(function(aO){var aN=aO()();var aM;for(aM=1;aM<arguments.length;aM++){aN%=arguments[aM]()()}return az(aN)});var e=b(function(aN){var aM=u(arguments,1);return aN()()?at()(G(aM)):B});var V=b(function(aN){var aM=u(arguments,1);return aN()()?B:at()(G(aM))});var A=b(function(aO,aN,aM){return aO()()?aN():aM()});var ai=b(function(aM,aN){return aM(aN())});var ao=b(function(aN,aO){var aM=aN();aM(aO()());return aM});var au=b(function(aN){var aM=aN();console.log(aM());return aM});var E=b(function(aP){var aO={};var aN;for(aN=0;aN<arguments.length;aN+=2){var aM=arguments[aN];var aQ=arguments[aN+1];aO[aM()()]=aQ()()}return az(aO)});var T=b(function(aM){return az(u(arguments).map(S).map(S))});var R=b(function(aM){return az(u(arguments))});var a=b(function(aM){return az(Object.prototype.toString.call(aM()())===Object.prototype.toString.call([]))});var ap=b(function(aP,aO){var aN=aP()();var aM=aO()();return f(aM,aN)});var g=b(function(aN,aP){var aO=aN()();var aM=aP()();return f(aM,aO)});var at=b(function(aM){return j(u(arguments).map(S))});var ag=b(function(aN){var aM=u(arguments,1);return aN()()(G(aM))});var ah=b(function(aN,aM){return aN()()(G(aM()().map(G)))});var p=b(function(aN){var aO=aN()();var aM=u(arguments,1);return F(b(function(aQ){var aP;aq();aI(aO,arguments);aP=at()(G(aM));ar();return aP}))});var al=b(function(aN){var aO=u(arguments,1);var aM=p()(G(aO));return ai()(v(aN,G(aM)))});L={eq:aD,equal:ad,"native":Y,">":ac,"<":C,">=":av,"<=":aJ,when:e,unless:V,"if":A,not:aB,and:Z,or:w,"true":n,"false":K,"null":B,"undefined":s,"true?":h,"false?":N,"null?":U,"undefined?":H,"bool?":X,"list?":a,lazy:ab,force:o,setq:ai,setf:ao,print:au,lambda:p,defun:al,funcall:ag,apply:ah,progn:at,object:E,list:T,lisy:R,get:ap,nth:g,"+":i,"-":ay,"*":aK,"/":k,"%":aL};aa=[aG.userscope,aG.standardscope,L];const M=function(){};const W=function(){};const D="symbol";const J="string";const aE="number";function z(aT,aQ){this.value=aT;this.type=aQ;var aS=this;function aN(aV){return G(az(parseInt(aV)))}function aO(aV){return G(az(parseFloat(aV)))}function aR(aW){var aV=aW.indexOf(".");if(aV==-1){return aN(aW)}return aO(aW)}function aU(aV){return G(az(aV))}function aP(aV){return P(aV)}function aM(){switch(aS.type){case D:return aP(aS.value);case J:return aU(aS.value);case aE:return aR(aS.value);default:return G(null)}}this.force=aM}function aC(aM){return new z(aM,D)}function aH(aM){return new z(aM,J)}function Q(aM){return new z(aM,aE)}function ak(aX){function aY(a7,a8){var a9=[];while(0<a8--){a9.push(a7.shift())}return a9.join("")}function a0(a7,a9){var a8;for(a8=0;a8<a7.length;a8++){if(a9.indexOf(a7[a8])<0){break}}return aY(a7,a8)}function aT(a7,a9){var a8;for(a8=0;a8<a7.length;a8++){if(0<=a9.indexOf(a7[a8])){break}}return aY(a7,a8)}function a4(a8){var a7=aO(a8,1);var a9=aY(a8,a7+1);return a9.slice(1,-1)}function aO(a8,a9){var a7=a8.indexOf('"',a9);if(0<=a7&&a8[a7-1]=="\\"){return aO(a8,a7+1)}return a7}function aP(a7,a8){return a7[0]=="("}function a5(a7,a8){return a7[0]==")"}function a3(a7,a8){return 0<="1234567890".indexOf(a7[0])}function aZ(a7,a8){return a7[0]=='"'}function a1(a7,a8){return true}function aQ(a7,a8){return true}function a2(a7,a8){return 0<=" \t\n".indexOf(a7[0])}function aN(a7,a8){a7.shift();a8.push(M)}function a6(a7,a8){a7.shift();a8.push(W)}function aS(a7,a9){var a8=a0(a7,"1234567890.");a9.push(Q(a8))}function aW(a7,a9){var a8=a4(a7);a9.push(aH(a8))}function aV(a7,a9){var a8=aT(a7,"( \t\n)");a9.push(aC(a8))}function aR(a7,a8){a7.shift()}function aM(a7,a8){a7.shift()}function aU(a9,bb){var a7=bb.split("");var ba=[];while(0<a7.length){for(var a8=0;a8<a9.length;a8++){if(a9[a8][0](a7)){a9[a8][1](a7,ba);break}}}return ba}return aU([[a2,aR],[aP,aN],[a5,a6],[a3,aS],[aZ,aW],[a1,aV],[aQ,aM]],aX)}function r(aM){function aN(aP){var aQ=[];while(0<aP.length){var aO=aP.shift();if(aO==M){aQ.push(aN(aP))}else{if(aO==W){break}else{aQ.push(aO)}}}return aQ}return aN(aM)}function d(aN){function aM(aR){var aQ=aR[0];var aS=aR.slice(1);return c(aP(aQ),G(aS.map(aP)))}function aP(aQ){if(aQ instanceof Array){return aM(aQ)}return aQ.force()}function aO(aQ){return c(G(at),G(aQ.map(aP)))}return aO(aN)}var aj=ak(aG.source);var an=r(aj);var aw=d(an);if(aG.compileonly){return aw}return aw()};
