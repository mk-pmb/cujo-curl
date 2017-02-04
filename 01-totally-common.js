'use strict';

var thingy = { common: true, js: true };
module.exports = thingy;

setTimeout(function () {
  console.log("Sorry I'm late.");
}, 10);

console.log('This is gonna fail:');
try {
  Function.notSupportedInThisBrowser();
} catch (err) {
  console.log('Told you so! Gonna re-throw that', String(err).split(/ /)[0]);
  throw err;
}
console.log('Still alive!?');

thingy.totally = true;
