---
title: (def appropriating)
description: The act of naming code.
---

It's said that there are only two hard things in computer science: cache invalidation and naming things. When I first came across this quote I was learning to code, so my first thought was: seriously, how hard could naming things be?

But that's what makes to quote so great. Even to well-versed programmers, it reads as a joke. Like any good joke, it's painfully true. 

Naturally, I underestimated how hard it is to name code. I figured  I'd be like trying to find the right synonym to use in a sentence, but it's more like trying to title an article you've yet to write. In programming, you have to pack a lot more meaning into a variable name, and code changes more than prose, so you don't even know how well that meaning will fit in the context of your application.

But even that doesn't capture the difficulty of naming code. You can be vague when titling an article, since you're just trying to convince the reader to keep on reading. But when naming code, you're trying to do the opposite: to convince your reader that after reading the name of your function, they'll understand enough about it that its body doesn't need reading. 

In that way, naming is a form of abstraction. Extracting repeat logic into a function might save typing, but giving that function a good name saves understanding. As all of us who grew up with Stackoverflow know, it's harder to read code than to copy-and-paste it. So it's doubly important to give our abstractions a good name.

Yet, we seem to take the act of naming code for granted. We all seem to agree it's important but, while coding, it's like we don't think other people will think it is. Imagine, for example, justifying to a product manager that it took you five minutes to name a function. That's the sort of thought looming over our mind. That surely, it shouldn't be this difficult; we'd rather say we we're busy tracking down a bug instead.

Why don't we treat the act of naming code as seriously amongst each other? I think it's because we don't yet have a fancy word that gives this process meaning.

We call, for example, the act of extracting code into its own function abstraction. At the surface level, we're just moving code that already exists from one place to another, how hard could that be? But having a fancy word for this process helps capture its difficulty; the difficulty of making a function concrete enough for usage now while at the same time generic enough for reuse later. It's like not knowing how to use a gun, yet being forced to wield it anyway, for self-defense, and hoping that Oh god, you don't shoot yourself in the foot with it. Being able to call this feeling abstraction, while it doesn't completely captures the mental anguish, does seem to justify the effort involved in the process itself.

Since most coding difficulties exist in our minds, we need to use fancy words to justify their existence.

### (def appropriating)

How do good code names come to be? The likes of `map`, `apply`, and `reduce`.
They're not invented willy-nilly, but appropriated from other domains. A word might have a certain meaning in our minds, and if the meaning fits, we extend it for use in programming.

Appropriating, that's what we're doing when we name code. So I reckon we should start calling it that.  

PM: "Hey, Alid, what have you been working on?"

Alid: "I just finished abstracting out some logic, now I'm gonna appropriate it."

Yep, it definitely sounds fancy enough to use. So it's just a matter of whether the meaning fits well enough.

Here's the description for the word [appropriate](https://www.vocabulary.com/dictionary/appropriate):

> The adjective appropriate is used when something is suitable or fitting. It comes from the Latin appropriare, which means "to make something fit, to make something one's own." Going back even further, appropriate is related to the Latin word proprius, "to belong to a person, thing, or group." Another appropriate way to use this word is as a verb, meaning to steal or seize something, the way you'd appropriate your sister's sandwich if she left it sitting near you.

word is ooften used in a negative sense. like appropirating someones culture. but I believe the language we use to communicate with each other should be MIT liscese.

the things you share with the world should be MIT liscence, so for me the description is fit.

At first, I was hesitant to use the word. I disliked the stealing connotation it had. But since programming culture is all about MIT licenses, I think the description is fit.

repurpose it

// stealing?
Need to becareful here.

appripariting at first felt weird. kinda liek sstealing.

one of those misunderstood words beacuse of the way we treat it as a culture.
always found it weird that you could steal something from a culture.

i can understand master/slave not being used
it's out of respect

but not wanting other cultures to use something 
that's not respect, that's [anger]
hatred 


### (def appropriation-guidelines)

Naming code is front and center to what we do as programmers. So, now that we have a word to justify the process, we should establish some guidelines for it.

Abstraction and appropriating are two steps in the same code shortening process. First you wonder, "Should I extract this logic into function?" Then, once you've done that, you're left asking, "What should I name this function?"

The same way one worries about a function being too concrete or too abstract, one should worry about a function name being too short or too long. The length of the name you buy into should be factored against times the abstraction is used, and thus amount of times it needs to be understood. Because, above all, you're trying to save programmer time; and we spend more time reading code than writing it.


If it'll be used frequently, one should aim for [terseness](/lisp-terse); if it'll be used infrequently, one should aim for descriptiveness. Your programming language, for example, should aim for terseness; most of its libraries, on the other hand, should aim for descriptiveness.

A variable is terse if within a given context it can't be shortened without losing meaning. Likewise, a programming language is terse if in a given context it can't be shortened without losing functionality. Anything shorter isn't terse, but cryptic.fwi

// not just making name short for shorts sake, but part of making a function asbtract and trying to pack a lot of meaning into the name.

A poorly named function is as bad as a poorly constructed function. Things won't work the way you expect because of some bug in understanding, and you have to use up valuable programmer time figuring out what went wrong.


Terse code is cryptic to outsiders but succinct for insiders.

//

The same way logic that's repeated more than three times should be extracted out into a function, if you're using a variable name more than seven times you should make sure it's as terse as possible.


// 
 
if it's too hard to understand a variable, and that variable is seldomly used, then it's a poor abstraction or it's poorly named. poor naming often has to do with choosing the wrong word, but that often has to do with wanting to choose the shortest word possible. So, as a safety, aim for descriptiveness.

variable names aren't changes same way logic isn't sometimes abstracted, but that discussion extends beyond naming to programming cultures and practices.

//

So, to the extent that short programs are better, we should want our programming language should be as terse as possible. Which means that we'll end up with more domain specific slang. (I use slang rather than jargon here because slang is short and unpretentious, and developers naturally.)

