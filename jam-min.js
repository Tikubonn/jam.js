function jam(aK,m){var N;var ac;const aD={source:"",sourcefile:null,compileonly:false,standard:N,standardscope:{},nativescope:{},userscope:{}};var aJ;if(arguments.length==2){aJ=aK;aK=m;aK.source=aJ}else{if(typeof aK=="string"){aJ=aK;aK=aD;aK.source=aJ}}aK.source=aK.source||aD.source;aK.sourcefile=aK.sourcefile||aD.sourcefile;aK.compileonly=aK.compileonly||aD.compileonly;aK.standard=aK.standard||aD.standard;aK.standardscope=aK.standardscope||aD.standardscope;aK.nativescope=aK.nativescope||aD.nativescope;aK.userscope=aK.userscope||aD.userscope;function U(aR){return aR()}function j(aR){return aR[aR.length-1]}function u(aS,aR){return Array.prototype.slice.call(aS,aR||0)}function aM(aS,aR){u(aR).map(function(aU,aT){aS[aT]&&aS[aT](aU())})}function ag(aS,aR){if(0<aS.length){return aS[0][aR]?aS[0][aR]:ag(aS.slice(1),aR)}return az(aK.nativescope,aR)}function az(aS,aR){return z(aS,aR)}function H(aS){var aR;var aT=ac;var aU=t(ac,{});return function(){ac=aU;aR=aS.apply(arguments);ac=aT;return aR}}function R(aR){var aS;var aU;return function aT(aV){if(!aU){aU=ac}if(!aS){aS=aU[0]}if(arguments.length==1){aS[aR]=aV}return ag(aU,aR)}}function aC(aR){return function aS(aT){if(arguments.length==1){aR=aT}return aR}}function f(aT,aS){return function aR(aU){if(arguments.length==1){aT[aS]=aU}return aT[aS]}}function z(aT,aR){return function aS(aU){if(arguments.length==1){aT[aR]=aU}return Q(aT,aR)}}function Q(aS,aR){var aT=aS[aR];if(aT instanceof Object){if(aT.constructor==Array){return y(aT)}if(aT.constructor==Object){return ah(aT)}}if(typeof aT=="function"){return ao(aT)}return aT}function ao(aS){return function aR(aT){return aC(aS.apply(null,aT().map(U).map(U)))}}function y(aR){return aR.map(function(aT,aS){return z(aR,aS)})}function ah(aT){var aS={};var aR;for(aR in aT){aS[aR]=z(aT,aR)}return aS}function c(aS,aR){return function(){var aT=aS()();if(!aT){throw ("jam error: jam called a undefined function.")}if(typeof aT!="function"){throw ("jam error: jam called a not function.")}return aT(aR)}}function I(aR){return function(){return aR}}function v(aR){return aC(Array.prototype.slice.call(arguments,0))}function K(aR){return aR.slice(1)}function t(aS,aR){return[aR].concat(aS)}function au(){ac=t(ac,{})}function av(){ac=K(ac)}function b(aR){return aC(function(aS){return aR.apply(null,aS())})}function q(aR){return I(aR)}var aa=function(){return ah(aK.nativescope)};var n=q(true);var M=q(false);var D=q(null);var s=q(undefined);var aG=b(function(aS,aR){return aC(aS()===aR())});var af=b(function(aS,aR){return aC(aS()()===aR()())});var h=b(function(aR){return aC(aR()()===true)});var P=b(function(aR){return aC(aR()()===false)});var Z=b(function(aR){return aC(typeof aR()()==="boolean")});var l=b(function(aR){return aC(typeof aR()()==="number")});var W=b(function(aR){return aC(aR()()===null)});var J=b(function(aR){return aC(aR()()===undefined)});var aE=b(function(aR){return aC(!aR()())});var ab=b(function(aT){var aS;var aR=n();for(aS=0;aS<arguments.length;aS++){aR=arguments[aS]();if(!aR()){break}}return aR});var w=b(function(aT){var aS;var aR=n();for(aS=0;aS<arguments.length;aS++){aR=arguments[aS]();if(aR()){break}}return aR});var ad=b(function(aR){return I(aR)});var o=b(function(aR){return aR()});var E=b(function(aT){var aR=aT();var aU;var aS;for(aS=1;aS<arguments.length;aS++){aU=arguments[aS]();if(!(aR()<aU())){return M}aR=aU}return n});var ae=b(function(aT){var aR=aT();var aU;var aS;for(aS=1;aS<arguments.length;aS++){aU=arguments[aS]();if(!(aR()>aU())){return M}aR=aU}return n});var aN=b(function(aT){var aR=aT();var aU;var aS;for(aS=1;aS<arguments.length;aS++){aU=arguments[aS]();if(!(aR()<=aU())){return M}aR=aU}return n});var ax=b(function(aT){var aR=aT();var aU;var aS;for(aS=1;aS<arguments.length;aS++){aU=arguments[aS]();if(!(aR()>=aU())){return M}aR=aU}return n});var B=b(function(aS){var aR=aS();aR(aR()+1);return aR});var aH=b(function(aS){var aR=aS();aR(aR()-1);return aR});function aP(aS,aR,aT){return function(){var aW,aY,aV,aU,aX;aW=arguments;aY=aW.length||0;if(aR<=aY){aV=aT==null;aU=aV?aW[0]()():aT;aX=aV?1:0;while(aX<aY){aU=aS(aU,aW[aX]()()),aX++}return aC(aU)}throw ("jam error: too few arguments to a function.")}}var i=b(aP(function(aS,aR){return aS+aR},0,0));var aB=b(aP(function(aS,aR){return aS-aR},0,0));var aO=b(aP(function(aS,aR){return aS*aR},0,1));var k=b(aP(function(aS,aR){return aS/aR},1,null));var aQ=b(aP(function(aS,aR){return aS%aR},2,null));var e=b(function(aS){var aR=u(arguments,1);return aS()()?at()(I(aR)):D});var X=b(function(aS){var aR=u(arguments,1);return aS()()?D:at()(I(aR))});var C=b(function(aT,aS,aR){return aT()()?aS():aR()});var ak=b(function(aR,aS){return aR(aS())});var aq=b(function(aS,aT){var aR=aS();aR(aT()());return aR});var aw=b(function(aS){var aR=aS();console.log(aR());return aR});var G=b(function(aU){var aT={};var aS;for(aS=0;aS<arguments.length;aS+=2){var aR=arguments[aS];var aV=arguments[aS+1];aT[aR()()]=aV()()}return aC(aT)});var V=b(function(aR){return aC(u(arguments).map(U).map(U))});var T=b(function(aR){return aC(u(arguments))});var a=b(function(aR){return aC(Object.prototype.toString.call(aR()())===Object.prototype.toString.call([]))});var x=b(function(aS,aT){var aR=aT();aR().push(aS()());return aR});var aA=b(function(aS){var aR=aS()().shift();return aC(aR)});var ar=b(function(aU,aT){var aS=aU()();var aR=aT()();return f(aR,aS)});var g=b(function(aS,aU){var aT=aS()();var aR=aU()();return f(aR,aT)});var at=b(function(aR){return j(u(arguments).map(U))});var ai=b(function(aS){var aR=u(arguments,1);return aS()()(I(aR))});var aj=b(function(aS,aR){return aS()()(I(aR()().map(I)))});var p=b(function(aS){var aT=aS()();var aR=u(arguments,1);return H(b(function(aV){var aU;au();aM(aT,arguments);aU=at()(I(aR));av();return aU}))});var an=b(function(aS){var aT=u(arguments,1);var aR=p()(I(aT));return ak()(v(aS,I(aR)))});N={pop:aA,push:x,eq:aG,equal:af,"native":aa,">":ae,"<":E,">=":ax,"<=":aN,when:e,unless:X,"if":C,not:aE,and:ab,or:w,"true":n,"false":M,"null":D,"undefined":s,"true?":h,"false?":P,"null?":W,"undefined?":J,"bool?":Z,"list?":a,lazy:ad,force:o,setq:ak,setf:aq,print:aw,lambda:p,defun:an,funcall:ai,apply:aj,progn:at,object:G,list:V,lisy:T,get:ar,nth:g,"+":i,"-":aB,"*":aO,"/":k,"%":aQ,"++":B,"--":aH};ac=[aK.userscope,aK.standardscope,N];const O=function(){};const Y=function(){};const F=0;const L=1;const aI=2;1;function A(aX,aU){function aW(){switch(aU){case F:return aT(aX);case L:return aY(aX);case aI:return aS(aX);default:return D}}function aS(a0){var aZ=a0.indexOf(".");if(aZ==-1){return aV(a0)}return aR(a0)}function aV(aZ){return I(aC(parseInt(aZ)))}function aR(aZ){return I(aC(parseFloat(aZ)))}function aY(aZ){return I(aC(aZ))}function aT(aZ){return R(aZ)}return aW}function aF(aR){return new A(aR,F)}function aL(aR){return new A(aR,L)}function S(aR){return new A(aR,aI)}function am(a2){function a3(bc,bd){var be=[];while(0<bd--){be.push(bc.shift())}return be.join("")}function a5(bc,be){var bd;for(bd=0;bd<bc.length;bd++){if(be.indexOf(bc[bd])<0){break}}return a3(bc,bd)}function aY(bc,be){var bd;for(bd=0;bd<bc.length;bd++){if(0<=be.indexOf(bc[bd])){break}}return a3(bc,bd)}function a9(bd){var bc=aT(bd,1);var be=a3(bd,bc+1);return be.slice(1,-1)}function aT(bd,be){var bc=bd.indexOf('"',be);if(0<=bc&&bd[bc-1]=="\\"){return aT(bd,bc+1)}return bc}function aU(bc,bd){return bc[0]=="("}function ba(bc,bd){return bc[0]==")"}function a8(bc,bd){return 0<="1234567890".indexOf(bc[0])}function a4(bc,bd){return bc[0]=='"'}function a6(bc,bd){return true}function aV(bc,bd){return true}function a7(bc,bd){return 0<=" \t\n".indexOf(bc[0])}function aS(bc,bd){bc.shift();bd.push(O)}function bb(bc,bd){bc.shift();bd.push(Y)}function aX(bc,be){var bd=a5(bc,"1234567890.");be.push(S(bd))}function a1(bc,be){var bd=a9(bc);be.push(aL(bd))}function a0(bc,be){var bd=aY(bc,"( \t\n)");be.push(aF(bd))}function aW(bc,bd){bc.shift()}function aR(bc,bd){bc.shift()}function aZ(be,bg){var bc=bg.split("");var bf=[];while(0<bc.length){for(var bd=0;bd<be.length;bd++){if(be[bd][0](bc)){be[bd][1](bc,bf);break}}}return bf}return aZ([[a7,aW],[aU,aS],[ba,bb],[a8,aX],[a4,a1],[a6,a0],[aV,aR]],a2)}function r(aR){function aS(aU){var aV=[];while(0<aU.length){var aT=aU.shift();if(aT==O){aV.push(aS(aU))}else{if(aT==Y){break}else{aV.push(aT)}}}return aV}return aS(aR)}function d(aS){function aR(aW){var aV=aW[0];var aX=aW.slice(1);return c(aU(aV),I(aX.map(aU)))}function aU(aV){if(aV instanceof Array){return aR(aV)}return aV()}function aT(aV){return c(I(at),I(aV.map(aU)))}return aT(aS)}var al=am(aK.source);var ap=r(al);var ay=d(ap);if(aK.compileonly){return ay}return ay()};
