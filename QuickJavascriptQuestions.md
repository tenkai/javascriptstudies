http://doppnet.com/2011/10/10-advanced-javascript-interview-questions/
=====

What are global variables? How are they declared? What are the problems with using globals?
====
* Global variables are available throughout your code: that is, the variables have no scope. 
* Local variables scope, on the other hand, is restricted to where it is declared (like within a function). The var keyword is used to declare a local variable or object, while omitting the var keyword creates a global variable.

Most JavaScript developers avoid globals. One reason why is they're averse to naming conflicts between local and globals, Also, code that depends on globals can be difficult to maintain and test.

	// Declare a local variable
	var localVariable = "TechRepublic"
	// Declare a global
	globalVariable = "CNet"
---

When would you use var in your declaration and when you wouldn’t?
===
Always use var. Not using var for variable declaration will traverse scopes all the way up till the global scope. If variable with that name is not found it will declare it in the global scope. Therefore not using var implicitly declares variable in the global scope (which, let me remind you, is a bad practice).

	(function() {
 	  baz = 5;
 	  var bar = 10;
	})();
 
	console.log(baz); // outputs 5
	//console.log(bar); // error: bar is not defined

A common mistake is to not use var in loops which might, in some cases, bear unexpected results or pollute the global scope:

	(function() {
   	 var baz = "Hello World";
   	 for(var bar=1; bar

Try it: http://jsfiddle.net/tnajdek/AKxn9/

---


What does the attribute defer/async do when added to the script tag?
===
The defer attribute will cause browser to execute script after the document has been parsed. This attribute was first implemented in Internet Explorer 4, then added to HTML 4 and more recently HTML 5 spec. You might not have heard of it as it has not been supported till version 3.5 (Gecko 1.9.2). Async is another attribute that can affect how a script is loaded and executed, here is a quote from HTML 5 spec on how this is expected to work:

> There are three possible modes that can be selected using these attributes. If the async attribute is present, then the script will be executed asynchronously, as soon as it is available. If the async attribute is not present but the defer attribute is present, then the script is executed when the page has finished parsing. If neither attribute is present, then the script is fetched and executed immediately, before the user agent continues parsing the page.
Note: A somewhat (but not exactly) similar defer behavior can be achieved by placing your script tags at the end of the body tag and that’s what is considered to be modern ‘best practice’

--------

What is the difference between == and ===? Which one would you use?
===
The equality (==) operator will compare for equality after doing necessary type casting, the identity operator (===) doesn’t do any conversions. A good practice suggested by Douglas Crockford is to always use strict equality,  couple of examples from Douglas’ book JavaScript: The Good Parts

	'' == '0'          // false
	0 == ''            // true
	0 == '0'           // true
 
	false == 'false'   // false
	false == '0'       // true
	 
	false == undefined // false
	false == null      // false	
	null == undefined  // true


---
How would you check if a variable is null/undefined?
===
	//check if bar is null
	bar === null
	//check if bar is undefined
	typeof bar === "undefined"
	
How do you check if a variable is an object
You can use typeof to determine if variable is an object, however bear in mind that null is actually an object! However null object is ‘falsy’ thus the following will work:

if(bar && typeof bar === "object") {
    console.log('bar is object and is not null');
}

***

How do you check if a variable is an object
===
You can use typeof to determine if variable is an object, however bear in mind that null is actually an object! However null object is ‘falsy’ thus the following will work:

	if(bar && typeof bar === "object") {
		console.log('bar is object and is not null');
	}

---

Discuss  scoping in JavaScript.
====

JavaScript has lexical scoping based on functions but not blocks. Therefore:

	//global scope
	(function() {
	    //anonymous function scope
	    var foo = 1;
	    function bar() {
	        //bar function scope
        var foo = 2;
	    }
	    bar();
	    console.log(foo); //outputs 1
	   	if(true) {
	   	 var foo = 3; //redeclares foo
	    }
	    console.log(foo); //outputs 3
	})();

Try it: http://jsfiddle.net/tnajdek/8y3XC/. Note: from within function scope everything in above scope(s) is available (see closures below)


-------


Explain hoisting in JavaScript.
===
As some might not be familiar with the term ‘hoisting’ yet have the relevant experience this question could be asked indirectly

In JavaScript function declarations ( function foo() {} ) and variable declarations ( var bar  ) are ‘hoisted’ i.e. are silently moved to the very top of the scope. Consider the following code:

	(function() {
	    console.log(bar); //returns 'undefined'
	    //console.log(baz) // error: baz is not defined
	    foo(); // outputs 'aloha' to the console
	 
	    //function declaration AND its body is hoisted
	    function foo() {
	        console.log('aloha');
	    }
	    //variable declaration is hoisted but value assignment 	stays here
	    var bar = 1;
	    baz = 2; //defines baz in global scope
	})();
	
See for yourself: http://jsfiddle.net/tnajdek/FxDrj/

----


What are closures?
=====
	(function() {
    	function foo(x) {
        	var baz = 3;
        	return function (y) {
	        console.log(x + y + (++baz));
    	    }
    	}
	var moo = foo(2); // moo is now a closure.
	moo(1); // 7
	moo(1); // 8!
	})();

The inner function inside foo will close-over the variables of foo before leaving creating a closure.

Try it: http://jsfiddle.net/tnajdek/Rj6mK/

---

Explain prototypal/differential inheritance
===
Conceptually this is very simple: A new object can inherit properties of an old object.

	(function() {
   		var genericObject = {
        	bar : "Hello World",
        	get_bar : function() {
        	    return this.bar;
        	}
    	};
	    var customObject = Object.create(genericObject);
	    customObject.bar = "Aloha folks!";
	    console.log(customObject.get_bar()); //outputs: 	"Aloha folks"
	    delete customObject.bar;
	    console.log(customObject.get_bar()); //fallbacks to the prototype's value, outputs: "Hello World"
	})();
	
While JavaScript has always been a prototype-oriented language, tools to work with prototypes were somewhat missing. Object.create used in the code snipped above has been added in ECMAScript 5 and has not been supported prior to Firefox 4, Chrome 5, IE 9

-----

What is Strict Mode in JavaScript
======
Strict Mode has been introduced as part of ECMAScript 5 and introduces new, restricted variant of JavaScript which has following aims:

*Throws errors for actions that are rather silly but previously didn’t throw an error
*Throws errors for potentially unsafe actions
*Disables functions that are poorly thought out
*Potentially code in strict mode could run faster by eliminating mistakes that would make it difficult for *JavaScript engines to perform optimizations

Strict mode can be enabled for the entire source file or on per function basis by adding a string literal “use strict” on top of the file/function i.e.

	function foo(){
	  "use strict";
	  // ... your code ...
	}
	
For more detailed information about the strict mode consult relevant article on MDN

