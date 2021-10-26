# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

![](assets/design/desktop-preview.jpg)

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

Frontend Mentor challenges help creators practice constructing websites of various layouts using a variety of methods. As one of the first Frontend Mentor challenges I tackled, I primarily used Vanilla HTML, JavaScript and CSS with the SASS extention.

This challenge's learning curve I tackled:
- implementation of multi-level navigation
- ensuring mobile navigation reacts accordingly

### The challenge

Users should be able to:
- Click through a multi-level navigation menu
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

![](assets/images/blogr-sqr.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://marjoree-blogr-landing-page.netlify.app/)

## My process

Originally, I constructed the site with Vanilla HTML, CSS, and JS.
While the process was an initial success, I came across issues that required me to look further into. I circled back and recreated the stylesheets to implement SASS functions such as scoping.

### Built with

- Semantic HTML5 markup
- Modern JavaScript
- SASS - CSS Syntactic Sugar
- CSS Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned


#### SASS

SASS stands for Syntactically Awesome StyleSheets which acts as an extension for CSS
```css
header{
        nav{
            a.navbar-logo{
                padding: 0rem;
            }
            ul{
                color: $almost-black;
                text-align: center;
                li{
                    color: $almost-black;
                    text-align: center;
                    a{
                        color: $almost-black;
                    }
                }
            }
        }
    }
```

#### JavaScript

I've already grown accustomed to media queries in CSS/SASS, yet the question of 'How to implement media queries in JS' popped up for me. This is how I chose to add event listeners for menu togglers within the burger menu.

For the multiple menus within the main menu, we have to parse through each item that comes back when we retrieve each item containing class 'subNav'. Otherwise, JS will only add the event listener to the first item to come back with the matching class.

```js
for(let i = 0 ; i < mobileSub.length; i++){
            let childEl = mobileSub[i];
            let matchingSub = subNav[i]
            childEl.addEventListener('click', () => {
                matchingSub.style.display = matchingSub.style.display == 'none' ? 'table' : 'none';
        })}
```

### Continued development

I intend on researching SVGO for Optimizing SVG files incorporated in projects and how it affects performance and speed.
### Useful resources

- [Background-positioning](https://css-tricks.com/almanac/properties/b/background-position/) - 
<!-- - [Example resource 2](https://www.example.com) -  -->

## Author

- Website - [www.marjoree.com](https://www.marjoree.com)
- Frontend Mentor - [@mfargas](https://www.frontendmentor.io/profile/mfargas)
- Twitter - [@marjoree_js](https://www.twitter.com/marjoree_js)

## Acknowledgments

