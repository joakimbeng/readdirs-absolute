'use strict';
var path = require('path');
var test = require('tape');

var readdirs = require('./');

test('readdirs', function (assert) {
  readdirs([__dirname, path.join(__dirname, 'node_modules')], function (err, files) {
    assert.error(err, 'It should not crash');
    assert.equal(Array.isArray(files), true, 'It should give an array');
    assert.equal(files.every(function (file) { return file.indexOf(__dirname) === 0; }), true, 'All file paths should be absolute');
    assert.equal(files.some(function (file) { return file.indexOf(path.join(__dirname, 'node_modules')) === 0; }), true, 'There should be some files from the second folder');
    assert.end();
  });
});
