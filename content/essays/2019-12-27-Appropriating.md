---
title: (Appropriating)
description: The act of naming code well, taken seriously.
quote: |
  "There are two hard problems in computer science: cache invalidation, naming things, and off-by-1 errors."
  <br> - Leon Bambrick

twitter: status/1214344182900428801
hackernews: item?id=21975311
---

It's said that there are two hard things in computer science: cache invalidation and naming things. When I first came across this quote I was learning to code, so my first thought was: seriously, how hard could naming things be?

What's great about the quote though, is that even to well-versed programmers it reads as a joke. Like any good joke, it's painfully true. Naming code is hard. I figured  I'd be like trying to find the right synonym to use in a sentence, but it's more like trying to name a half-written article. In programming, you have to pack a lot more meaning into a variable name, and code changes more than prose, so the name has to fit in the context of a constantly evolving application.

Yet, even that doesn't capture the difficulty of naming code. You can be vague when naming an article since you're just trying to convince the reader to keep on reading. But when naming code, you're trying to do the opposite: to convince the reader that after reading your variable's name, they'll understand enough about it that its referenced code doesn't need reading. 

If you choose a variable's name poorly, the concern isn't that someone will have to read its code to figure out what it does. But that they'll misinterpret its meaning and continue reading thinking they understand it. Until eventually they hit a line of code where meaning stonewalls, and they have to start again from the beginning to figure out why. 

So, I think we can agree: naming code well is hard, and important. But, while coding, it's like we don't think other people will think it is. Imagine justifying to a product manager that it took you five minutes to name a function. That's the sort of thought looming over our mind while we code. That surely, naming shouldn't be this difficult; we'd rather say we we're busy tracking down a bug instead.

Why don't we treat the act of naming code as seriously amongst each other? I think it's because we don't yet have a fancy word for this process. Take, for example, the act of making code reusable. At the surface level, we're just moving code that already exists from one place to another, how hard could that be? But when we call it *Abstraction*, wow!, somehow we have to make this logic concrete enough for usage now yet generic enough for reuse later. All of a sudden, the effort required to reuse code feels more justified. 

Like abstraction, most obstacles that we encounter while coding occur in our minds. So for the hardest of coding tasks, we need fancy words to better capture their difficulty. 

### (def appropriating)

How do good code names come to be? The likes of `map`, `apply`, and `reduce`. They're not invented willy-nilly, but appropriated from other domains. A word might have a certain meaning in our minds, and if the meaning fits, we extend it for use in programming.

Appropriating, that's what we're doing when we name code. So I reckon we should start calling it that.  

> PM: "Hey, what have you been working on?"
>
> You: "I just finished abstracting out some logic, now I'm gonna appropriate it."


Yep, it definitely sounds fancy enough to use. So it's just a matter of whether the meaning fits well enough.

Here are the roots of the word [appropriate](https://www.vocabulary.com/dictionary/appropriate):

> The adjective appropriate is used when something is suitable or fitting. It comes from the Latin appropriare, which means "to make something fit, to make something one's own." Going back even further, appropriate is related to the Latin word proprius, "to belong to a person, thing, or group." Another appropriate way to use this word is as a verb, meaning to steal or seize something, the way you'd appropriate your sister's sandwich if she left it sitting near you.

When someone names code they are indeed making it "their own," and most code terminology does belong to "a particular group," whether it be functional programmers or Java developers, etc. So those two connotations work well. 

Though, I'll admit, I was resistant to the "stealing" connotation. Appropriation is often used in a negative sense, like "appropriating someone's culture." But I believe that, as a programming culture, we should consider our language as being MIT licensed. You might choose not to use certain words out of respect for others, but other than that, appropriating should be a good thing! As the saying goes, good programmers copy; great programmers appropriate.
