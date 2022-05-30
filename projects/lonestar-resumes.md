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
showGithub: true
github: https://github.com/GeorgeGeeslin/resume-builder
showLaunch: true
launch: https://lonestarresumes.com
---
This resume builder lets you input data to create a resume. A live preview is generated as you type, so you can see how it will look when you download it. 

It's completely free, and you don't even have to create an account if you don't want to. Without an account you can still create and download resumes, but you will have to create an account if you want to save your resumes so you can come back and edit them later. If you're paranoid about me having your data then just download the resume without saving it. It gets sent straight to you and never even hits my database unless you  save it. Though, if you do have some saved resumes, it will remember which one you were working on last when you log back in, which is nice I guess.

Like most of my projects, the goal was to explore some new (to me) technologies. I wanted to build a react frontend that strictly used hooks. And specifically I wanted to use the useContext and useReducer hooks together to sort of mimic Redux. 

I also wanted to use Serverless Framework and create something with a completely serverless backend. I used Congnito, DynamoDB, API Gateway, and Lambda, and Serverless Framework helped wrangle those services in an infrastructure as code approach. 

I'm also using Puppeteer to generate the PDFs. That is taking place in a lambda function using lambda layers to provide the Puppeteer library without blowing past the limited disk space allowed for lambda functions.

All in all, the frontend was the most complicated part. The backend felt comparatively simple to build. Thats probably a testament to Serverless Framework's awesomeness.

The useReducer + useContext approach was particularly useful for managing front end state for this application, because the most important piece of state, the resume data, is a complex object. It's a Russian nesting doll in some ways, with objects inside of arrays, inside of objects. But this approach allowed me to easily(ish) write functions to target those specific places in the resume object to update the data within. 