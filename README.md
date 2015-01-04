# 2d-context

Grabs a CanvasRenderingContext2D, returning null if it doesn't exist. Similar to [webgl-context](https://nodei.co/npm/webgl-context/).

```js
var context = require('2d-context')()
var canvas = context.canvas
```

or

```js
var canvas = document.createElement('canvas')

var context = require('2d-context')({
    canvas: canvas,
    alpha: true,
    width: 256,
    height: 256    
})
```

## Usage

[![NPM](https://nodei.co/npm/2d-context.png)](https://nodei.co/npm/2d-context/)

#### `ctx = require('2d-context')([opt])`

Gets a new canvas context with optional parameters:

- `canvas` a canvas element to use, otherwise creates a new element
- `width` a width to set, otherwise no change
- `height` a height to set, otherwise no change
- other attributes are passed to the getContext call, like `alpha` and `storage`

You can then get a reference of the canvas element with `ctx.canvas`. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/2d-context/blob/master/LICENSE.md) for details.
