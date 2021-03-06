# [React Text Gradient.](http://javierbyte.github.io/react-textgradient/)

## UNMAINTAINED

Unmantained for now.

It seems that there are modern ways to do this, see https://css-tricks.com/snippets/css/gradient-text/

---

A React component that creates text gradients with CSS, including a SVG fallback.

[Live demo.](http://javierbyte.github.io/react-textgradient/)

[![react-textgradient](screenshot.png)](http://javierbyte.github.io/react-textgradient/)

# Features.
* Uses CSS gradients when possible (Chrome, Safari, iOS, Android).
* Uses SVG as fallback on Firefox.
* The text remains as fluid text (never replaced with svg).
* Font size, family, weight, etc... controlled by CSS as normal.

# Installation.

```js
npm install react-textgradient --save
```

# Usage.

First, require the component

```js
var TextGradient = require('react-textgradient');
```

And then use it like this:

```jsx
<TextGradient
  text='React Text Gradient'
  fromColor='#FFFF00'
  toColor='#FF8008'
  direction='right' />
```

 And you will get the example of the start of the page.

## Props.

* `text`: The content.
* `fromColor`: The initial color for the gradient. Can be any valid color for CSS and SVG (HEX, RGBA, RGB, etc...).
* `toColor` The final color of the gradient.
* `fallbackColor`: The color to display on unsupported browsers. Optional, defaults to `toColor`.
* `direction`: One from 'top', 'left', 'bottom', 'right'. Optional, defaults to 'right'.

## Roadmap.
* Support for radial gradients.
* Arbitrary gradient direction.
