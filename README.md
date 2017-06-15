# is-it-weekend

Returns `true` if today is a weekend, otherwise it returns `false`.

This module supports weekends that are not on a Saturday or Sunday if a
country code is provided.

[![Build status](https://travis-ci.org/watson/is-it-weekend.svg?branch=master)](https://travis-ci.org/watson/is-it-weekend)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install is-it-weekend --save
```

## Usage

```js
var weekend = require('is-it-weekend')

// will log `true` if it's Saturday or Sunday
console.log(weekend())
```

## API

### `var bool = weekend([countryCode])`

If no `countryCode` is given, `bool` will be `true` if it's a Saturday
or a Sunday, otherwise `false`.

If a `countryCode` is given, the [custom of that particular
country](https://en.wikipedia.org/wiki/Workweek_and_weekend) will be
followed.

Only [ISO 3166-1
alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes
are supported.

## License

MIT
