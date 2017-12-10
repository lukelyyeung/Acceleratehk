# Standalone About me page for Accelerate Bootcamp
---
A single page consists of 2 parts:

1. Introduction
    * A "about ME" div for self-introduction and skill sets.
    * A feeds section for introducing my hobbies
    * A banner section for brief biography
2. Photo album with pagination
    * Photos taken in trips
    * Board games sharing

## Library/Toolkit/webfont
---
1. **Bootstrap**
    * Bootstrap.min.js (ver 3.3.7)
    * Bootstrap.min.css (ver. 3.3.7) Mainly for the grid system, repsonsive design and `tooltip` function
2. **Jquery**
    * Jquery.js (ver. 3.2.1)
    * For the animation like `fadeIn` and `fadeOut`. Also pagination and ⋅⋅⋅tooltips.
3. **Font Awesome**
    * font-awesome.min.css (ver. 4.7.0)
    * Beautiful icons for the hyperlink of social platform.

### header
---
1. **Jquery** 
    * function `.animate() ` for logo animation.
    * The Logo animation breaks the repsonsive design? Not yet solved.
2. **Bootstrap** 
    * 1 `col-sm-6` surrounded by 2 `col-sm-3` for centering the head ⋅⋅⋅statment.
3. Primary navigation
    * `width`of each `li` inside the primary-nav is set to 160px.
    * `display`of each `li` is set to be `inline-block`.

### about Me
---
1. **Bootstrap** 
    * `col-sm-8` `div` for the self introduction. 
    * `col-sm-4` `aside` for the profile  picture. 
    * 9 `col-sm-3``form-group``div` for the skill sets.
    * Set `data-toggle` to `tooltip` for each `p` in `form-group`.
    * Initiate `.tooltip()` in js. 

### Hobbies
---
1. **Bootstrap**
    * `col-sm-4``div` for each hobby.

### Brief Biography
---
1. **Bootstrap**
    * `col-sm-6``div` for photo and description.
    * `a` with class name `.next` and `.prev` as button for pagination.

2. **Jquery**
    * Initiate `$("div > .biography:gt(0)").hide()` to hide all but first `.biography`. 
    * `next` and `prev` with `onclick` attribute set to `plusGraphs(graphIndex)` function which add 1 or -1 to the `graphIndex` and pass as argument to `showGraphs(n)` function. 
    * `showGraphs(n)` first create variable `numItems` assigned to the number of `.biography` found as children of `div`.
    * Then, use `.each` to hide all `.biography` which does not match ⋅⋅⋅the current `graphIndex`.
    * When `graphIndex` is less than 1, it will be assigned to `Numitem` which represents the last `.biography`.

### Photo Album
---
1. **Bootstrap**
    * `col-sm-7``div` for photo and `col-sm-5` for description.
    * `a` with class name `next` and `prev` as button for pagination.
    * `span` with class name `dot` for specific pagination.

2. **Jquery**
    * Similar to the Banner part.
    * Set `dot` with `onclick` attribute set to 
    `plusSlides(slideIndex)` function which pass a specific number as ⋅⋅⋅argument to `showSlides(n)` function.
    * The `showSlides(n)` also includes a part to remove classname ⋅⋅⋅`.active` from each `dot` children found in `.dot-bar`. And then add`.active` to the `dot` just clicked, which will make it changes ⋅⋅⋅color.

### footer
---
1. **font-awesome**
    * `a` with class name `fa` to create icon for contact.

### Built With

* Notepad++ 7.5.1

## Authors

* **Luke LY Yeung** - *Layout* *content* *coding*