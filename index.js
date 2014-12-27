module.exports = function createCanvas2D(opt) {
    opt = opt||{}
    var canvas = opt.canvas || document.createElement('canvas')
    if (typeof opt.width === 'number')
        canvas.width = opt.width
    if (typeof opt.height === 'number')
        canvas.height = opt.height
    if (typeof canvas.getContext !== 'function')
        throw new Error('canvas.getContext() not supported')

    try {
        return canvas.getContext('2d', opt)
    } catch (e) {
        throw new Error('could not get 2D context: ' + e)
    }
}