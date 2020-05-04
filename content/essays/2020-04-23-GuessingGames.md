---
title: Let's stop the guessing games
description: Documenting code to save cognitive effort.
quote: | 
   Just as inviting people over forces you to clean up your apartment, writing something that other people will read forces you to think well.
   <br> - Paul Graham
---

Reading code sometimes feels like a guessing game. I read a function's name and try and guess what it does and why it's necessary. If my hunch feels off, I glance over its arguments and body, maybe even search its name throughout the codebase to see how it's used. Then I read more code, repeating the above process as necessary, until I feel I understand the code I'm working with well enough.

As I write this, it doesn't sound like the most fool-proof process. But if the code is well-written, it works surprisingly well. In fact, that's a measure of well-written code: how well does it explain itself? 
But there's a caveat to this self-explanation. It's standard practice to not clutter code with comments that duplicate what the code itself can explain. The assumption there being that the only benefit to documentation is to explain what the code itself can't. 

But there's another purpose to documentation that I've started valuing more: to save cognitive effort. 

## (cache :usage)

Reading code demands more cognitive effort than reading prose. So even if a function's usage can be inferred from its code, it's still useful to include a brief explanation of it.

Think of good documentation as an effort cache. You already computed the usage of a function as you wrote it, explaining that usage in prose saves someone else from expending that same effort. They'll still need to read the code when fixing bugs or adding features, but they won't need to do so unnecessarily, such as when taking a cursory glance at the codebase. 

I'd go as far as to say it's worth documenting every function. Ideally, it'd be as required, on a per function basis. But that rarely works in practice, at least not for me, because it's hard to access how understandable some code is once you're familiar with it (the   curse of knowledge, science says); though, even if it was obvious which functions merit documentation, it feels inconsistent to add it to some but not others (programmer OCD, perhaps). I imagine most devs feel the same way by the looks of codebases: public functions have abundant documentation, implementation details have almost none at all. It's as if we need some way to segment how we document code; that is, unless we don't segment it at all: let's document every function.

You'll likely be wary of repetitiveness when you first try this. I, too, felt resistant when started documenting for every function. I think a lot of devs have been scarred by their days reading over-embellished documentation formats. The first time I saw a [JSDoc comment](https://en.wikipedia.org/wiki/JSDoc), I vowed to never over-document my code again. 

As an example, below is how a function I wrote recently would look in Javascript with a JSDoc comment: 

```js
/**
* Create environment unique id.
* @param {string} id - identifier key.
* @param {string} env - environment key.
* @return {string} environment unique id.
*/
function eid(id, env) {
  return `${id}-${env}`
}
```

The solution, however, is simple: don't use an an over-embellished documentation format. Documentation should read like prose!

## (into prose (doc [name args body])) 

There'll always be overlap between a function's name, arguments and, body and what's included in its doc. The trick to reducing this, is to make its description read as a sentence.

I find the following description format useful: 

`<Verb><Describe Output><Transition><Describe Inputs>`

Along with using special markup tags and shorthands:

- Backticks for arguments. (e.g. \`id\`)
- Curly brackets for types (e.g. {string})
- Square brackets for references (e.g. [my-function])
- Dashes for possession prepositions (e.g. client/id)

The above documentation snippet, for example, becomes:

```js
/* Create an environment unique id based on `id` {string} and `env` {string}. */
function eid(id, env) {
  return `${id}-${env}`
}
```

As shown above, rather than a blocky format that takes up more space than the function body itself, you have a brief description that's easy to read or scan for meaning.

Though, admittedly, documenting code in Javascript isn't too glamorous because docs are just comments. There's no first-class support for documentation. I didn't even know this was a feature of a programming language until I started writing code in Clojure. In Clojure, all variable and function definitions accept an optional `docstring`. So rather than a comment you plop on top of the function, a function's doc is string that coexists with it's other arguments.

Here's how the above Javascript code would look in Clojure: 

```clj
(defn eid "Create an environment unique id based on `id` {key} and `env` {keyword}."
  [id env] 
  (str (name id) "-" (name env)))
```

As the above code shows, the docstring is inside the function; and, when the docstring is a one-liner, I even inline it with its name. That way it takes less space and one can selectively read it. That, however, doesn't diminish the importance of writing it. Even adding a few extra words to a description helps to aid understanding.

In languages like Javascript, where documentations feels more out of place, I'm unsure of how well the "document every function" approach will fare. Though it's not just because of lack of docstrings, but because idiomatic Javascript code is filled with excessive hand-holding. In Javascript, for example, it's common to assign each function result a specific variable name, whereas in a more functional language like Clojure, you'd thread the group of function transformations and return their result. The latter approach composes better as code but demands more cognitive effort to read as documentation. If you try too hard to make your code read like English then separate documentation might be less necessary.

I did in fact get acclimated to the code-is-self-documenting mantra while writing Javascript. But lately, I've been writing Clojure and glancing over other dev's code code for fun and to learn. Once you get over the Lisp factor, Clojure code is so expressive and elegant! But given all the time I already spend glued to a computer screen, I've found myself reading some code and wondering: what would help bootstrap my understanding of this codebase? 

## (cond :default :understanding)

See, the reason I'm advocating for more documentation is not because code can't be understood on its own. But because most times it feels like more effort than it's worth. So the default behavior is that we don't understand other people's code well enough, nor make any meaningful contributions to it [1].

Think of the value of documenting every function as being proportional to the expressiveness of your code. If your code is expressive, not documenting a function is like refusing to give someone a calculator to do math. Theres a time to learn and there's a time to solve problems, when a codebase lacks documentation more time is spent doing code algebra rather than solving the problem at hand.

Whereas when we make documentation the default behavior, understanding too becomes the default behavior, and that facilitates collaboration. Even if you're working by yourself, documenting has another benefit: it forces you to understand your code better. The experience feels akin to writing an essay: you have to cleanup your thoughts, reexamine them, fill in missing gaps, and make sure your understanding is adequately conveyed. It's as much for you as for another person reason it: a few months from now, when you're rereading your code and don't have the same memory your previous self who wrote it, you'll be glad to have been considerate enough to have documented it well.


[1]: I imagine this is part of the [Lisp Curse](http://winestockwebdesign.com/Essays/Lisp_Curse.html). With an expressive language, by the time it takes to understand someone else's undocumented code, you figure you might as well write your own (half-baked) solution from scratch.
