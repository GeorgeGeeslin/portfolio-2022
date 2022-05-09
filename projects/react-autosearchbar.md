---
layout: layouts/project.njk
title: react-autosearchbar
description: This is a reusable component I created and published on npm. I
  needed a searchbar with autocomplete that would match any items containing a
  given character combination, and bold the matching characters, regardless of
  where or how many times the characters appear.
date: 2019-07-13T05:00:00.000Z
featuredImage: /images/uploads/react-autosearchbar-cover.png
badges:
  - React
  - Styled Components
  - npm
showGithub: true
github: https://github.com/GeorgeGeeslin/react-autosearchbar
showLaunch: true
launch: https://www.npmjs.com/package/react-autosearchbar
---
This is a reusable component I created and published on npm. I needed a searchbar with autocomplete that would match any items containing a given character combination, and bold the matching characters, regardless of where or how many times the characters appear.

The most popular autocomplete components I could find on npm at the time only matched characters from the begin of the search items, which just wasn't going to cut it for my purposes.

This component is super easy to use and implement and has all the typical features you'd expected like selecting items by clicking or using arrow keys. It has several optional props for customization and it's only peer dependency is styled-components.

Here's a simple [example](https://codesandbox.io/embed/react-autosearchbar-46z17) so you can see the search bar in action.
