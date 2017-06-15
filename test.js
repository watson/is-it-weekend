'use strict'

var test = require('tape')
var weekend = require('./')

// normal

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

// israel

test('israel sunday', function (t) {
  todayIs(0)
  t.equal(weekend('IL'), false)
  t.end()
})

test('israel monday', function (t) {
  todayIs(1)
  t.equal(weekend('il'), false)
  t.end()
})

test('israel tuesday', function (t) {
  todayIs(2)
  t.equal(weekend('il'), false)
  t.end()
})

test('israel wednesday', function (t) {
  todayIs(3)
  t.equal(weekend('il'), false)
  t.end()
})

test('israel thursday', function (t) {
  todayIs(4)
  t.equal(weekend('il'), false)
  t.end()
})

test('israel friday', function (t) {
  todayIs(5)
  t.equal(weekend('IL'), true)
  t.end()
})

test('israel saturday', function (t) {
  todayIs(6)
  t.equal(weekend('il'), true)
  t.end()
})

function todayIs (d) {
  Date.prototype.getDay = function () { // eslint-disable-line no-extend-native
    return d
  }
}
