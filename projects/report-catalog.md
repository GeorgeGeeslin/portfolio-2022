---
layout: layouts/project.njk
title: Report Catalog
description: The Report Catalog is an internal web application I developed at a
  previous job, so I won't be able provide a link or share any code. I can,
  however, describe the project and provide some screenshots.
date: 2018-05-09T05:00:00.000Z
featuredImage: /images/uploads/report-catalog-cover.png
badges:
  - React
  - DreamFactory
  - Material-UI
  - PostgreSQL
  - Groovy
showGithub: false
github: none
showLaunch: false
launch: none
---
The Report Catalog is an internal web application I developed at a previous job, so I won't be able provide a link or share any code. I can, however, describe the project and provide some screenshots.

## Introducing the Problem

The place where I worked had a lot of reports, and reporting is a big part of their product. It's good to have a lot of reports. We can get useful data into the right hands, and our users are satisfied that they have the reports that they need. But the downside of having a lot of anything tends to be keeping track of what you have. As our list of reports grows, along with our company, it became clear that we needed to come up with a way for our support team to search through, classify, and view meta data for our available reports - with the larger goal of eventually opening this up to end users.

As I said, there are a lot of reports, and not all of the useful information can be extracted programmatically from the reports themselves, so another purpose of this project is to crowd source the gathering of that data out to our subject area experts.

## The Solution

The product, from which these reports are ultimately run, is a large ERP application that provides just about everything needed to run a K-12 school district. We’re talking finances, HR, managing certifications, orders and requisitions, grading, state reporting requirements, and a ton of other areas. Within the Report Catalog, the reports are represented as cards that expand when clicked to show additional details. Certain fields are editable by the user. Users can also upload screenshots of the reports themselves so that it's easy to know what a report actually looks like. These screenshots come from internal test environments that use mock data, so no personal information is exposed.

Here's an overview of the web app:

The search bar, with autocomplete lets users search through reports that match their parameters on the left.

<span class="gif-container">![search autocomplete](/images/uploads/report-catalog-autocomplete.gif)</span>

The drop down menus on the left let the users narrow their results to reports matching their specific parameters.

<span class="gif-container">![search criteria](/images/uploads/report-catalog-search-criteria.gif)</span>

Users can edit certain fields to provide helpful information about reports and make the Report Catalog more searchable.

<span class="gif-container">![edit](/images/uploads/report-catalog-edit.gif)</span>

Users can also upload images, with the idea being that they should upload screenshots of the reports themselves that correspond to the report's various output types.

<span class="gif-container">![upload photo](/images/uploads/report-catalog-upload-photo.gif)</span>

## Now, a little about the stack.

### Front End
I used React for the front end along with the React component library Material-UI which provides some slick looking material design inspired UI components.

### Back End
The data is coming from a PostgreSQL database. When users select a search criteria a function (postgres for stored procedure) gets called to return the reports. The menu items themselves are populated via DreamFactory API end-points which are just acting upon tables in the database.

### The Middle
I used DreamFactory to provide several things. First, it provides an API the front end can use to perform CRUD operations on the database. It also provides user authentication and file storage, which is used to hold the screenshots. The images themselves reside in DreamFactory, the database just stores a URL used to retrieve the image.

### Gathering Data
There are a couple sources of data, other than the domain knowledge being crowd sourced from staff. First there is the Subversion repository where the reports reside. Then there is a second database that is tied to a different tool use for approving reports for production. This is where the approved version number comes from.

I wrote a script using Groovy to consolidate this data and upload it into the Report Catalog's database. I used the Java library [SVNKit](https://svnkit.com/) to get at the Subversion data.



