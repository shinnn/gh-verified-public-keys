# gh-verified-public-keys

[![NPM version](https://img.shields.io/npm/v/gh-verified-public-keys.svg)](https://www.npmjs.com/package/gh-verified-public-keys)
[![Build Status](https://travis-ci.org/shinnn/gh-verified-public-keys.svg?branch=master)](https://travis-ci.org/shinnn/gh-verified-public-keys)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-verified-public-keys.svg)](https://coveralls.io/github/shinnn/gh-verified-public-keys)
[![Dependency Status](https://david-dm.org/shinnn/gh-verified-public-keys.svg)](https://david-dm.org/shinnn/gh-verified-public-keys)
[![devDependency Status](https://david-dm.org/shinnn/gh-verified-public-keys/dev-status.svg)](https://david-dm.org/shinnn/gh-verified-public-keys#info=devDependencies)

Get the verified [public keys](https://help.github.com/articles/generating-ssh-keys/) associated with a given [Github](https://github.com/) account

```javascript
const ghVerifiedPublicKeys = require('gh-verified-public-keys');

ghVerifiedPublicKeys('othiym23').then(keys => {
  keys; //=> [{id: 1965441, key: 'ssh-dss AAAAB3Nza...'}, {id: 3322010, key: '...'}, ...] 
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-verified-public-keys
```

## API

```javascript
const ghVerifiedPublicKeys = require('gh-verified-public-keys');
```

### ghVerifiedPublicKeys(*username* [, *options*])

*username*: `String` (a Github username, for example [https://github.com/shinnn](https://github.com/shinnn) → `'shinnn'`)  
*options*: `Object` ([`gh-get` options](https://github.com/shinnn/gh-get#options))  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) instance

It makes an [API](https://developer.github.com/v3/) request to [get an array of the verified public keys for a Github account](https://developer.github.com/v3/users/keys/#list-public-keys-for-a-user), and returns a promise.

The promise will be [*fulfilled*](https://promisesaplus.com/#point-26) with a [JSON object](https://developer.github.com/v3/rate_limit/#response) if successful, otherwise [*rejected*](https://promisesaplus.com/#point-30) with an error.

## License

Copyright (c) 2015 - 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
