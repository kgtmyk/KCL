// var foo = require('./printfoo.js');
// console.log(foo. printFoo());

var server = require('./server');
var router = require('./router');

server.start(router.route);
