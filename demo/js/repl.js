
function REPL (){
  
  const beginningtext =
          
          '<span class="code">github:&ensp;<a target="_blank" href="https://github.com/tikubonn/jam.js">https://github.com/tikubonn/jam.js</a></span><br/>' +
          '<span class="code">documents:&ensp;<a target="_blank" href="https://github.com/tikubonn/jam.js/wiki">https://github.com/tikubonn/jam.js/wiki</a></span><br/>' +
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

  // define print method of REPL.

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
        source = domgenerated(span(":" + name, "name"));
        source += "&ensp";
        source += main2(object[name]);
        namevalues.push(source);
      }
      return span("{&ensp;" + namevalues.join("") + "&ensp;}", "object");
    }

    function onboolean (object){
      return span(object.toString(), "boolean");
    }

    function onnull (object){
      return span("null", "boolean");
    }

    function onundefined (object){
      return span("null", "boolean");
    }

    function main (object){

      if (object === null)
        return onnull(object);

      if (object === undefined)
        return onundefined(object);

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

      case Boolean:
        return onboolean(object);
      }

      return span("unknown", "unknown");
      
    }

    function domgenerated (dom){
      var temp = document.createElement("some");
      temp.appendChild(dom);
      return temp.innerHTML;
    }

    function main2 (object){
      return domgenerated(main(object));
    }
    
    return printout(line(main(object)));

  }

  var print = defun(function (argument){
    var argumented = argument();
    var argumented2 = argumented();
    console.log(argumented2);
    printoutjam(argumented2);
    return argumented;
  });

  var standardscope = {print: print};
  var userscope = {};

  function CodeDepth (){

    this.countString = 0;
    this.countBracket = 0;

    var parent = this;

    function reset (){
      parent.countString = 0;
      parent.countBracket = 0;
    }

    function togglecountstring (){
      parent.countString = (1 + parent.countString) % 2;
    }
    
    function toend (stream){

      if (parent.countString == 1)
        toendstring(stream);
      
      while (0 < stream.length){

        var char = stream.shift();
        
        switch (char){
          
        case '"':
          togglecountstring();
          toendstring(stream);
          break;

        case '(':
          parent.countBracket ++;
          break;

        case ')':
          parent.countBracket --;
          break;
          
        }
      }
    }

    function toendstring (stream){

      while (0 < stream.length){

        var char = stream.shift();

        switch (char){

        case '"':
          togglecountstring();
          return;

        case '\\':
          stream && stream.shift();
          break;

        }
        
      }
      
    }

    this.reset = reset;

    this.update = function (sourcecode){
      toend(Array.prototype.slice.call(sourcecode));
      return parent;
    };
    
  }

  function CodeQueue (){

    this.codeDepth = new CodeDepth();
    this.source = "";

    var parent = this;

    this.enque = function (sourcecode){

      parent.codeDepth.update(sourcecode);

      if (parent.codeDepth.countBracket < 0){
        parent.source = "";
        parent.codeDepth.reset();
        printout(
          line(span("<b>error on repl</b><br/>", "error"),
               span("illegal source code was detected on the brackets.", "error")));
        return null;
      }

      if (parent.codeDepth.countBracket == 0 &&
          parent.codeDepth.countString == 0){
        sourcecode = parent.source + "\n" + sourcecode;
        parent.source = "";
        return sourcecode;
      }

      else {
        parent.source += "\n" + sourcecode;
        return null;
      }

    };
    
  }

  function rangespace (range){
    var space = "";
    while (0 < range--) space += "  ";
    return space;
  }

  function rangeenspace (range){
    var space = "";
    while (0 < range--) space += "&ensp;";
    return space;
  }

  function scrolltoend (){
    window.scroll(0, window.innerHeight);
  }

  function indenttoescaped (string){
    var index;
    for (index = 0; index < string.length; index++)
      if (string[index] != " ")
        break;
    return rangeenspace(index) + string.slice(index);
  }

  var codeQueue = new CodeQueue();

  function onpressed (event){

    function onenter (){

      printout(line(span(indenttoescaped(readline.value), "code")));
      scrolltoend();

      var source = codeQueue.enque(readline.value);

      if (source){
        try {
          var result = jam(source, {standardscope: standardscope, userscope: userscope});
          result && console.log(result());
          result && printoutjam(result());
        }
        catch (error){
          console.log(error);
          printout(
            line(span("<b>error on jam</b></br>", "error"),
                 span("some error on jam compiled.<br/>" + error, "error")));
        }
      }

      readline.value = "";
      readline.value += rangespace(codeQueue.codeDepth.countBracket);
      readline.value += rangespace(codeQueue.codeDepth.countString);
      
    }

    switch (event.key){
      
      case "Enter":
        return onenter();

      default:
        return null;
    }
    
  }

  readline.addEventListener("keydown", onpressed);
  
  
}

window.addEventListener("load", REPL);

// function REPL (){

//   var form = document.getElementById("form");
//   var input = document.getElementById("input");
//   var readline = document.getElementById("readline");

//   function inputonkeydown (event){

//     function onreturnkey (){
//       // printout(makeline(maketext(readline.value, "code")));
//     }

//     switch (event.key){
      
//       case "Enter":
//         return onreturnkey();

//       default:
//         return null;
//     }

//   }

//   input.addEventListener("keydown", inputonkeydown);

//   function makeline (dom){
//     var li = document.createElement("li");
//     li.className = "output";
//     li.appendChild(dom);
//     return li;
//   }

//   function maketext (value, cname){
//     var span = document.createElement("span");
//     span.className = cname;
//     span.innerHTML = value;
//     return span;
//   }

//   function printout (dom){
//     form.insertBefore(dom, input);
//   }

// };

// window.addEventListener ("load", REPL);
