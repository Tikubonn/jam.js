
function jamrepl (){

  // attribute of jamarguments will be value of jam compiler optional argument.
  
  this.jamarguments = {};

  // those is event handler of repl.
  // the onerror will be call when got some errors in the JamREPL.
  // the jamerror will be call when got some errors in the jam().
  // the onload will be call if inputted source code was evaluatable.

  function onerrordefault (error){
    console.log("jam repl error: " + error);
  }

  function onjamerrordefault (error){
    console.log("jam error: " + error);
  }

  function onloaddefault (inversion){
    console.log("jam inputted: " + inversion());
  }

  function onprogress (queue){
    console.log("jam progress: " + queue.sources);
  }

  function oninput (queue){
    console.log("jam inputted: " + queue.source);
  }
  
  this.onerror = onerrordefault;
  this.onjamerror = onjamerrordefault;
  this.onload = onloaddefault;
  this.onprogress = onprogress;
  this.oninput = oninput;

  var root = this;
  var codeQueue = new CodeQueue();

  // codeQueue.onload = this.onload;
  // codeQueue.onerror = this.onerror;
  // codeQueue.onjamerror = this.onjamerror;

  // jam repl instance methods.
  // the put method evaluate some source that was inputted if it was able to evaluate.
  // the get method return the source codes that it was inputted.
  // the reset method remove the inputted source code.

  var put = handlecase(codeQueue.put);
  var get = handlecase(codeQueue.get);
  var reset = handlecase(codeQueue.reset);
  
  this.put = put;
  this.get = get;
  this.reset = reset;

  function handlecase (func){
    return function (){
      try {
        return func.apply(null, arguments);
      }
      catch (error){
        root.onerror(error);
        root.reset();
        return null;
      }
    };
  }

  function jamcall (){
    try {
      var evaluated = jam.apply(null, arguments);
      root.onload(evaluated);
    }
    catch (error){
      root.onjamerror(error);
    }
  }

  // define the checkers. it will check simply the syntax.
  // the code depth function count the code nestings, and update.
  // the code queue function will stack the inputted source codes,
  // and update the code depth object that have.
  
  function CodeDepth (){

    this.countString = 0;
    this.countBracket = 0;

    var parent = this;

    function reset (){
      parent.countString = 0;
      parent.countBracket = 0;
    }

    function isinvalid (){
      return parent.countBracket < 0;
    }

    function isprogress (){
      return 0 < parent.countBracket && 0 < parent.countString;
    }

    function isevaluatable (){
      return parent.countBracket == 0 && parent.countString == 0;
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

    function update (sourcecode){
      toend(Array.prototype.slice.call(sourcecode));
      return parent;
    }
    
    this.reset = reset;
    this.update = update;
    this.isinvalid = isinvalid;
    this.isprogress = isprogress;
    this.isevaluatable = isevaluatable;

  }

  function CodeQueue (){

    this.codeDepth = new CodeDepth();
    this.sources = "";
    this.source = "";

    // this.onerror = null;
    // this.onload = null;
    // this.onprogress = null;

    this.put = put;
    this.get = get;
    this.reset = reset;
    
    var parent = this;

    function put (source){

      try {

        parent.codeDepth.update(source);
        parent.source = source;
        parent.sources += "\n" + parent.source;
        
        root.oninput && root.oninput(parent);
        
        if (parent.codeDepth.isinvalid())
          throw ("jam repl error: invalid source code was detected on brackets.");
        
        if (parent.codeDepth.isprogress())
          root.onprogress && root.onprogress(parent);
        
        if (parent.codeDepth.isevaluatable()){
          jamcall(parent.sources, root.jamarguments);
          reset();
        }
      }

      catch (error){
        console.log(error);
        root.onerror && root.onerror(error);
        reset();
      }

    }

    function get (){
      return parent.source;
    }

    function reset (){
      parent.source = "";
      parent.sources = "";
      parent.codeDepth.reset();
    }
    
  }

}
