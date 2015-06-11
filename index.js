var getContext = require('get-canvas-context')

module.exports = function get2DContext (opt) {
  return getContext('2d', opt)
}
