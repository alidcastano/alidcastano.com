---
title: (why? :lisp)
description: Exploring Lisp's parenthesis and operator placement; or, the merits of a uniform, treelike syntax.
quote: |
 Lisp is worth learning for the profound enlightenment experience you will have when you finally get it; that experience will make you a better programmer for the rest of your days, even if you never actually use Lisp itself a lot.
 <br>
 - Eric Raymond
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
{}
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

That leaves us with two parenthesis rather than three. But it's one more arbitrary rule we have to know for the sake of nicer syntax. 

You might still be wondering: couldn't we preserve the order of expression with something else, like new line characters?

Let's use a more complex example, a factorial program, in Ruby versus Clojure:

```
def factorial(n)
  if n == 1
    1
  else
    n * factorial(n - 1)
  end
end
```

```
(def factorial (n)
    (if (= n 1)
        1
        (* n (factorial (- n 1)))))
```

The first example is seven lines long, the second one is four. In the second example, however, with the parens jumbled up at the end, there’s more noise. But here’s what I didn't realize about parans before writing Lisp: there's wonderful editor support for them. From colorizing a pair of parans based on their nesting to connecting them with a line as you focus on their block of code. So, parans give you more control over the structure of your code and shorter programs, without the trade-offs you'd visually expect.

With Lisp, as you learn why its syntax is the way it is, your conception of nice syntax changes. The same way vegetables taste better once you associate their taste with health, parenthesis read better once you associate their presence with simplicity, and install a plugin for vscode that makes them visually appealing to look at.

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

In Lisp, the special form that lets you to build on top of the language itself is called a `macro`. You might ask, why doesn't my programming language have macros? But a better question is: if my language had macros, how easy would they be to use?

### (macroexpand 'defmacro)

What's special about Lisp isn't that it has macros for building on top of the language, but that its syntax is simple enough that you actually use them.

In other programming languages, syntax is more complex. Not only because it's less uniform, but because the code isn't represented the way it needs to be evaluated. While other programming languages toss around abstract syntax trees, in Lisp, your code is in the shape it has to be: a list of nested trees. 

That's in fact where the name, Lisp, originates. It's a list processing language, built for the purpose of transforming one list of code trees to another.

It's because of Lisp's syntax that you can unfold code in your mind the way it's unfolded by the compiler: recursively. No need to walk an entire tree of code to add special hooks to transform it. With Lisp macros, you can compose code transformations as standalone functions, and as you do so, you only need to handle the level of the code tree you're already thinking about. 

### (def simple)

So, what do I mean when I say Lisp is simple? I mean simple in that it uses parenthesis to order expressions rather than arbitrary rules; and simple in that an operation is listed first and its arguments after, because that's the way functions are used, and in Lisp, everything acts like a function. 

I mean simple in the sense that I couldn't help but smile while learning Lisp. In the moments where I realized a programming language could be built around such a small set of rules, and that such rules could be so logically transparent. 

While learning Lisp, I felt like a kid programmer again. With lots of questions about why syntax is the way it is and while my parent languages just said "Because," Lisp came around and actually explained itself to me. I'm sure the designers of my parent languages had reasons for their syntax, too; but they weren't evident to me while learning the language, whereas with Lisp its syntax is fundamental to learning to use it well. As Lispsers like to say, "code is data, and data is code."
