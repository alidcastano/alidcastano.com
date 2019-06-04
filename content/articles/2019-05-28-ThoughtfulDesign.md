---
title: Desgining an app thoughtfully

description: What it means to feel a product's features and design for meaningful engagement.

quote: |
  "Monet worked with the head architect of the Louvre, Camille Lefèvre, to create a place for these canvases: natural light, plain walls, and sparse interior decoration. The work informed the space." 
  <span>
    - Helen Tran, on <a src="http://helentran.com/responsivecontentdisplay">Responsive Content Display</a>
  </span>

image: thoughtful-design.jpg
---

I've always felt resistance using traditional note-taking and social media apps. I take notes to capture my life’s most profound moments the same way someone might take pictures to capture their most enjoyable ones. So I’m sensitive to the design of apps where I collect and share my notes. They have to be thoughtful enough to encourage it.

Thoughtful. That’s not usually the way an app is described. Silly, maybe. Addictive, for sure. But not thoughtful. Yet that’s where it's experienced--as you use an app, it occupies space in your thinking, just like a tool occupies space in your hands. 

The mind space an app occupies is easy to take for granted. I certainly didn’t realize its importance until I started working on my own social, note-taking app, [Studbits](http://studbits.com). I’ve been working on it for over a year now, and I’ve invested a non-trivial amount of that time iterating to make the experience *feel right*.

What does it even mean for an app to feel right? The feel of an app is feature that’s hard to substantiate. It’s likely not what you’d include in a pitch to get an investors attention, nor an easy explanation to give friends and family for why you haven’t launched. Yet I believe getting the feel right is crucial to crafting an app for meaningful engagement. So I figured it’d take a step back from coding and unpack what I’ve learned about app design this last year.

### Subtly / Friction

In general, it’s hard to fully describe what makes one product better than others. It’s not just a set of features that it has--features just make the product workable. What makes a product great is how the entire idea comes together. All the subtleties that were accounted for overtime that allow you to use the product as intended.

On the surface of a product are its most obvious features. The ones that stand out in the activity itself. In regards to note-taking, Evernote auto-organizes notes for me (so I didn’t need to worry about it until I search for it) but Onenote has me organize notes myself (forcing me to care more about its structure); so I used the former as a reference system and the latter for lecture notes. These experiences are readily apparent while using the app, and so it’s easy to qualify their utility.

But there’s also the subtle features of an app. The ones we don’t explicitly notice impacting its use. When I needed to jot down a quick thought, for example, I couldn’t help but use iNotes. This spread my notes across yet another app. Why couldn’t I get myself to use Evernote’s mobile app instead? As I open both apps now, I do notice subtleties that can impact the writing process. Like the seconds it takes to show the screen, or whether there’s a new note button on the first page. The disqualifier for Evernote is that its interface is cluttered—there’s two toolbars (iNotes has one) and two placeholders (iNotes has zero); I have to think more about their app and take focus away from my thought. 

*[The visual noise of iNotes versus Evernote, Mobile]*

<image src="https://user-images.githubusercontent.com/11031952/58667496-2ecff800-8304-11e9-96a7-35cf2da24cbd.jpg" />

Though it’s not just lack of distraction that matters. Ideally, you want the action itself to feel natural. That’s in fact the most apparent feature in iNotes: its background looks like a slightly wrinkled sheet of paper. It’s encouraging me to scribble! 

All these are subtle features of an app that I *felt* first. I was only able to explain them now because of a competitor I was defaulting to that allowed me pick apart the experience.

What if there's no competitor to default to? Those are the most subtle features of an app: the use-cases that could be better but haven’t been improved yet. I started working on Studbits, for example, because I wanted a better way to condense my notes. A long page of text—even with summarizing and bolding and other formatting—is unpleasing to review. You have to scroll through and process all the information just to find a small bit of it. Why don't editors have toggleable blocks like the ones on the FAQ section of a website? That’d make my notes easier to read—maybe I’d actually review them! After noticing the absence of this feature (circa 2015 - I just started learning to code!), Evernote was ruined for me—I couldn’t use it without thinking about all the unnecessary mental overhead in the process.

Even the UI surrounding a feature matters. When I told my friend about my dilemma he told me checkout Workflowy—an infinitely nestable bullet point document. I was happy to finally see a note-taking app not treating digital notes like pieces of paper! But I was unhappy with their implementation—I didn’t want to use only bullet points! The reason seemed petty at the time but I couldn't ignore it. Programming helped me realize why. Using a tool with heavy conventions, whether it’s a web framework or a bullet point document, forces you to think a certain way, and that can be limiting if the way you’d like to think runs counter to the design.

I can go on and on picking apart the utility of different note-taking apps. What I’ve realized, is that rather than thinking about an idea in regards to its domain (i.e note-taking), it’s more useful to think of it in regards to the experience it facilities (i.e. can I make use of information the way I want to?). Even if features overlap, it’s the composition of the features that matters. The wrong feature, or the wrong ordering of them, can add unnecessary friction to a process. So if an experience is important enough (as note-taking is for me), and is not being served well enough, then it might be worth creating an app that caters to it better.

### Vibes / Atmosphere

Even above one feature or another, in the user’s mind, is the surface level appearance of the product itself. Just like the vibe of a restaurant sets its mood, the vibe of an app sets its atmosphere. As we hunch over to stare at a small screen, minor details and their associations leave an impression on us and impact how feel while using a product.

There are serveral factors that give an app a certain presence in a users mind. The way navigation is structured—horizontal or vertical; or how the notification system is setup—are you a friend, follower, or subscriber. Each feature has certain implications that give shape to the interaction. But in thinking about what it means to feel an app, and vibe with it, in each app I considered the most noticable impression came from its colors. 

It’s enlightening, for example, to compare the main colors app and its core user. In the case of note apps: Evernote’s colors are green and black; these are the colors of money and late nights, so it’s fitting that their core user is working professionals. Onenote’s color is purple; I can’t readily think of anything that’s purple besides a flower, so putting this color on app seems elaborate and artificial; which is also fitting, since Onenote’s core user is students. As you make an app you get a feel what colors it should have, even if you can’t explain why until you associate them with its intended audience.

*[The color scheme of Evernote and Onenote, Web]*

<image src="https://user-images.githubusercontent.com/11031952/58667483-25df2680-8304-11e9-94f8-62a29bacc796.jpg" />

An app can also use neutral colors. Like blue and gray; they’re everywhere in nature, from skies to seas, so they appeal to a general audience. That’s of course why social apps—like Facebook and Twitter—use these two colors. But usage is still tainted by other factors. Namely, their revenue stream. When a platform tries to cater to everyone it's hard to provide a specific value to charge for—so instead, it charges users in the form of attention. As the platform scales and is pressured to increase profits, the design of their features and algorithms becomes driven by the lowest common behavior: the scrolls of mindless users. Hence the guilt that plagues social media usage. These platforms were inadvertently designed to consume our attention without regard for the value provided in return. To the extent that this can be circumvented, above engagement metrics—we have to be thoughtful about design. 

Another color tactic is to use a white or gray background and black text, and let the content itself shape the atmosphere—that’s what Instagram and Medium do. This actually works well for pictures, since they’re already colorful. But with text, these plain colors don’t give the site much personality, so the content itself feels serious. You sense this when you use Medium. As a writer, you’re given an entire page to fill, and even if readers won’t see it as a half-finished page, you’re writing amongst other writers who are likely to fill it. There’s always a weight imposed by a design, and that shapes the content that’s share there. On Instagram, it’s colorful, fun pictures; on Medium it’s long, insightful posts.  Their design sets the expectation of life as one big highlight reel, and genuine human expression suffers as a result.

*[An entire page for writing on Medium, Web]*

<image src="https://user-images.githubusercontent.com/11031952/58667479-237ccc80-8304-11e9-9273-86d51d847f3d.jpg" />

An app’s colors don’t just leave a mark on users but on its designers, too. Designing Studbits made this evident for me. Laying out various elements on a screen in a legible manner, with a pleasant contrast, is surprisingly difficult; especially when you can’t expect bright pictures or videos or albums to add complexion to the screen. I imagine that’s one factor limiting the information we share online—it’s harder to design a platform around user generated text. It requires both designers and users to engage with the app more mindfully. 

The most common advice for picking a color scheme is to look for a combination competitors aren’t using. But colors are front and center to the experience. So I’d consider it more tactful to choose the color combination that best suits the vibe you want your app to have. If those colors aren’t being used, or at least not being used as tastefully, then that’s likely a signal that the need you’re trying to fill isn’t yet being met as well as it could be.

### Values / Culture

The experience of using an app isn’t just based on static features. It’s also based on relationship we build with the company that runs it. A company’s values might be the most understated feature of all, because even if a product is great, its emergent culture impacts whether we continue to use it.

Needless to say, we’ve all experienced the distasteful values of certain apps. 
<br><span>\**Cough*\* Facebook \**Cough*\* Uber \**Cough*.\*<span><br>
Their product is great, but there culture is not. So we delete them, and re-download them. Some of us eventually stop going back, the rest look down as we wait for a better alternative.

*[The dissonance society experiences when a great product has a distasteful culture.]*

<image src="https://user-images.githubusercontent.com/11031952/58667691-bddd1000-8304-11e9-9036-2295db519bf3.jpg" />

At what point is a company’s culture formed? This question is a placeholder I hope to revisit as I gain experience growing a company. But while working for a startup, the first behavior that became apparent is that the easiest path forward is to uphold the standards of those reviewing your performance. So I imagine that the same way a codebase is shaped by the values of those reviewing pull requests, a company’s culture is shaped by the values of those growing the team; a natural expression of what the founders and first employees encourage and reward. A company whose motto is “move fast and break things” will likely have a different culture than one whose motto is “be thoughtful and consider the interaction.”

### Thoughts / Design 

I think about thoughtful design a lot, because I believe it's crucial to creating spaces for meaningful engagement onine. Every variable makes a difference: a frictionless experience gives us room to think; a welcoming atmosphere encourages us to express ourselves; and an upstanding culture reinforces positive behavior. The entire experience has to be congruent for genuine interactions to flourish.

As I summarize these takeaways, it does feel like a lot to ask for. But maybe that’s a sign of untapped experiences online. At the very least, thoughtful design is worth aiming for. Who knows, there could be new, emergent behaviors left to be discovered from it.

*[If you’d like to hear more about what I’m working on, or are interested  in chatting about thoughtful design, you’re welcome to email me at alid@studbits.com.]*
