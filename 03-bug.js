/*jslint indent: 2, maxlen: 80, browser: true */
(function () {
  'use strict';
  var curl = window.curl;
  console.log('curl version:', curl.version,
    '\tin browser:', navigator.userAgent.match(/\S+$/)[0]);
  function onModLoad(mod) { console.log('I haz module!', mod); }
  function onModFail(err) { console.error('Y u no module?', err); }
  curl('curl/loader/cjsm11!./01-totally-common.js', onModLoad, onModFail);
}());
