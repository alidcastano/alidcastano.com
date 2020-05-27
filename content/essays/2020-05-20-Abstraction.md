---
title: Decomplecting abstraction
description: Exploring the difference between concretions and abstractions.
draft: true
quote: | 
  There is no abstract art. You must always start with something. Afterward you can remove all traces of reality.
  <br> - Pablo Picasso
---

One pet peeve I've always had about Javascript code is the rampant use of Classes. Even when Javascript was the only programming language I knew, I'd go out of my way to use factory functions instead. I had some notions of why (i.e. Classes are less composable), but honestly, it felt more like a nitpick than a sound technical decision.

Now, though, I have an explanation for my wariness of classes. It's one lesson (of many) that I picked up from listening to Rich Hickey's, the creator of Clojure, conference talks.

In Hickey's talk, [Values of Values](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/ValueOfValues.md), where he discusses "What makes a value good?", he mentions how programming constructs that rely on specificity lead to excess code: 

> These ideas, the notions of values are generic. And I think it's something that we don't think about often enough in our programming designs and our systems, the actual cause of specificity. We love specificity. We use Java. Every new idea gets a new class. Every new thing gets a new thing. What does that cause to happen? We get this explosion of code... Objects that were supposed to support reuse do the exact opposite thing especially in typed languages. You get very little reuse because you make a new thing every time, and what does more code mean? More code equals more bugs. Right away.

In another talk, [Effective Programs](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/EffectivePrograms-mostly-text.md), where Hickey details the programming model Clojure encourages, he makes another comment about the above phenomenon, this time giving it a name: 

> In programming literature, the word "abstraction" is used in two ways. One way is just like, "naming something is abstracting". I disagree with that. Abstracting really should be drawing from a set of exemplars some essential thing. Not just naming something. And what I think is actually happening here is we are getting not data abstractions, you are getting data concretions.
>
> Relational algebra, that is a data abstraction. Datalog is a data abstraction. RDF is a data abstraction. Your person class, your product class, those are not data abstractions. They are concretions.

Prior to listening to this talk, I never considered what the word "concretion" meant in programming. What exactly makes some snippet of code a concretion? Is a concretion not a sort of abstraction? What place do concretions have in our programs? 

## (def concretion)

The answers to the above questions weren't immediately obvious to me, but while programming, the word "concretion" stuck to my mind.  I started paying more attention to the costs of the abstractions I created.

In one particular case, I was creating an API in Clojure that leveraged AWS services. I needed a way to get a specific service's id from its name, so I created a function, `sid`, for doing that. But writing code like `(sid :auth-pool)` felt like I'd be hard-coding names everywhere, so I created a specific function for retrieving this service's id, that way I could write `(auth-pool-id)` instead. But as I did this for my second and third service, I realized my mistake: by trying to avoid explicitly using the name of the resource (which in Clojure is idiomatic to do with keywords), I was committing instead to writing a new function for each service, and these functions weren't generalizing any behavior, just wrapping a existing utility (`sid`). Rather than code reuse, what I was giving myself was duplication.

Turns out, what I disliked about Classes is more general to programming: the tendency to make code too specific, with the intention of facilitating use, but, without considering the costs of doing so. Classes, with their interfaces and methods, just encourage specificity, but you can very well overdo it with functions too, as I mistakenly have.

That's not to say that concretions are always bad. There's cases where extra specificity is warranted. In a Javascript codebase I worked on, for example, a check for `organization.parentId === null` was written in a few places.
From the code I can infer it's checking for any organization without a parent. Still, I chose to turn that specification into a function, that way I could write `isRootOrganization(org)` instead. Now, one can be unaware of what makes an organization the root yet still know whether it is or isn't one. We're communicating at a higher, more concrete level. 

Imagine now, that other hierarchical entities appeared in the codebase. They all share the same property value: their `parentId` is `null`. So rather than a specific `isRootOrganization` function, we generalize this specification to all entities; now we can write `isRoot(entity)` instead. We're communicating at a higher, more abstract level.

Why didn't we write the function in this more abstract way in the first place? It might have not been known that there'd be other hierarchical entities, nor that they'd be easily implemented in the same manner. That's often the case with programming: you never know all requirements upfront, nor how the code will evolve and what patterns will emerge from it. Concretions, for that reason, are natural steps towards abstractions.

## (compare :abstraction :concretion)

Can a concretion itself be considered an abstraction? Typically, I would have thought so. The word 'abstraction' in programming is like the word  'healthy' for dieters, the goals are complected with their processes.

