---
title: (p2 (appropriating))
description: Guidelines for naming code well.
draft: true
---

Naming code, or as I appropriated it my last essay, [appropriating](/appropriating), is front and center to what we do as programmers. So, now that we have a fancy word for this process, we should establish some guidelines for it.

### (def appropriation-guidelines)

Abstraction and appropriating are two steps in the same code shortening process. First you wonder, "Should I make this a function?" Then, once you've made it, you're left asking, "What should I name it?" Both questions should be considered equally important; extracting repeat logic into a function might save typing, but giving that function a good name saves understanding.

In fact, abstraction and appropriation share similar concerns. The same way one worries about a function being too concrete or too abstract, one should worry about a variable name being too short or too long. 

When appropriating, the length of the name you give a variable should be weighed against the amount of times it's is used, and thus, the amount of times it needs to be understood. If it'll be used frequently, be terse; if it'll be used infrequently, be descriptive.

Your programming language, for example, should aim for terseness; most of its libraries, on the other hand, should aim for descriptiveness.

[Terse code](/lisp-terse) gets a bad rap when its syntax isn't universally understood. It useful, therefore, to distinguish between [readability-per-line and readability of the whole program](http://www.paulgraham.com/power.html). Unfamiliar syntax makes code harder to read at first glance. But a program shouldn't be written for a programmer who'll superficially look at it, but for someone who'll take the time to fully understand it. 

The clearness of code depends on its context--everything from a programming culture's conventions to the code surrounding the variable. If within a given context the meaning of variable is clear, it should be named as tersely as possible. Your mind can fill in the meaning of a variable faster than you can read its name, so making it any longer than it has to be is visually distracting.

The tersest names should be reserved for local bindings: `s` for string, `n` for number, `m` for map, `i` for index, etc.  These are used the most often and, since they're in the context of other code, it's easy for your mind to fill in their meaning.

The second tersest names should be reserved for your programming language: `str`, for example, is a good name for a string concatenation function, while `string` itself can be left for static typing, or specs. 

To the extent that your programming language lets you, take full advantage of special characters while naming code.`string?`, for example, is terser than `is-string`.

For your application code, you're external API should be descriptive but internal references should be terse. For a note-taking app, for example, `notebook` and `note` are descriptive; `nb` and `nt` are terse.

Whether with abstraction or appropriation, be careful not to shorten your code prematurely. A poorly named function is as bad as a poorly constructed one. Code won't work the way you expect because of some bug in understanding, and you have to use up valuable programmer time figuring out what went wrong. 

The same way logic repeated more than three times should be extracted into its own function, if you're using a variable name more than seven times you should make sure it's as terse as possible.

When unsure of how often a variable name will be used, or the context it'll be used in, lean on the side of descriptiveness. Let the terser name come to you as your understanding of your program evolves.
