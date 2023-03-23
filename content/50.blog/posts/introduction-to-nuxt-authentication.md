---
layout: post
title: An introduction to Nuxt Authentication
description: Explore the current and future options for Nuxt 3 User Authentication in this article.
image: /blog/introduction-to-nuxt-authentication/preview.png
timestamp: 1679570114

author: Nils
position: Core Team Member
avatar: /blog/introduction-to-nuxt-authentication/nils.png
avatarLink: https://twitter.com/bracket_john_

published: true
---

Getting headaches when thinking about implementing authentication in Nuxt 3? Let’s release some pain with the help of this article. Explore the current and future options for Nuxt 3 User Authentication.

At the moment we see three options that we will explain more in detail throughout the article:

- nuxt-auth: an authentication module building on top of next-auth (a popular authentication solution for Next.js) with a big focus on OAuth
- The community port from Nuxt 2
- The official Nuxt Auth Module which is not released yet

### Contents
- [What's authentication?](#whats-authentication)
- [Why should I use a Nuxt Auth Module for authentication?](#why-should-i-use-a-nuxt-auth-module-for-authentication)
- [What’s the current status of Nuxt Authentication?](#whats-the-current-status-of-nuxt-authentication)
- [What’s the future of nuxt-auth?](#whats-the-future-of-nuxt-auth)

## What's authentication?

Authentication is the process of verifying that someone is the person they claim to be. This article focuses on user authentication only, it does not discuss machine-authentication. There are many different processes to authenticate a user. The type of authentication heavily depends on the use case. Here are some examples:

- **Username and password (“credentials”)**: The user visits a page and has to enter their username and password. If both match, they get access. Many service providers, like Google, Facebook and Apple, use this process.
- **Access Tokens**: Token-based authentication is a process that enables users to confirm their identity. In return they get a unique access token. Users can access a specific website or application by using the token they received. Thus, users don’t have to provide their login information every time they visit said website or app. Users have access as long as the token is valid. By logging out or quitting an app, the token becomes invalid.
- **Magic links**: Magic links are a type of passwordless login. The user visits a page and is asked to insert their email. To this email they are sent a magic link. If the email is registered on this page and the user clicks on the link, they will get access. Applications like Slack or Notion use magic links for authentication.
- **OAuth** (Open Authorization): OAuth authorizes APIs, devices, servers, and applications with access tokens instead of credentials. It’s an authentication via another service provider, e.g. Google, Facebook or Apple. The user enters a page and can select one of these applications to login. An example: A user wants to buy concert tickets through an event website that offers login via Facebook. The user doesn’t have to create a new account for the event website. They can just use their Facebook credentials to login and buy the tickets.

## Why should I use a Nuxt Auth Module for authentication?

Authentication is a hard topic:
- It is hard to implement it yourself. As you need to write a lot of code there are a lot of places for something to go wrong. A flawed authentication logic affects the security and functionality of your application.
- It is hard to handle user data. Managing passwords is one difficult topic. Managing usernames is another. Two usernames might look identical, but that doesn’t mean they compare.
- It is hard to maintain authentication. Attackers evolve and find new methods to circumvent what has worked before. If you maintain your own solution you need to keep up in the arms race. If you want to keep up, you have to put in the work.
- It is hard to detect security issues when writing your own code. Established solutions have a large number of users. This makes them safer. It enables them to identify patterns and prevent attacks more easily.

These factors make it difficult to ensure a secure application. That’s why there is a prevailing advice “not to roll your own”. But also if you don’t roll your own, you’re accountable for the security of your application. Therefore, it is advisable to use an existing module for user authentication such as nuxt-auth.

## What’s the current status of Nuxt Authentication?

In December 2018 Nuxt released their official auth module for Nuxt 2. It is maintained by a core team of Nuxt 2 developers. This gives the module great credibility. They are experienced devs and familiar with the ecosystem. So they pulled something nice for Nuxt 2. Their auth module for Nuxt 2 works well. It has been equally well received throughout the ecosystem.

In November 2022 Nuxt presented their stable version of Nuxt 3. They already released nuxt/content and will release [more core modules](https://nuxt.com/docs/community/roadmap#core-modules) such as nuxt/image, nuxt/telemetry and also nuxt/auth.

For developers seeking to implement authentication in Nuxt 3 we currently see three (potential) options

1. nuxt-auth
    - It’s an authentication module* that builds on top of next-auth, a popular authentication solution for Next.js.
    - As Next.js is widely used (more than Nuxt, actually), [sidebase](https://github.com/sidebase/docs) built on top of this and called it nuxt-auth. This authentication module was generally very well accepted throughout the community.
    - Next Auth has a big focus on OAuth. So if you want to implement this kind of authentication, our module is a good choice. Through wrapping Next Auth we provide support for 40-50 of providers like Google, Apple, Facebook and Co..
2. Community port from Nuxt 2
    - What has been existing for a long time is a community port from the [Nuxt 2](https://auth.nuxtjs.org/) library but it is not widely used. It uses a configurable authentication scheme or directly supported providers for user authentication. It offers OAuth but on their website they also refer to pre-configured providers. One can use these instead of the scheme.
3. Official Nuxt Auth Module (not released yet)
    - It’s very likely that there will be an official Nuxt auth module but this depends on how the ecosystem develops. You can check their [roadmap](https://nuxt.com/docs/community/roadmap) to stay up to date.

There are also a bunch of smaller libraries for specific use cases. If there’s a specific use case that applies to you, it’s recommendable to use one of these smaller libraries.

One example is passport-local. This module allows authentication via username and password in Node.js applications. It can integrate with Passport (authentication middleware for Node.js). Local authentication can be integrated into any application or framework that supports Connect-style middleware.

Another example is passport-activedirectory. It’s a module for authenticating users in a Node.js application using Active Directory. Active Directory is a Microsoft technology for managing users, groups, and computers in a network. It provides additional functionality that can be useful for verifying user information. Especially in cases where users belong to nested AD groups. 

_*In this article we use the terms ‘module’ and ‘library’ interchangeably as they are not clearly defined within the Javascript and Nuxt ecosystem._


## What’s the future of nuxt-auth?

One of the advantages of nuxt-auth is that it offers a multitude of OAuth providers that you can choose from. It is very unlikely that the official Auth Module for Nuxt 3 will copy over all the code from nuxt-auth and reimplement it.

But what could happen is that they also wrap next-auth in some way. next-auth has become a broad ecosystem solution and not just a Nuxt specific solution. They extracted the core, moved it to Javascript and called it Auth.js.

From the name you can already tell it’s an authentication for the whole Javascript ecosystem. (As it doesn’t contain a prefix like Next.js). So, here’s what could happen:

- Nuxt writes their own authentication module.
- For OAuth they wrap the Auth.js library. 
- On top they add their own details that Auth.js doesn’t support.
- They fully integrate this library into the Nuxt ecosystem.

What Nuxt already did is that they built integrations for all big frameworks. Then they added in a small extra library. It uses the above-mentioned core and built the integration force filter.

What sidebase could do in this case: Build the small extra library for Nuxt. We would extract our Nuxt specific code and add it to the Auth.js library as a small new library. And this could then become the official solution in the Nuxt ecosystem.
