function jam(e,x){var W;var Z;const b={source:"",sourcefile:null,compileonly:false,standard:W,standardscope:{}};var v;if(arguments.length==2){v=e;e=x;e.source=v}else{if(typeof e=="string"){v=e;e=b;e.source=v}}e.source=e.source||b.source;e.sourcefile=e.sourcefile||b.sourcefile;e.compileonly=e.compileonly||b.compileonly;e.standard=e.standard||b.standard;e.standardscope=e.standardscope||b.standardscope;function d(aa){return aa()}function Q(aa){return aa[aa.length-1]}function n(ab,aa){return Array.prototype.slice.call(ab,aa||0)}function m(ab,aa){n(aa).map(function(ad,ac){ab[ac]&&ab[ac](ad())})}function S(ab,aa){if(0<ab.length){return ab[0][aa]?ab[0][aa]:S(ab.slice(1),aa)}return a(undefined)}function E(ab){var aa;var ac=Z;var ad=U(Z,{});return function(){Z=ad;aa=ab.apply(arguments);Z=ac;return aa}}function J(aa){var ab;var ad;return function ac(ae){if(!ad){ad=Z}if(!ab){ab=ad[0]}if(arguments.length==1){ab[aa]=ae}return S(ad,aa)}}function j(aa){return function ab(ac){if(arguments.length==1){aa=ac}return aa}}function t(ab,aa){return function(){return ab()()(aa)}}function a(aa){return function(){return aa}}function u(aa){return j(Array.prototype.slice.call(arguments,0))}function T(aa){return aa.slice(1)}function U(ab,aa){return[aa].concat(ab)}function p(){Z=U(Z,{})}function o(){Z=T(Z)}function V(aa){return j(function(ab){return aa.apply(null,ab())})}function q(aa){return a(aa)}var h=V(function(aa){return a(aa)});var I=V(function(aa){return aa()});var R=V(function(ac){var ab=ac()();var aa;for(aa=1;aa<arguments.length;aa++){ab+=arguments[aa]()()}return j(ab)});var G=V(function(aa,ab){return aa(ab())});var M=V(function(aa,ab){aa()(ab()());return aa()});var w=V(function(ab){var aa=ab();console.log(aa());return aa});var F=V(function(aa){return j(n(arguments).map(d))});var C=V(function(aa){return j(n(arguments))});var g=V(function(ad,ab){var aa=ad()();var ac=ab()();return aa[ac]});var f=V(function(aa){return Q(n(arguments).map(d))});var r=V(function(ab){var aa=n(arguments,1);return ab()()(a(aa))});var A=V(function(ab,aa){return ab()()(a(aa()().map(a)))});var c=V(function(ab){var ac=ab()();var aa=n(arguments,1);return E(V(function(ae){var ad;p();m(ac,arguments);ad=f()(a(aa));o();return ad}))});var z=V(function(ab){var ac=n(arguments,1);var aa=c()(a(ac));return G()(u(ab,a(aa)))});W={lazy:h,force:I,setq:G,setf:M,print:w,lambda:c,defun:z,funcall:r,apply:A,progn:f,list:F,lisy:C,nth:g,"+":R};Z=[{},e.standardscope,W];const y=function(){};const P=function(){};const l="symbol";const k="string";const X="number";function L(ah,ae){this.value=ah;this.type=ae;var ag=this;function ab(aj){return a(j(parseInt(aj)))}function ac(aj){return a(j(parseFloat(aj)))}function af(ak){var aj=ak.indexOf(".");if(aj==-1){return ab(ak)}return ac(ak)}function ai(aj){return a(j(aj))}function ad(aj){return J(aj)}function aa(){switch(ag.type){case l:return ad(ag.value);case k:return ai(ag.value);case X:return af(ag.value);default:return a(null)}}this.force=aa}function D(aa){return new L(aa,l)}function B(aa){return new L(aa,k)}function i(aa){return new L(aa,X)}function s(aj){function ak(au,av){var aw=[];while(0<av--){aw.push(au.shift())}return aw.join("")}function am(au,aw){var av;for(av=0;av<au.length;av++){if(aw.indexOf(au[0])<0){break}}return ak(au,av)}function af(au,aw){var av;for(av=0;av<au.length;av++){if(0<=aw.indexOf(au[av])){break}}return ak(au,av)}function aq(av){var au=ab(av,1);var aw=ak(av,au+1);return aw.slice(1,-1)}function ab(av,aw){var au=av.indexOf('"',aw);if(0<au&&av[au-1]=="\\"){return ab(av,au+1)}return au}function ac(au,av){return au[0]=="("}function ar(au,av){return au[0]==")"}function ap(au,av){return 0<="1234567890".indexOf(au[0])}function al(au,av){return au[0]=='"'}function an(au,av){return true}function ao(au,av){return au[0]==" "}function aa(au,av){au.shift();av.push(y)}function at(au,av){au.shift();av.push(P)}function ae(au,aw){var av=am(au,"1234567890.");aw.push(i(av))}function ai(au,aw){var av=aq(au);aw.push(B(av))}function ah(au,aw){var av=af(au,"( )");aw.push(D(av))}function ad(au,av){au.shift()}function ag(aw,ay){var au=ay.split("");var ax=[];while(0<au.length){for(var av=0;av<aw.length;av++){if(aw[av][0](au)){aw[av][1](au,ax);break}}}return ax}return ag([[ao,ad],[ac,aa],[ar,at],[ap,ae],[al,ai],[an,ah]],aj)}function N(aa){function ab(ad){var ae=[];while(0<ad.length){var ac=ad.shift();if(ac==y){ae.push(ab(ad))}else{if(ac==P){break}else{ae.push(ac)}}}return ae}return ab(aa)}function Y(ab){function aa(af){var ae=af[0];var ag=af.slice(1);return t(ad(ae),a(ag.map(ad)))}function ad(ae){if(ae instanceof Array){return aa(ae)}return ae.force()}function ac(ae){return t(J("progn"),a(ae.map(ad)))}return ac(ab)}var K=s(e.source);var H=N(K);var O=Y(H);if(e.compileonly){return O}return O()};