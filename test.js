'use strict'

var test = require('tape')
var weekend = require('./')

test('monday', function (t) {
  todayIs(1)
  t.equal(weekend(), false)
  t.end()
})

test('tuesday', function (t) {
  todayIs(2)
  t.equal(weekend(), false)
  t.end()
})

test('wednesday', function (t) {
  todayIs(3)
  t.equal(weekend(), false)
  t.end()
})

test('thursday', function (t) {
  todayIs(4)
  t.equal(weekend(), false)
  t.end()
})

test('friday', function (t) {
  todayIs(5)
  t.equal(weekend(), false)
  t.end()
})

test('saturday', function (t) {
  todayIs(6)
  t.equal(weekend(), true)
  t.end()
})

test('sunday', function (t) {
  todayIs(0)
  t.equal(weekend(), true)
  t.end()
})

function todayIs (d) {
  Date.prototype.getDay = function () { // eslint-disable-line no-extend-native
    return d
  }
}
