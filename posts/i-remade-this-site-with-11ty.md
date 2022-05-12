---
layout: layouts/post.njk
title: I Remade this site with 11ty
description: In a previous post (directly below this post) I wrote about using
  Gatsby to build this portfolio site. In that post I go over some of the things
  that are nice about Gatsby and how to get started. In this post I’ll go over
  why I decided to move away from Gatsby and also provide a few resources about
  how to get started.
date: 2022-05-11T05:00:00.000Z
featuredImage: /images/uploads/screen-shot-2022-05-11-at-9.42.23-pm.png
featuredImageAltText: Eleventy logo
badges:
  - Eleventy
---
In a previous post (directly below this post) I wrote about using Gatsby to build this portfolio site. In that post I go over some of the things that are nice about Gatsby and how to get started. In this post I’ll go over why I decided to move away from Gatsby and also provide a few resources about how to get started.

 Like I said, I build this portfolio site with Gatsby, but after having the site up for awhile some cracks started to appear. Gatsby is weighty (5.36 MB). It’s got a lot of dependencies, and the plugins I was using meant even more dependencies. I reached a point where Dependabot was frequently emailing me about the security vulnerabilities in my dependencies. I didn’t want to disappoint my dear friend Dependabot, but inevitably updating all those dependencies caused breaking changes. Now I could no longer build the site when deploying to Netlify. Strangely, when running Netlify CLI locally I could build it, but that just made things harder to troubleshoot because it meant I couldn’t reproduce the issue. Rather than put in a lot of work debugging I decided it was time for a rewrite. Hopefully one that would leave me with a site that’s a little easier to manage. 

That lead me to trying Eleventy (366KB if you were wondering):

Long ago, when I was first becoming serious about learning web development I tried making a static site using Jekyll. Eleventy felt more similar to what I remember of Jekyll than to Gatsby. Gatsby lets you write React components to create your site’s UI, which is great if you like React. Like Jekyll, Eleventy takes the approach of layout templates. These contain markup that will wrap around your content. Layout templates can inherit from other layout templates, so what you get is an additive approach rather than a component based approach. Whereas Jekyll uses Liquid as its templating language, Eleventy supports many different templating languages, so check out the list in the documentation and choose the one you like. If you don’t have a preference, I recommend Nunjucks simply because it seems the Eleventy community has coalesced around it. Most of the examples I found online about how to do different things in Eleventy used Nunjucks.

Resources

At least do the two tutorials under “Making a simple web site with the simplest static site generator” 
<https://www.11ty.dev/docs/tutorials/>

Build a blog with Eleventy and Netlify CMS Parts 1 through 3. 
<https://codingthesmartway.com/building-a-blog-with-eleventy-and-netlify-cms-part-1-creating-the-eleventy-project/>