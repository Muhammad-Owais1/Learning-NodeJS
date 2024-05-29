console.log('Bismillah')
//Run on terminal with 'node ./server.js


var slugify = require('slugify')
// import slugify from "slugify";

let a = slugify('some string')
console.log(a)

let b = slugify('some string', '_')
console.log(b)