'use strict';
var readdir = require('readdir-absolute');

module.exports = exports = function readdirs(dirs, cb) {
  dirs = dirs.slice();

  var result = [];

  (function next (err, files) {
    if (err) {
      return cb(err);
    } else if (files) {
      result = result.concat(files);
    }
    var dir = dirs.shift();
    if (!dir) {
      return cb(null, result);
    }
    readdir(dir, next);
  })();
};
