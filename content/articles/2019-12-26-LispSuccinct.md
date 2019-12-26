---
title: (p2 (why? :lisp))
---

### (is simple :easy-thinking)

Is the simplicity of language alone a good enough measure to whether it's simple to think in?

There's actually one more contention developers usually have with Lisp that I've yet to address: why is the naming of the code so terse?

Let me ask you this first. In a Javascript for loop, why do developers name the looping variable `i`?

```
for (let i = 0; i < arr.length; i++) { /**/ }
```

When you read the above code you fill in the variable names yourself. You 
can infer that `i` is an integer and `arr` is an array. These abbreviations happen to be used across many languages, from C++ to Ruby to Javascript, so they're mutually understood amongst programmers. But there's also abbreviations that are idiomatic to certain styles of programming, and even to programming languages themselves.

Take this expression in Clojure: 

```
(assoc m k v)
```

To someone not familiar with Clojure or functional programming this code is terse; but if they are familiar with it, the code is succinct. `assoc` stands for `associate`, `m` for map, `k` for key, and `v` for value; the expression returns a new map with the newly associated key-value pairs. This functionality is well known amongst Clojurist, which is why they prefer these shorthands.

Our understand of code is based upon mutually understood words; but overtime, like an evolving language, we make it shorter, with slang. 

A programming language is standerdized computer slang. Once the core terminology is conceptualized, it becomes tedious to write it out completely. Not just because of extra typing, but because verbose language clutters thinking. Shorter syntax frees up space for more thought.

### (def succinct)

A statement is succinct if it can't be shortened without losing meaning. Likewise, a programming language is succinct if the program can't be shortered further without losing functionality.

A programming language should be as succinct as possible. Because the more code you can see at once, the more of your program you can [hold in your head](http://www.paulgraham.com/head.html). 

A succinct program, of course, isn't just made up of concise syntax, but powerful tools for abstraction. 

Lisp has more abbreviations than other programming languages because it encourages you to build your own language on top of it, so there's more meta languages you have to account for. Sitting at the top, in fact, is the abbreviations you use to model your application.

Succinctness, of course, makes it harder for another programmer to understand your code at first glance. But your program shouldn't be written for someone who'll superficially look at it, but for someone who'll take the time to understand it in its entirety. 

### (is (merge simple succinct) :easy-thinking)

As a goal, a programming language should be closer to thinking than writing; like the scribbles you write for yourself when trying to preserve a thought rather than the prose you write for others when trying to transmit an idea. 
Because what's wonderful about computers is that they'll speak any language you throw at them as long as the code compiles. So, runtime errors aside, the ultimate test of your code is the program itself. You don't have to convince programmers to understand your code if the merits of your program already do that for you.

So, above all, a programming language should make it easy to ideate. To scribble a thought down in code, expand on it, reword it, and refactor it.  
Repeating this process multiple times, not just until the program is in working form but until the idea itself is worth running.

And that, in turn, is why I'm gratified to be learning a Lisp dialect. The language is simple, so I can understand its ins-and-outs and build my own application language on top of it; and it's succinct, so I can hold the program in my head and manipulate it at will. After more than four years of programming, I finally feel like I can turn scribbles of code into eloquent programs.


