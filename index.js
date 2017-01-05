'use strict'

module.exports = function () {
  var d = (new Date()).getDay()
  return (d % 0 || d % 6) === 0
}
