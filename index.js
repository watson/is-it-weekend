'use strict'

var data = [
  [['co', 'cr', 'gq', 'in', 'mx', 'kp', 'ug'], [0]], // Sunday (0)
  [['bn'], [0, 5]], // Friday, Sunday (0, 5)
  [['bd', 'dj'], [5]], // Friday (5)
  [['ir'], [4, 5]], // Thursday, Friday (4, 5)
  [['np'], [6]], // Saturday (6)
  [['af', 'sa', 'dz', 'bh', 'eg', 'iq', 'il', 'jo', 'kw', 'ly', 'mv', 'om', 'ps', 'qa', 'sd', 'sy', 'ye', 'my', 'ae'], [5, 6]] // Friday, Saturday (5, 6)
]

var index = {}

for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i][0].length; j++) {
    index[data[i][0][j]] = data[i][1]
  }
}

module.exports = function (cc) {
  if (cc) cc = cc.toLowerCase()
  return index[cc] ? customDays(index[cc]) : fallback()
}

function customDays (days) {
  var d = (new Date()).getDay()
  for (var i = 0; i < days.length; i++) {
    if (d === days[i]) return true
  }
  return false
}

function fallback () {
  var d = (new Date()).getDay()
  return d === 0 || d === 6
}
