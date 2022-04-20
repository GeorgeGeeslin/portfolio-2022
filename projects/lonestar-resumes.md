---
layout: layouts/project.njk
title: Lonestar Resumes
description: "This resume builder lets you input data to create a resume. A live
  preview is generated as you type, so you can see how it will look when you
  download it. "
date: 2021-04-14T05:00:00.000Z
featuredImage: /images/uploads/lonestar-resumes-cover.png
badges:
  - React
  - AWS
  - Serverless Framework
  - Lambda
  - DynamoDB
  - Puppeteer
showGithub: false
github: none
showLaunch: true
launch: https://lonestarresumes.com
---
This resume builder lets you input data to create a resume. A live preview is generated as you type, so you can see how it will look when you download it. 

Currently, it's completely free. You don't even have to create an account down build and download your resume. But you will have to create an account if you want to save your resumes so you can come back and edit them later. 

Like most of my projects, the goal was to explore some new (to me) technologies. I wanted to build a react frontend that strictly used hooks. And specifically I wanted to use the useContext and useReducer hooks together to sort of mimic Redux. 

I also wanted to use Serverless Framework and create something with a completely serverless backend. I used Congnito, DynamoDB, API Gateway, and Lambda, and Serverless Framework helped wrangle those services in an infrastructure as code approach. 

I'm also using Puppeteer to generate the PDFs. That is taking place in a lambda function using lambda layers to provide the Puppeteer library without blowing past the limited disk space allowed for lambda functions.

All in all, the frontend was the most complicated part. The backend felt comparatively simple to build. Thats probably a testament to Serverless Framework's awesomeness.

The useReducer + useContext approach was particularly useful for managing front end state for this application, because the most important piece of state, the resume data, is a complex object. It's a Russian nesting doll in some ways, with objects inside of arrays, inside of objects. But this approach allowed me to easily(ish) write functions to target those specific places in the resume object to update the data within. 