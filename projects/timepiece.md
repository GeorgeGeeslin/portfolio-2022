---
layout: layouts/project.njk
title: Timepiece
description: A time tracking tool that lets users create, categorize, and track
  their tasks. Kinda like a fancy todo list - with charts. Watch out Atlassian.
date: 2018-05-01T05:00:00.000Z
featuredImage: /images/uploads/timepiece-cover.jpg
badges:
  - React
  - Redux
  - Redux Thunk
  - React Bootstrap
  - Firebase
  - Chart.js
showGithub: false
github: none
showLaunch: true
launch: https://timepiece.live/
---
Timepiece is a time tracking tool that lets users create, categorize, and track time on tasks.

It has the basic features you'd expect like the ability to start, pause, finish and delete tasks, and allows users to maintain multiple finished and paused tasks and reactive them at any time.

I used Firebase for the database and for user authentication, which was a free and simple choice. If you'd like to take a look but don't want to sign up you can log in with demo@timepiece.live. The password is password. This is a **read-only** user so you won't be able to do much other than look around with some mock data.

![tasks](/images/uploads/timepiece-tasks.png)
<em class="caption">From the main screen users can create and manage tasks.</em>

Users can edit the tasks they create. Including manually adding and removing time intervals. Changes the are automatically reflected in the summary stats and charts.

![edit](/images/uploads/timepiece-edit.png)
<em class="caption">The edit modal lets users change task, category, and project names and add/remove time intervals.</em>

Users can also view charts that break down the tasks, categories, and time spent in a few different ways.

![charts](/images/uploads/timepiece-charts.png)
<em class="caption">The charts screen provides visualizations and chart control parameters.</em>