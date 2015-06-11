var create = require('./')
var test = require('tape').test

test('creates a canvas with a 2D context', function (t) {
  var ctx = create()
  t.ok(ctx instanceof CanvasRenderingContext2D, true, 'got context')
  t.equal(typeof ctx.canvas.getContext, 'function', 'got canvas')
  t.equal(create({ canvas: {} }), null, 'returns null on fail')
  t.end()
})

test('creates a canvas with a 2D context', function (t) {
  var canvas = document.createElement('canvas')
  var ctx = create({ width: 256, height: 128, canvas: canvas })
  t.equal(ctx.canvas, canvas, 'allows passing canvas')
  t.equal(canvas.width, 256, 'sets width')
  t.equal(canvas.height, 128, 'sets height')
  t.end()
})