For a dieter, does 'eating healthy' mean eating nutritiously or eating in a caloric deficit? For weight loss, one can eat junk food yet stay in a caloric deficit and lose weight. Yet, overeating a plate of vegetables is harder than overeating a bag of skittles. So, while 'eating healthy' doesn't describe the cause of weight loss (being in a calorie deficit), it does describe the process that most effortlessly leads to it (eating filling, nutritious meals).

Likewise, for a programmer, does 'abstraction' mean specifying some behavior or generalizing some pattern? The most notable code reuse comes from logic that's generalized across a codebase, but once logic is generalized, it gets used in disparate places so its implementation is harder to change. Hence why it's more practical to be specific first, until the patterns among them are concrete and easy to generalize. So, while 'abstraction' doesn't describe any act of extracting logic into a function, it does describe the process that most naturally leads to it (specifying behavior, then generalizing it).

To fully decomplect abstraction from concretion, I'd help to explicitly define them as two different steps, or considerations, in the coding process:

1) Concretion: Some logic is repeated in multiple places, in the same way--should we specify it in a function?

2) Abstraction: Some logic is repeated in multiple places, in different ways--should we generalize it in a function?

Using the above hierarchical entities example, first we had the implementation detail, `organization.parentId === null`, then the concretion, `isRootOrganization(org)`, and finally, the abstraction `isRoot(entity)`. 

Interestingly, it seems like the goals and byproducts of these processes are inverted. With a concretion, the goal is declarativeness, and code reuse (if it happens) is a byproduct. Sometimes a concretion saves lines of code, sometimes it doesn't, but you wrap some code anyway to better specify some behavior. Whereas with an abstraction, the goal is code reuse, and declarativeness (due to there being less imperative code) is a byproduct. By nature of being more general, however, the resulting abstraction is less declarative than a concretion, but that trade-off is outweighed by the reduction in code that comes from more generalized logic.

There's one exception I can think of, however, to this trade-off. Sometimes you make a concrete version of an abstraction, not for declarativeness, but for performance. In Clojure, for instance, the function `map` can operate on any collection--i.e. lists, vectors, maps, and sets--but there's also a more specific version, `mapv`, that operates only on vectors and doesn't pay any performance cost converting to and from different sequences. But, as always, performance bottlenecks are special exceptions, and I still think it'd be useful to think of concretions as a tool for declarativeness and abstractions as a tool for reuse. With these clear boundaries, when you're reaching for one and not the other, it's easier to examine why.

## (analyze :concretion)

At the start of writing this, I had assumed concretions were always bad but I was unable to clearly distinguish them for abstractions. Now, I feel like I've established how they're different from each other and how concretions too have a natural place in our programs, but I've yet to fully clarify: when exactly are concretions bad? 

If the ultimate goal is to end up with the right abstraction, one heuristic may be to notice when you find yourself stuck with many similar concretions. The most obvious cause might be that you haven't yet generalized some behavior. Or worse, the pattern is staring at you in the face but it's cemented in a bunch of Classes.

A more slippery situation, however, is not when you haven't moved towards an abstraction, but when you're moving away from it. This is easy to spot, because you'll notice yourself creating many new functions that just wrap the same existing, generic utility. Though even if you catch yourself doing this, you might feel resistance to replacing these concretions, as I have, if you've taken a liking to their declarative nature.

Imagine, for example, that you need to serialize user data in your Clojure API. You have the function, `user`, that serializes a single user's data. How would you apply that logic to a list of users? Do you write `(map user)` everywhere, or create a new function, `all-users`, that does that under the hood? With the latter, the pattern you end up with, is that rather than having one serializing function for every entity in your codebase, you'd have two, at the least. You'll likely need to map, reduce, or filter their data in different ways, but rather than plainly using those functions, you've opted to make them more concrete. Sometimes that may be warranted, most times, it's not.

This sort of mindless concretion, nonetheless, is prevalent, and it's one I've been particularly vulnerable to. Especially in pseudo functional languages like Javascript. To an untrained eye, `allUsers()` reads nicer than `map(user)`. To use an abstraction without a concretion, you have to truly value reusability over declarativeness.

Prior to writing this, I hadn't realized that coding involved some trade-off between the two. Abstractions or concretions; reusability or declarativeness. That implicit choice, it seems, is why good abstractions are hard to preserve and fully use. There's this knee-jerk reaction to seeing a string of SQL dangling in your codebase, that you have to manually override before you mindlessly reach for some military grade ORM. Upfront are the concretions some library has made easy, hidden, are the abstractions it obscured.
