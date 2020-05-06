---
title: Decomplecting abstraction
description: Making the distinction between abstraction and encapsulation.
draft: true
quote: | 
  "I've been doing a lot of abstract painting lately, extremely abstract. No brush, no paint, no canvas, I just think about it."
  - Steven Wright
---

One pet peeve I always had about Javascript code is the rampant use of classes. Even when Javascript was the only programming language I knew, I went out of my way to use factory functions over classes; I just felt like classes weren't the sort of abstraction I wanted to be using. I had some notions of why (classes are less composable, they make use of implicit `this` state, etc.), but honestly, it felt more like a nitpick than a sound technical decision.

Now, however, I have an explanation for why classes felt wrong. It's one lesson (of many) that I picked up from listening to Rich Hickey's, the creator of Clojure, conference talks.

In Hickey's talk, [Values of Values](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/ValueOfValues.md), where he tries to answer "What makes a value good?", he mentions how programming constructs that rely on specifiy lead to excess code: 

> These ideas, the notions of values are generic. And I think it's something that we don't think about often enough in our programming designs and our systems that the actual cause of specificity. We love specificity. We use Java. Every new idea gets a new class. Every new thing gets a new thing. What does that cause to happen? We get this explosion of code... Objects that were suppose to support reuse do the exact opposite thing especially in typed languages. You get very little reuse because you make a new thing every time, and what does more code mean? More code equals more bugs. Right away.

In another talk, [Effective Programs](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/EffectivePrograms-mostly-text.md), where Hickey details the programming model Clojure encourages, he makes another comment about the above phenonemon, this time giving it a name: 

> In programming literature, the word "abstraction" is used in two ways. One way is just like, "naming something is abstracting". I disagree with that. Abstracting really should be drawing from a set of exemplars some essential thing. Not just naming something. And what I think is actually happening here is we are getting not data abstractions, you are getting data concretions.
>
> Relational algebra, that is a data abstraction. Datalog is a data abstraction. RDF is a data abstraction. Your person class, your product class, those are not data abstractions. They are concretions.

Prior to listening to his talk, I'd never considered what the word "concretion" meant for programming. What exactly makes some snippet of code a concretion? Is a concretion not a sort of abstraction? What place do concretions have in our programs? 

The questions weren't immediately obvious to me. But while programming the word "concretion" stuck to my mind, I started paying attention to when I was making things too specific, leading to more code than necesssary.

In one particular case, for example, I was creating an API in Clojure that used AWS resources. I had created a function, `rid`, to retrieve the resource's id based on its name but I also I felt inclined to also create a function for each resource. So, for example, rather than writing `(rid :auth-pool-id`) in multiple places, I'd write `(auth-pool-id)`. But, as I started doing this for second and third resource, I noticed my mistake: by trying to avoid explicitly using the name of the resource everywhere I was instead committing to writing a specific function for each resource [2]. Rather than code reuse, what I gave myself was duplication.

I hadn't caught myself doing that before. There's a telling example from previous Javascript/React code I've written that came to mind: when using Graphql I'd write a function for every query. So rather than writing `useQuery(DASHBOARD_QUERY, opts)` I'd instead write `useDashboardQuery()`. If the former logic can be used in multiple places [3], it seemed like duplication to not explictly declare it in its own function. But that's because I didn't have the awareness of what the latter code is: a concretion.

As it turns out, what I disliked about classes as a data structure is more general to programming: the need to make code unnecessarily specific, which makes programs more verbose than they have to be. Classes, with their interfaces and methods, just encourage this behavior, but you can very well use the same object-oriented paradigms with functions.
