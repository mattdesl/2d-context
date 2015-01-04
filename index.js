module.exports = function createCanvas2D(opt) {
    opt = opt||{}
    var canvas = opt.canvas || document.createElement('canvas')
    if (typeof opt.width === 'number')
        canvas.width = opt.width
    if (typeof opt.height === 'number')
        canvas.height = opt.height
    try {
        return canvas.getContext('2d', opt) || null
    } catch (e) {
        return null
    }
}