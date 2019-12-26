### (defmacro)

Simple, consistent, transparent

Why don't other programming languages build on top of themselves?

even if they did, they language extensions would be hard to do because more special forms the more rules you have to take into account.
complexity compounds
you need the language to be consistent.

In most programming languages, syntax is complex. Macros have to take apart program syntax, analyze it, and reassemble it. They do not have access to the program's parser, so they have to depend on heuristics and best-guesses. Sometimes their cut-rate analysis is wrong, and then they break.

But Lisp is different. Lisp macros do have access to the parser, and it is a really simple parser. A Lisp macro is not handed a string, but a preparsed piece of source code in the form of a list, because the source of a Lisp program is not a string; it is a list. And Lisp programs are really good at taking apart lists and putting them back together. They do this reliably, every day.
----

Once you understand that Lisp code is data (lists of atoms), you realize that you can use read to read in Lisp code as data. And since Lisp comes with a set of functions for elegantly processing lists, suddenly it's really easy to parse Lisp code.
https://jlongster.com/Lisp--It-s-Not-About-Macros,-It-s-About-Read

That should impress you. How would you do that in Python? Or Javascript? You need access to the AST and need to learn all the internal methods for parsing it. Lisp code is an AST.

Think of read like JSON.parse in Javascript. Except since Javascript code isn't the same as data, you can't parse any code with JSON.parse. In Lisp, it's all the same

So what are macros? All they are is read packaged up nicely into formal system. You can install macros as functions in the compiler. The compiler reads in the program as data, and "expands" it by parsing it and looking for macro calls. When it hits one, it passes the program source as data to your macro, and you can do whatever you want with it. 
---

(Macro-based DSLS  like templating engines)

homonoic
is homoiconic if a program written in it can be manipulated as data using the language, and thus the program's internal representation can be inferred just by reading the program itself. 
a Lisp program is written as a regular Lisp list, and can be manipulated by other Lisp code.[1] In homoiconic languages, all code can be accessed and transformed as data, using the same representation

Not just that it lets you build your own programming language on top, but that it's consistent and simple that you can.
