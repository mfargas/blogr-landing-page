# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://marjoree-blogr-landing-page.netlify.app/)

## My process

Originally, I constructed the site with Vanilla HTML, CSS, and JS.
While the process was an initial success, I came across issues that required me to look further into. I have recently grown accustomed to SASS am circling back to this project's styling to better improve its functionality.

The components of interest were the navbar's submenu section, the hamburger changing, and the multiple SVGs handled throughout this project. For this reason, I am restructuring the Vanilla CSS styling to SASS and will look into SGVO for SVG Optimizing.

### Built with

- Semantic HTML5 markup
- SASS
- Modern JavaScript
- SVGO
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<label for="toggle">&#9776;</label>
<input type="checkbox" id="toggle" />
```
```css
label{
    display: none;
    font-size: 26px;
    width: 25px;
    float: right;
}

nav ul li:focus-within ul{
    display: block;
    position: absolute;
    background-color: white;
    border-radius: 5px;
}
```
<!-- ```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
``` -->

### Continued development

k
### Useful resources

- [Background-positioning](https://css-tricks.com/almanac/properties/b/background-position/) - 
<!-- - [Example resource 2](https://www.example.com) -  -->

## Author

- Website - [www.marjoree.com](https://www.marjoree.com)
- Frontend Mentor - [@mfargas](https://www.frontendmentor.io/profile/mfargas)
- Twitter - [@marjoree_js](https://www.twitter.com/marjoree_js)

## Acknowledgments

