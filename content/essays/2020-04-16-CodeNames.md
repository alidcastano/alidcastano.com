---
title: 12 Considerations For Naming Code Well
description: Naming code to be more expressive.
twitter: status/1250904679204216835
hackernews: item?id=22893951
---

Naming code well, or as I appropriated it my last essay, [appropriating](/appropriating), is front and center to what we do as programmers. Yet, there isn't much discussion online on what it means to name code well. In a way, it's a sensibility you pick up and get better at as you program. But there's general considerations that make good code names more evident, so it'd help to specify what they are. 

Of course, many of these considerations will be based on personal preference. My personal preference specifically, is that I value code that is expressive [1]. These are 12 considerations towards that goal: 

1. The same way an abstraction can be too concrete or too abstract, a variable name can be too short or too long. Long names allow you to be more descriptive but short names (once understood) require less effort to read and type.
2. Your mind can fill in the meaning of a word faster than you can read it, so making a name longer than necessary is visually distracting. Abbreviations, just like abstractions, reduce the amount of visual noise in your code and let you hold more of a program in mind at any given time.
3. The length of a variable name should be weighed against the amount of times it's is used, and thus, the amount of times it needs to be understood. If a name will be used frequently, be terse; if it'll be used infrequently, be descriptive; if you're unsure, prefer being understood rather than clever. 
4. The clearness of a name depends on its context--everything from a programming culture's conventions to the code surrounding the name can make its meaning more or less obvious to someone reading it. A [terse](/lisp-terse) name is likely to be unfamiliar, which makes it harder to read at first glance. But code isn't written for a programmer to superficially look at but for them to understand all the relevant parts [in their entirety](http://www.paulgraham.com/power.html).
5. The same way one should consider extracting logic repeated more than three times into its own function, if a variable name is repeated more than seven times one should consider making sure it's as terse as possible.
6. The tersest names should be used in local variables: `s` for string, `n` for number, `m` for map, `i` for index, etc.  These variables are used often and, since they're in the context of other code, it's easy for your mind to fill in their meaning.
7.  The second tersest names should be used in your programming language: `assoc`, for example, is a good name for a function that *associates* a key-value pair in a map. Your language's core library is expected to be known by anyone reading your code and once you know a variable's usage it's easy to remember its abbreviated name.
8.  Take advantage of special characters (to the extent that your programming language's compiler lets you): `string?`, for example, is a better name than `is-string`. Used appropriately, special characters are more expressive and help code feel more lightweight.
9.  External references (e.g. APIs) should be descriptive but internal references (e.g. local bindings) should be terse: `notebook` and `note` are descriptive; `nb` and `nt` are terse. The former aids first-timers in understanding your code, the latter gives them room to think when they're knee deep in your codebase.
10. Some words lend themselves to abbreviation more than others. You can usually cut from the last half of a word (e.g. `components` becomes `comps`) or strip out the consonants (e.g. `config` becomes `cfg`). Though try to avoid an abbreviation if it's commonly used for another word (e.g. `client` can be abbreviated to `cli` but that's already used to signify a command line interface); and, in general, if a word doesn't abbreviate well, don't force it.
11. A poorly named function is as bad as a poorly constructed one. Code won't work the way you expect because of some bug in understanding and you have to use up valuable programmer time figuring out why. 
12. Naming has a two-fold effect: along with aiding understanding, it shapes what you feel you can or can't do with something.  In that way, a good name lends itself to its appropriate usage. So name your code wisely, and listen to it even more so.

There's a subtlety to a name that you feel while coding. When we're typing a variable out, or reading it, or tossing its code around in our minds. Its presence is felt. So while some of this list might be personal preference, there's an undeniable importance to naming that's worth considering.

*Notes*

[1]: A lot of these considerations were made explicit to me while reading Clojure code (as anyone familiar with Clojure will likely notice from the examples). There's something about having the right syntax and core language to encourage developers to be more expressive, whereas when the only language I knew was Javascript, it was as if expressiveness was a yearning forced to stay dormant.
