
# jam.js

jam.js is a functional programmng language with javascript.  
and its javascript function compiler.  
jam() compile and call the closure by inputted source code.  

jamはJavaScriptで実装された関数型言語です。  
地味にコンパイル型。  
コンパイルと言っても関数コンパイラです。  
用意されている関数jamにソースコードを与えてあげると、  
コードを解釈してJavaScriptで実行可能な関数を生成し、実行してくれます。  

```javascript
jam('(print "hello jam!")');
// hello jam!
```

if you want get the closure then  
add the options to second argument.  

ソースコードのみを与えてjamを実行した場合、  
コンパイルされた関数は実行され、実行結果が返り値となるため、生成された関数はロストします。  
もし、生成された関数が欲しい場合、例のように第二引数のオプションに{compileonly: true}を与えてあげることにより、
実行関数を受け取ることができます。

```javascript
jam('(print "hello jam!")', {compileonly: true});
// [function]
```

## documents

jams documents is here.  
[jam official documents](https://github.com/tikubonn/jam.js/wiki)  

## its prototype state.

jam is a prototype state.  
so its may be has any bug and problems.  
because i wrote in the mood for at that time.  
and jam is a byproducts that was born in attempt of closure.  
i need more thinking times for to simply the jam.  

ごめんなさいまだ未完成な言語なので、バグとかあると思います。  
まだ仕様が煮詰まってなかったり、大事なところを思い違いをしてたり。  
クロージャで遊んでた際に生まれた副産物で、最初から言語として書かれたものではないので、
少々無理のある仕様があるかも。
お気に召したら遊んでやってください。  

## license

this software is released under the MIT License.  
please see LICENSE.txt  

## todo

* add the some functions.

* prepare the methods that access to global or user defined scope.

* rebuild the scope management for async events.

* and etc...

