# jam.js
jam is a  functional programming language with javascript.  
jam() is return a closure by input source code.  

    << var closure = jam('(print "hello jam!")');
    << closure();
    >> hello jam!

jam is a prototype state. so prepared function is few, and code is very very messy.  
because some functions and variable's declarations on global scope and anythings ...  
may be it has any bug. so it is not yet practical for now.  

## ToDo
I want to rebuild the jam() and jam source code parser more simply, more usefully.  
asscess to the global or user maid scope.  
think about the new scope management.  
