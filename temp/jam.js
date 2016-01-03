
// jam() is a jam programming language compiler.
// its get a argument that string source code or association object.
// if got argument is string then make the compiled closure and run it.
// else then its up to association options.

// options 
// source : compile with source code string
// sourcefile : compile with it locate (has not been implemented yet)
// cmpileonly : jam return the closure without call.
// standard : has not been implemented yet.
// standardscope : has not been implemented yet.

function jam ($jamarguments, $optional){

  // $standardscopedefault and $obarrays is
  // default scope and scope chain for now.

  var $standardscopedefault;
  var $obarrays;

  // end standard.
  // jam argument process
  // its procedure the jam()'s inputted arguments.

  const $jamargumentsdefault = {
    source: "",
    sourcefile: null,
    compileonly: false,
    standard: $standardscopedefault,
    standardscope: {}
  };
  
  var source;

  if (arguments.length == 2){
    source = $jamarguments;
    $jamarguments = $optional;
    $jamarguments.source = source;
  }

  else if (typeof $jamarguments == "string"){
    source = $jamarguments;
    $jamarguments = $jamargumentsdefault;
    $jamarguments.source = source;
  }
  
  $jamarguments.source = $jamarguments.source || $jamargumentsdefault.source;
  $jamarguments.sourcefile = $jamarguments.sourcefile || $jamargumentsdefault.sourcefile;
  $jamarguments.compileonly = $jamarguments.compileonly || $jamargumentsdefault.compileonly;
  $jamarguments.standard = $jamarguments.standard || $jamargumentsdefault.standard;
  $jamarguments.standardscope = $jamarguments.standardscope || $jamargumentsdefault.standardscope;

  // theare are main parsing and build processes.
  // and define the primitive functions and anythings.
  
  function call (lambda){
    return lambda();
  }

  function arraylast (array){
    return array[array.length - 1];
  }

  function arrayarguments (argument, index){
    return Array.prototype.slice.call(argument, index || 0);
  }

  function assignsymbols (symbols, values){
    arrayarguments(values).map (function (value, index){
      symbols[index] && symbols[index](value());
    });
  }

  function findobarrays (obarrays, name){
    if (0 < obarrays.length)
      return obarrays[0][name] ? obarrays[0][name] :
      findobarrays(obarrays.slice(1), name);
    return lazy(undefined);
  }

  function intern (name){
    var obarray;
    var obarrays;
    return function intern (argument){
      if (!obarrays)
        obarrays = $obarrays;
      if (!obarray)
        obarray = obarrays[0];
      if (arguments.length == 1)
        obarray[name] = argument;
      return findobarrays(obarrays, name);
    };
  }

  function inversion (value){
    return function inversion (argument){
      if (arguments.length == 1)
        value = argument;
      return value;
    };
  }
  
  function promisecall (argument, argument2){
    return function (){
      return argument()()(argument2);
    };
  }

  function lazy (argument){
    return function (){
      return argument;
    };
  }

  function list (argument){
    return inversion(Array.prototype.slice.call(arguments, 0));
  }

  // function for sequence operate.
  // poped and pushed is has not side effect.
  // there are return maid new sequence.

  function poped (array){
    return array.slice(1);
  }

  function pushed (array, item){
    return [item].concat(array);
  }

  // function of obarray
  // there functions has side effect to $obarrays.
  // there are old methods so will be remove.

  function pushobarray (){
    $obarrays = pushed($obarrays, {});
  }

  function popobarray (){
    $obarrays = poped($obarrays);
  }

  // defun and defvar
  // there are for define the jam functions.

  function defun (func){
    return inversion(
      function (argument){
        return func.apply(null, argument());
      });
  }

  function defvar (value){
    return lazy(value);
  }

  // primitive functions
  // there will calll for standards.

  var $lazy = defun (
    function (argument){
      return lazy(argument);
    });

  var $force = defun (
    function (argument){
      return argument();
    });

  var $add = defun (
    function (argument){
      var sum = argument()();
      var index;
      for (index = 1; index < arguments.length; index++)
        sum += arguments[index]()();
      return inversion(sum);
    });

  var $setq = defun (
    function (argument, value){
      return argument(value());
    });

  var $setf = defun (
    function (argument, value){
      argument()(value()());
      return argument();
    });

  var $print = defun (
    function (argument){
      var argumented = argument();
      console.log(argumented());
      return argumented;
    });

  var $list = defun (
    function (argument){
      return inversion(arrayarguments(arguments).map(call));
    });

  var $lisy = defun (
    function (argument){
      return inversion(arrayarguments(arguments));
    });

  var $nth = defun (
    function (sequence, index){
      var sequenced = sequence()();
      var indexed = index()();
      return sequenced[indexed];
    });

  var $progn = defun (
    function (argument){
      return arraylast(arrayarguments(arguments).map(call));
    });

  var $funcall = defun (
    function (argument){
      var rest = arrayarguments(arguments, 1);
      return argument()()(lazy(rest));
    });

  var $apply = defun (
    function (argument, argument2){
      return argument()()(lazy(argument2()().map(lazy)));
    });

  var $lambda = defun (
    function (argument){

      var argumenteds = argument()();
      var rest = arrayarguments(arguments, 1);

      return defun(
        function (argument){
          var result;
          pushobarray();
          assignsymbols(argumenteds, arguments);
          result = $progn()(lazy(rest));
          popobarray();
          return result;
        });
    });

  var $defun = defun (
    function (name){
      var rest = arrayarguments(arguments, 1);
      var lambda = $lambda()(lazy(rest));
      return $setq()(list(name, lazy(lambda)));
    });

  $standardscopedefault = {
    "lazy": $lazy,
    "force": $force,
    "setq": $setq,
    "setf": $setf,
    "print": $print,
    "lambda": $lambda,
    "defun": $defun,
    "funcall": $funcall,
    "apply": $apply,
    "progn": $progn,
    "list": $list,
    "lisy": $lisy,
    "nth": $nth,
    "+": $add
  };

  $obarrays = [{}, $jamarguments.standardscope, $standardscopedefault];

  // jam source code parsing
  // there are functions for procedure
  // of jam source code parse.

  const open = function (){};
  const close = function (){};

  const symbol = "symbol";
  const string = "string";
  const number = "number";

  function promise (value, type){

    this.value = value;
    this.type = type;

    var root = this;

    function forceint (value){
      return lazy(inversion(parseInt(value)));
    }

    function forcefloat (value){
      return lazy(inversion(parseFloat(value)));
    }

    function forcenumber (value){
      var index = value.indexOf(".");
      if (index == -1)
        return forceint(value);
      return forcefloat(value);
    }

    function forcestring (value){
      return lazy(inversion(value));
    }

    function forcesymbol (value){
      return intern(value);
    }

    function force (){
      switch (root.type){
      case symbol:
        return forcesymbol(root.value);
      case string:
        return forcestring(root.value);
      case number:
        return forcenumber(root.value);
      default:
        return lazy(null);
      }
    }

    this.force = force;

  }

  function makepromisesymbol (value){
    return new promise(value, symbol);
  }

  function makepromisestring (value){
    return new promise(value, string);
  }

  function makepromisenumber (value){
    return new promise(value, number);
  }

  function parse (source){

    function slice (line, index){
      var acc = [];
      while (0 < index--)
        acc.push(line.shift());
      return acc.join("");
    }

    function slicematch (line, match){
      var index;
      for (index = 0; index < line.length; index++)
        if (match.indexOf(line[0]) < 0)
          break;
      return slice(line, index);
    }

    function sliceunmatch (line, unmatch){
      var index;
      for (index = 0; index < line.length; index++)
        if (0 <= unmatch.indexOf(line[index]))
          break;
      return slice(line, index);
    }

    function slicedoublequote (line){
      var end = enddoublequote(line, 1);
      var sliced = slice(line, end + 1);
      return sliced.slice(1, -1);
    }

    function enddoublequote (line, index){
      var end = line.indexOf('"', index);
      if (0 < end && line[end - 1] == "\\")
        return enddoublequote(line, end + 1);
      return end;
    }

    function openp (line, acc){
      return line[0] == "(";
    }

    function closep (line, acc){
      return line[0] == ")";
    }

    function nump (line, acc){
      return 0 <= "1234567890".indexOf(line[0]);
    }

    function strp (line, acc){
      return line[0] == '"';
    }

    function symp (line, acc){
      return true;
    }

    function ignorep (line, acc){
      return line[0] == " ";
    }

    function onopen (line, acc){
      line.shift();
      acc.push(open);
    }

    function onclose (line, acc){
      line.shift();
      acc.push(close);
    }

    function onnum (line, acc){
      var value = slicematch(line, "1234567890.");
      acc.push(makepromisenumber(value));
    }

    function onstr (line, acc){
      var value = slicedoublequote(line);
      acc.push(makepromisestring(value));
    }

    function onsym (line, acc){
      var value = sliceunmatch(line, "( )");
      acc.push(makepromisesymbol(value));
    }

    function onignore (line, acc){
      line.shift();
    }

    function main (cases, source){

      var line = source.split("");
      var acc = [];

      while (0 < line.length){
        for (var i = 0; i < cases.length; i++){
          if (cases[i][0](line)){
            cases[i][1](line, acc);
            break;
          }
        }
      }

      return acc;

    }

    return main ([
      [ignorep, onignore],
      [openp, onopen],
      [closep, onclose],
      [nump, onnum],
      [strp, onstr],
      [symp, onsym]
    ], source);

  }

  function build (context){

    function build (context){
      var acc = [];
      while (0 < context.length){
        var poped = context.shift();
        if (poped == open) acc.push(build(context));
        else if (poped == close) break;
        else acc.push(poped);
      }
      return acc;
    }

    return build(context);

  }

  function build2 (context){

    function build2seq (context){
      var index = context[0];
      var rest = context.slice(1);
      return promisecall (
        build2in(index),
        lazy (rest.map(build2in))
      );
    }

    function build2in (context){
      if (context instanceof Array)
        return build2seq(context);
      return context.force();
    }

    function build2 (context){
      return promisecall(
        intern("progn"),
        lazy (context.map(build2in)));
    }

    return build2(context);

  }

  var parsed = parse($jamarguments.source);
  var builded = build(parsed);
  var builded2 = build2(builded);

  if ($jamarguments.compileonly)
    return builded2;
  return builded2();
}