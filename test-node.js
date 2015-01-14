var create = require('./')
var test = require('tape').test

test("returns null in node", function(t) {
    t.equal(create(), null, 'is null')
    t.end()
})