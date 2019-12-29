---
title: (p2 (Why? :lisp))
description: Exploring lisp's terseness; or, the merits of computer slang.
draft: true
---

In my [last essay](/lisp-simple), I explored why I've enjoyed learning Lisp: the realization that the seemingly excessive parenthesis and unusual operator placements are features, not bugs, of the language; intended towards establishing a uniform, treelike syntax for building on top of the language itself with macros.

There's one more contention, however, that programmers usually have with Lisp I've yet to address: why is the code so terse? 

### (def terse)

When I hear the word "terse", I tend to associate it with a negative meaning. When it's used to describe code, for example, I think of code that's not only heavily abbreviated, but also hard to understand.

The definition of terse, however, reads positively:

```
using few words : devoid of superfluity
```

I'd deem it good for a programming language not to have superfluous syntax. So why do we tend to dislike terse code? 

Take, for example, the snippet of code below: 

```js
for (let i = 0; i < arr.length - 1; i++) { /* TODO */ }
```
Most of us programmers have experience with Javascript, Java, or C++. So when we read the above line, we immediately know what the abbreviated variables stand for. the `for` makes it clear that we're initiating a for loop, and so in that context it's clear that `i` stands for index and `arr` for array.

In fact, when iterating a list, it's idiomatic to use `i` as the index. Since these operations are done so often it's useful to have shorthands for them. I used to think this was done to save typing, but the actual reason extends beyond laziness: shorter syntax aids understanding. When you're already familiar with a snippet of code your mind will fill in the variable names faster than you can read them, so making them any longer than they have to be is distracting.

How about this next snippet of code in Clojure: 

```clj
(assoc m k v)
```

How easy is it to understand what's happening? If you're not familiar with Clojure or functional programming, I imagine the above code is not just terse, but cryptic. You don't yet have the fingerprints of the language ingrained in your mind to decode what the code is doing.

For Clojurist, however, the above snippet reads plainly. `assoc` stands for `associate`, `m` for map, `k` for key, and `v` for value; the expression returns a map with the newly associated key-value pairs. This sort of functionality is common in Clojure so abbreviating the words packs more meaning into the program.

Abbreviation, in that way, is like abstraction. In places where functionality is commonly used, shortening its syntax pays for itself with more understanding. 

In Lisp, the terseness of the syntax extends further. Because with macros, there's more meta languages you have to account for. Sitting at the top, in fact, is the language you use to model your applications.

### (measure :lang)

In a [hackernews post announcing Bel](http://paulgraham.com/bel.html), a Lisp dialect Paul Graham has been working on, he was asked what problem his language intended to solve. He responded:

> I think the point of a high-level language is to make your programs shorter. All other things (e.g. libraries) being equal, language A is better than language B if programs are shorter in A. (As measured by the size of the parse tree, obviously, not lines or characters.) 

In the above quote, Graham was talking specifically in regards to abstraction. But abstraction and abbreviation go hand in hand. Code, after all, is an evolving language. We come to understand it based upon mutually understood words and functions; but overtime, we make it shorter, with slang. A programming language is standardized computer slang. 

So, as the standard, we should want our programming language to be as terse as possible. With powerful abstractions, of course, but also concise variables for referring to them. Because the shorter your program, the more code you can see at once; and the more code you can see at once, [the more of your program you can hold in your head](http://www.paulgraham.com/head.html).

### (is (merge simple terse) :easy-thinking)

What's wonderful about a computer, is that it'll speak any language you throw at it so long as the code compiles. So, runtime errors aside, the ultimate test of your code is the program itself. You don't have to convince a programmer to read your code if your application already does that for you.

The goal of a programming language, then, is to help you create applications worth running. It takes lots of iteration to arrive at a good idea so, ideally, a language would be as as close to your thoughts as possible.

And that, I propose, is the appeal of Lisp. Along with being simple, it's terse. Which, compared to other programming languages, makes it closer to thinking than writing--like scribbles written to preserve a thought rather the prose written to transmit an idea. I'm pleased to be learning Lisp because, after more than four years of programming, I finally feel like I can turn my scribbles of code into an eloquent program.

