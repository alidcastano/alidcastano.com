---
title: (why? :lisp)
---

I used to see Lisp code and wonder, how could anyone read that? But instead, what I should have asked is: why would anyone write that? Because, as I've come to learn, developers who read lisp do so for the same reason they write it: it's easy to think in. 

It's ironic that this is the main appeal of Lisp. Its syntax is so unlike written English, which is what other programming languages try to model, that when you first read Lisp code, and glance over a file filled with heavily indented, terse statements wrapped in parenthesis, all your mind can think is, "what the hell he this?" 

But you should cherish this initial reaction to Lisp, because it sits at the core of what makes it enlightening to learn: it doesn't model other languages for the sake of familiarity; instead, Lisp is the result of thinking from first principles. And I don't say that in the Elon Musk change-the-world type of way. In fact, Lisp wasn't proposed as a programming language at first. When John McCarthy invented it in 1958, all he intended to do was define a formal model of computation for AI research. It wasn't until later that his student, Steve Russel, extended and implemented it as a programming language.

So what principles is Lisp based on?

I'd like to explore this question deductively, the same way I came to understand it. While learning Lisp, I'd wonder why its syntax had to be the way it is. The way you add two variables, for example, is `(+ x y)`, why can't it be `(x + y)` or even better `x + y`. Likewise, with conditional expressions, instead of `(and x y)` why can't it be `(x and y)` or even better `x and y`? 

These are in fact the two most glaring questions one has when learning Lisp:

1. Why are there so many parenthesis?

2. Why are operators out of their usual order?

As it turns out, the underlying answer to these two questions is the same.

### (why? :paren)

Let's start with parenthesis. Why must Lisp have so many if other programming languages manage with less?

Well, even that's not necessarily true. Other programming languages have the same amount of parenthesis, they're just situated differently.

Compare a conditional expression in Javascript (the language I was using before learning a Lisp) versus Clojure (the dialect of Lisp I chose to learn): 

```js
if (x) foo() 
else bar()
```

```clj
(if x (foo) (bar))
```

Both snippets have three pairs of parens. Except, to understand the code in Javascript, you need to know three arbitrary rules: after the `if` the condition is wrapped in parens; that next `else` statement has to be in a new line (that is, unless you surround each expression block in curly brackets); and finally, to call a function you place parens next to it. Whereas in Clojure you only need to know one rule: you place parenthesis around expressions in the order you want them to evaluated.

You see, parenthesis are essential to Lisp for the same reason their essential to math: they emphasize the order of expressions. Would you rather memorize arbitrary rules like PEMDAS (what's `2 + 3 + 4 * 5`?) or have one visual indication for the order in which expressions should run (what's `(2 + 3 + (4 * 5))`?). 

Now, my original example above wasn't exactly fair. There's a shorthand for conditional expression in Javascript, so the above snippet could be written like this:
```
condition ? foo() : bar()
```

So that leaves us with two parenthesis rather than three. But it's one more arbitrary rule we have to know for the sake of nicer syntax. Whereas Lisp, as you learn why its syntax is the way it is, your conception of nice syntax changes. The same way vegetables taste better once you associate their taste with health, parenthesis read better once you associate their presence with simplicity.

### (why? '(first args))

Along with considering the order in which expressions are run, we also have to consider the order in which operations and their arguments are listed.

Compare an addition expression in Javascript versus Clojure. 

```js
x + y + z
```

```clj
(+ x y z)
```

For most developers the first example is clearer since the plus sign is in-between the variables, just like it'd be in regular math. Whereas in the second example the plus sign is first and the variables are after. That's a consistent pattern in Clojure and other Lisp dialects because putting the operation first allows you to pass multiple arguments to it; and that's something you expect to do with functions. Which is in fact what algebraic operations like `+` are in Clojure: functions. 

All programming languages have special forms. A set of primitives the compiler needs to know how to specifically interpret, and thus special rules that you as a developer have to know. What's special about Clojure is that the only forms that are special are the ones that can't help but be it--and there are less than 20 of them; because Clojure, as a Lisp, builds on top of itself. 

The `if` statement, for example, is a special form because the compiler needs to be instructed to conditionally evaluate an expression; the `when` statement, on the other hand, doesn't have to be because it can be built of top of `if`.

In Lisp, the special form that lets you to build on top of the language itself is called a `macro`. You might ask, why doesn't my programming language have macros? But a better question is: if my language had macros, how easy would they be to use? Because most languages just aren't simple enough to build on top of themselves, so even if the functionality to do so is exposed, it isn't used. Not even by the language designers themselves.

### (def simple)

So what does it mean to say Lisp is simple? I mean simple in the sense that I couldn't help but smile while learning it. In the moments where I realized a programming language could be built out of a small set of rules, and that such rules could be so logically transparent. 

While learning Lisp I felt as if I was this a kid programmer with lots of questions about why things are the way they are and all my parent languages just said "Because," and then  Lisp came around and actually explained itself to me. The designers of my parent languages had their reasons too, sure; but they weren't evident to me while learning the language, whereas with Lisp they're fundamental to learning to use it well.

// code is list of data
