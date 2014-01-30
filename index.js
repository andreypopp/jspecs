"use strict";
var sweet = require('sweet.js');
var bddStx = sweet.loadNodeModule(__dirname, 'sweet-bdd');
var assertionsStx = sweet.loadNodeModule(__dirname, 'sweet-assertions');

function compile(src) {
  return sweet.compile(src, {modules: [bddStx, assertionsStx]});
}

require.extensions['.jspc'] = function(module, filename) {
  var content = require('fs').readFileSync(filename, 'utf8');
  content = "var assert = require('assert');\n" + content;
  var compiled = compile(content).code;
  module._compile(compiled, filename);
};

module.exports = require('mocha');
