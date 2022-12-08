---
layout: post
title: 6 Reasons why every Typescript Developer should follow the sidebase journey in 2023
description: Here are the top 6 reasons why every Typescript developer should follow the sidebase journey in 2023.
image: /blog/6-reasons-to-follow-sidebase/preview.png
timestamp: 1670502328

author: Daniel
position: Core team member
avatar: https://pbs.twimg.com/profile_images/1515737666784006146/Ahnj_AdZ_400x400.jpg
avatarLink: https://twitter.com/dankremerov

published: true
---

### Reason 1: We use sidebase ourselves across multiple industries and customer projects - so that we don’t have to solve the same problems twice

As a Typescript developer, you should stop having to solve the same problems over and over again. Don’t reinvent the wheel every time you have to: 

- Implement authentication
- Implement sessions
- Connect to a database
- Set up your test suites correctly
- Integrate additional modules like: Storybook, Histoire, Vitest or Vue-test-utils

Instead, sidebase has solved this all for you. We’ve developed sidebase and the Nuxt 3 modules surrounding sidebase based on our own needs: In the past year alone we’ve built multiple production-grade applications with Nuxt 3 and Full stack Typescript across different industries and requirements. Before Nuxt 3 we’ve used Nuxt 2 in the real world for years.

We’ve built sidebase based on what is needed the most: Getting started with familiar tech into unfamiliar projects, fast and reliable.

We know other frameworks like Supabase or Firebase have done it too. But how hackable are they? Let’s discuss this in reason 2 below.

### Reason 2: sidebase is the _hackable_ Firebase and Supabase alternative for Typescript developers

What’s wrong with Supabase and why do hackable frameworks and components matter?
Supabase is a great product, but unfortunately it uses non-Javascript/Typescript components. This makes it hard for you to understand, debug and extend these modules. For example, you have to learn Go to understand what’s going on under the hood of the Supabase authentication solution.

If you never want to end up in a dead end, being able to debug and extend your components is non-negotiable. So this hackability should be key when selecting your starter framework.

sidebase solves this by relying as much as possible on Javascript/Typescript modules. Only exception at sidebase right now is the database (sqlite, PostgreSQL).

So go for it! Dive as deep as you need into the sidebase modules and hack them in a way that makes sense to you! 

### Reason 3: Leverage the new Nuxt 3-Paradigm with sidebase

Reason 3 is all about using as much of the magic of Nuxt 3 as possible within sidebase. Let’s look into 3 aspects of that magic:

- Nuxt 3 comes with an unparalleled deep Typescript Full stack integration. This is something we’ve not seen that well executed anywhere before. Therefore, sidebase shall bring this Full stack Typescript magic to the masses through a real world approved starter.
- Nuxt 3 comes with a “deploy to everywhere”. You can easily build and then deploy to basically all hosting providers. Sounds trivial? Actually, this freedom and independence is not given to you with something like NextJS, which is really closely tied to Vercel.
- Performance: Nuxt 3 has made it very intuitive to perform isomorphic data fetches where on the server side a function call is performed instead of a HTTP request. That’s just one example of the performance to expect when building with Nuxt 3 and sidebase.

### Reason 4: Even if you already started your project, you can use some of the sidebase modules

When building a starter framework, timing discoverability is hard for builders and users: Many developers discover sidebase while working on their newest project with another starter or from scratch. sidebase might be a great fit for you, but the switching costs for your existing project are just too high. That’s why we’ve built sidebase in a modular way. Even without using the whole framework you can integrate modules like an authentication or a session module into your existing project.

### Reason 5: Long-term oriented team that produces and maintains production level libraries

Enough on hard facts, people also matter: For us (the maintainers of sidebase) it is not just a fun Proof of Concept. It is our mission to help more developers build professional grade applications. The journey of building sidebase is our dream of producing open source tools for the masses.

Therefore, we are also doing the unattractive parts of building and maintaining reliable Open Source Product and know what comes with it. For example, for our nuxt-auth module
someone else has done a PoC of an important part of the module. The person had the understanding, but not the commitment or desire to publish a maintained Nuxt 3 module. 12 months later we were able to take this PoC and, with the right time commitment, push it into a product level library. Similar things you can see for deployments; Writing a snippet is quite different from actually doing the work: packing, finishing and testing a library so that it is usable by the masses. We are willing to do this for you.

### Reason 6: We help you with your sidebase problems

Here we leverage that we have a large network of people who build production grade applications with sidebase everyday. Everyone of them is eager to help with supporting other Typescript developers on their sidebase journey.

![discord chat](/blog/6-reasons-to-follow-sidebase/discord-chat.png)
![discord weekly-call](/blog/6-reasons-to-follow-sidebase/weekly-call.png)


It is a win-win: You get our help to solve your problems faster, we learn more things for sidebase. Join our [Discord](https://discord.gg/VzABbVsqAc) now.

### Useful links

- [sidebase Twitter](https://twitter.com/sidebase_io)
- [sidebase GitHub](https://github.com/sidebase/sidebase)
- [sidebase authentication: nuxt-auth module](https://github.com/sidebase/nuxt-auth)
- [sidebase session: nuxt-session module](https://github.com/sidebase/nuxt-session)
- [Deploy Eveywhere Nuxt3](https://nuxt.com/docs/getting-started/deployment#supported-hosting-providers)

