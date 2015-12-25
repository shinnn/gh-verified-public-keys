/*!
 * gh-verified-public-keys | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-verified-public-keys
*/
'use strict';

const ghGet = require('gh-get');

const USER_AGENT = 'https://github.com/shinnn/gh-verified-public-keys';

module.exports = function ghVerifiedPublicKeys(user, options) {
  if (typeof user !== 'string') {
    return Promise.reject(new TypeError(
      String(user) +
      ' is not a string. Expected a string of Github username,' +
      ' for example https://github.com/shinnn -> \'shinnn\''
    ));
  }

  if (user === '') {
    return Promise.reject(new TypeError(
      'Expected a Github username, but received an empty string.'
    ));
  }

  if (options) {
    options.headers = Object.assign({'user-agent': USER_AGENT}, options.headers);
  } else {
    options = {
      headers: {
        'user-agent': USER_AGENT
      }
    };
  }

  return ghGet(`/users/${user}/keys`, options).then(response => response.body, err => {
    if (err.message === '404 Not Found') {
      err.message += ` (The github account with the usename "${user}" is not found)`;
    }

    return Promise.reject(err);
  });
};
