
# jam.js

jam.js is a functional programmng language with javascript.  
and its javascript function compiler.  
jam() compile and call the closure by inputted source code.  

    << jam('(print "hello jam!")');
    >> hello jam!

if you want get the closure then  
add the options to second argument.  

    << jam('(print "hello jam!")', {compileonly: true});
    >> [function]

## documents

jams documents is here.  
[jam official documents](https://github.com/tikubonn/jam.js/wiki)  

## its prototype state.

jam is a prototype state.  
so its may be has any bug and problems.  
because i wrote in the mood for at that time.  
and jam is a byproducts that was born in attempt of closure.  
i need more thinking times for to simply the jam.  

# todo

* add the some functions.

* prepare the methods that access to global or user defined scope.

* rebuild the scope management for async events.

* and etc...

