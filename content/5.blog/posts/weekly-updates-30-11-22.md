---
layout: post
title: Weekly sidebase updates [30.11.22]
description: In our weekly calls we discuss updates to sidebase. These are the notes from the call on the 30.11.22
image: /blog/weekly-talk-30-11-22/preview.png
timestamp: 1669829161

author: Zoey
position: Core team member
avatar: https://avatars.githubusercontent.com/u/30908158?v=4
avatarLink: https://twitter.com/zoey_kaiser

published: true
---

![banner](/blog/weekly-talk-30-11-22/banner.png)

## Good evening everyone!

Today we had another amazing sidebase weekly call! Thank you to everyone who attended. 
For the first time ever, we will now be posting a short post, summarizing everything we talked about!

Before we hop into the news. If you want to listen to the entire call (sort of as a podcast) you can find the recording [here](https://twitter.com/sidebase_io/status/1597976269479550976).


### Migration from Twitter to Discord

The first topic we talked about had to do with the future of the weekly sidebase calls. Until now these were always hosted on
Twitter Spaces. However, we began to notice many technical limitations with the platform such as the inability to screen share, no good live chat and limited desktop features.

Therefore, we had been playing with the idea of switching over to Discord. We believe the time for this is now. In the last weeks our Discord
has grown considerably (thank you to everyone) to a point where we think it is now viable to hold the calls there.

We will be creating a new section for the weekly calls with a Discord Stage as well as a text channel in which we can share links or you can ask questions!

### A big thank you to everyone!

In the last 24 hours we had an astonishing 13 outside contributions! This number is absolutely mind-boggling, as all of these contributions
brought important topics or fixes to the table! A big thank you to everyone who has contributed up to this point, we could not do this without you.

We are trying to keep up with the large increase of contributions as best we can and hope to keep our response times as low as possible!

### sidebase updates

In this call we also announced a lot of updates to our bread and butter: the sidebase starter!

We know that updates to the starter have slowed in the last weeks. This is primarily due to the release of Nuxt 3 and the increased demand 
and usage of our modules (as more people use it, more bugs will present themselves). Now that the initial wave of users is starting to decrease
we have been able to give our starter a bit more love.

#### The changes

We will soon be releasing a big new update! Some highlights are:

- Replacing TypeORM with [Prisma](https://www.prisma.io/)
- Replacing AntDesignVue with [Naive UI](https://www.naiveui.com/en-US/os-theme)
- Removing all the excess READMEs and moving them to the new [documentation page](https://sidebase.io/sidebase/welcome)
- Removing the `package-lock.json` to make sidebase easier to use with other package managers

Along with these major changes, we will also be slimming down the final size, to allow sidebase to become more modeler and easier to customize.

#### The future of sidebase

We have been thinking a lot about the future of sidebase and the direction we hope to go into with our OS projects. Our current plan
is to expand sidebase by creating more pre-made templates and starters for different use cases. One example of this is a blog-starter
I am currently developing. Along with this, we plan on adding more starters in collaboration with the community! Therefore, if you have any good ideas for starters
you wished you had, please let us know on our [discord](https://discord.gg/VzABbVsqAc), and we would be happy to discuss it!

### Modules

While this call was not focused on our modules, we did give some module ideas we are thinking about creating. 

One of the main motivations behind switching sidebase from AntDesign to NaiveUI was that there is a Nuxt 3 package for integrating NaiveUI. 
This makes development with it a lot easier and streamlined. Therefore, we think it might make sense to look into making Nuxt 3 modules
for other component libraries, to allow developers to easily integrate them into their projects with two lines or less!

### That's it for this week!

We will be hosting our next sidebase call on the 7.12.22 at 16:30 (GMT +1). Be sure to follow us on [Twitter](https://twitter.com/sidebase_io) and join us on [Discord](https://discord.gg/VzABbVsqAc) to get all the newest news!
