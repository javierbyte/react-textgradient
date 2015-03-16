# React Textgradient

A React component that creates text gradients with CSS, including a SVG fallback.

[Live demo](http://javierbyte.github.io/react-textgradient/)

[![react-textgradient](screenshot.png)](http://javierbyte.github.io/react-textgradient/)

# Installation

    npm install react-textgradient --save

# Usage

First, require the component

    var TextGradient = require('react-textgradient');

And then use it like this:

    <TextGradient
        text='React Text Gradient'
        fromColor='#FFFF00'
        toColor='#FF8008'
        direction='right'
        />

 And you will get the example at the start of the page.

## Props

* `text`: The content.
* `fromColor`: The initial color for the gradient. Can be any valid color for CSS and SVG (HEX, RGBA, RGB, etc...).
* `toColor` The final color of the gradient.
* `fallbackColor`: The color to display on unsupported browsers.
* `direction`: One from 'top', 'left', 'bottom', 'right'.