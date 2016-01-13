
function jamwebrepl (){

  var repl = new jamrepl();

  var print = defun(function (argument){
    var argumented = argument();
    var argumented2 = argumented();
    console.log(argumented2);
    printoutjam(argumented2);
    return argumented;
  });
  
  var userscope = {};
  var standardscope = {print: print};
  
  repl.jamarguments = {
    userscope: userscope,
    standardscope: standardscope
  };

  function onerror (error){
    printout(
      line(span("<b>repl error</b><br/>", "error"),
           span("" + error, "error")));
  }

  function onjamerror (error){
    printout(
      line(span("<b>jam error</b><br/>", "error"),
           span(error, "error")));
  }

  function onload (inversion){
    printoutjam(inversion());
  }

  repl.onload = onload;
  repl.onerror = onerror;
  repl.onjamerror = onjamerror;

  const beginningtext =
          
          '<span class="code">github:&ensp;<a target="_blank" href="https://github.com/tikubonn/jam.js">' +
          'https://github.com/tikubonn/jam.js</a></span><br/>' +
          '<span class="code">documents:&ensp;' +
          '<a target="_blank" href="https://github.com/tikubonn/jam.js/wiki">' +
          'https://github.com/tikubonn/jam.js/wiki</a></span><br/>' +
          "<b>jam REPL is trial environment for jam beginners.</b><br/>" +
          "sentences about the how to use since there.<br/>" +
          "first, type the some codes.<br/>" +
          "last, if finished the code inputting, you should press the enter.<br/>" +
          "jam read the it and run.<br/>" +
          "this repeat it forever.<br/>";

  const beginningerrortext =

          "<b>oops!</b><br/>" +
          "im sorry. could not continue processing of this REPL because it was gotten some error.<br/>" +
          "please contact us to http://twitter.com/tikubonn.";

  var form = document.getElementById("form");
  var input = document.getElementById("input");
  var readline = document.getElementById("readline");

  function line (argument){
    var line = document.createElement("li");
    line.className = "output";
    var index;
    for (index = 0; index < arguments.length; index++)
      line.appendChild(arguments[index]);
    return line;
  }

  function span (content, name){
    var span = document.createElement("span");
    span.innerHTML = content;
    span.className = name;
    return span;
  }

  function printout (argument){
    var index;
    for (index = 0; index < arguments.length; index++)
      form.insertBefore(arguments[index], input);
  }
  
  printout(line(span(beginningtext, "comment")));

  function onenter (){
    repl.put (readline.value);
    readline.value = "";
  }

  function ondown (){
    console.log("down");
  }

  function onup (){
    console.log("up");
  }

  function onkeypressed (event){

    switch (event.key){

    case "Enter":
      return onenter ();
      
    case "down":
      return ondown ();
      
    case "up":
      return onup ();

    default:
      return null;
    }
    
  }

  readline.addEventListener("keydown", onkeypressed);

  // define print method of REPL.
  // the print function will popup to ul#form before li#input.

  function inversion (value){
    return function (argument){
      if (arguments.length == 1)
        value = argument;
      return value;
    };
  }

  function defun (lambda){
    return inversion(function (argument){
      return lambda.apply(null, argument());
    });
  }

  function printoutjam (object){

    function onnumber (object){
      return span(object, "number");
    }

    function onstring (object){
      return span(object, "string");
    }

    function onfunction (object){
      return span("function", "function");
    }

    function onlist (object){
      var list = object.map(main2).join("&ensp;");
      return span("(&ensp;" + list + "&ensp;)", "list");
    }

    function onobject (object){
      
      var name;
      var source;
      var namevalues = [];
      for (name in object){
        source = html(span(":" + name, "name"));
        source += "&ensp";
        source += main2(object[name]);
        namevalues.push(source);
      }
      return span("{&ensp;" + namevalues.join("") + "&ensp;}", "object");
    }

    function onboolean (object){
      console.log(object);
      return span(object, "boolean");
    }

    function onnull (object){
      return span("null", "boolean");
    }

    function onundefined (object){
      return span("undefined", "boolean");
    }

    function main (object){

      if (object === null)
        return onnull(object);

      if (object === undefined)
        return onundefined(object);

      if (object === true)
        return onboolean(object);

      if (object === false)
        return onboolean(object);

      switch (object.constructor){

      case String:
        return onstring(object);

      case Number:
        return onnumber(object);

      case Function:
        return onfunction(object);

      case Array:
        return onlist(object);

      case Object:
        return onobject(object);

      // case Boolean:
      //   return onboolean(object);
      }

      return span("unknown", "unknown");
      
    }

    function html (dom){
      var temp = document.createElement("some");
      temp.appendChild(dom);
      return temp.innerHTML;
    }

    function main2 (object){
      return html(main(object));
    }
    
    return printout(line(main(object)));

  }
}

window.addEventListener("load", jamwebrepl);
