'use strong';

const ghVerifiedPublicKeys = require('.');
const test = require('tape');

process.env.GITHB_TOKEN = '';

test('ghVerifiedPublicKeys()', t => {
  t.plan(7);

  t.strictEqual(ghVerifiedPublicKeys.name, 'ghVerifiedPublicKeys', 'should have a function name.');

  ghVerifiedPublicKeys('isaacs', {token: process.env.TOKEN_FOR_TEST}).then(keys => {
    t.ok(
      Array.isArray(keys),
      'should be resolved with an array.'
    );

    t.deepEqual(
      Object.keys(keys[0]),
      ['id', 'key'],
      'should be resolved with an array of objects with `id` and `key` properties.'
    );
  }).catch(t.fail);

  ghVerifiedPublicKeys('y'.repeat(99)).then(t.fail, err => {
    t.strictEqual(
      err.message,
      `404 Not Found (The github account with the usename "${'y'.repeat(99)}" is not found)`,
      'should fail when it cannot find the specified user.'
    );
  }).catch(t.fail);

  ghVerifiedPublicKeys('shinnn', {token: 'invalid_token'}).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '401 Unauthorized (Bad credentials)',
      'should fail when it cannot get the rate limit status.'
    );
  }).catch(t.fail);

  ghVerifiedPublicKeys(1).then(t.fail, err => {
    t.strictEqual(
      err.message,
      '1 is not a string. Expected a string of Github username, ' +
      'for example https://github.com/shinnn -> \'shinnn\'',
      'should fail when the first argument is not a string.'
    );
  }).catch(t.fail);

  ghVerifiedPublicKeys('').then(t.fail, err => {
    t.strictEqual(
      err.message,
      'Expected a Github username, but received an empty string.',
      'should fail when the first argument is an empty string.'
    );
  }).catch(t.fail);
});
