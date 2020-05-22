---
title: Let code be terse
description: The merits of standardized computer slang.
metaImage: chalkboard-teach.jpg

twitter: status/1213525539157397504
hackernews: item?id=21956551
---

When I hear the word "terse", I tend to associate it with a negative meaning. With programming, specifically, I think of code that's not only heavily abbreviated, but hard to understand.

The definition of terse, however, reads positively:

```
using few words : devoid of superfluity
```

Shouldn't it be good for a programming language not to have superfluous syntax? So why do we tend to dislike terse code? 

Examine, for example, the snippet of code below: 

```js
for (let i = 0; i < arr.length - 1; i++) { /* TODO */ }
```
Any programmer familiar with Javascript, Java, or C++ (which most are), can read the above code and immediately know what's happening. The `for` indicates we're iterating some collection, and so in that context it's clear that `i` stands for index and `arr` for array. In fact, in these languages, when we're iterating a list, it's idiomatic to use `i` for the index variable. The operation is used often so it's useful to have a shorthand for it. 

So there's already situations where we accept terse syntax--when functionality is expected to be well-known. We don't just do it to save typing, but to make code easier to read. Your mind can fill in the meaning of variable's name faster than you can read it, so making it any longer than it has to be is distracting.

How about this next line of code in Clojure: 

```clj
(assoc m k v)
```

If you're not familiar with Clojure or functional programming, I imagine the above code is hard to understand. For Clojurist, however, it reads plainly: `assoc` stands for `associate`, `m` for map, `k` for key, and `v` for value; the expression returns a map with the newly associated key-value pairs. This sort of functionality is well-known in Clojure so abbreviations help short circuit understanding.

What learning Clojure helped me realize, is that often when we fell code terse code is cryptic, it's because we don't know its language well enough. We can't help but judge it at the surface level--you need the fingerprints of the language ingrained in your mind to be able to decode its meaning.

### (measure :lang)

So is it better for code to be more or less terse? How do you measure a programming language? In a [hackernews post announcing Bel](http://paulgraham.com/bel.html), a Lisp dialect Paul Graham has been working on, he was asked what problem his language intended to solve. He responded:

> I think the point of a high-level language is to make your programs shorter. All other things (e.g. libraries) being equal, language A is better than language B if programs are shorter in A.

There's various factors that go into making code shorter, such as [the simplicity of the syntax](/lisp) and type of abstractions we create. But front and center to all that is the names we give our code. Terse names, where appropriate, help to pack more meaning into a program.

Code, after all, is an evolving language. We come to understand it based upon mutually understood words and functions, but overtime, we make it shorter--with slang. Programming syntax is standardized computer slang. Some is universally known amongst programmers, some only exists in certain programming languages or styles or programming, and even less known are those which are specific to libraries and applications themselves. 

As the standard, a programming language should be as terse as possible. Such terse code might be harder to read at first glance, but a program shouldn't be written for someone who'll superficially look at it, but for someone who'll take the time to fully understand it and [hold it in their head](http://www.paulgraham.com/head.html). So, rather than embracing readability, embrace succinctness.

What's wonderful about a computer is it'll speak any language you throw at it so long as the code compiles. So, runtime errors aside, the ultimate test of your code is the program itself. You don't have to convince a programmer to read your code if your application already motivates them for you.

So, it's worth asking, what sort of code will help you create applications worth running? It's takes lots of iteration to arrive at a good idea, so personally, I want a language that's as close to my thoughts as possible. That, I believe, is the appeal of terse code: it's closer to scribbles written to preserve a thought than prose written to transmit an idea; as I write it, I can turn my scribbles of code into eloquent programs!

