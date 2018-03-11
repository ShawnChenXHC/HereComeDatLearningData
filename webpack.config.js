var production = require("./config/prod");
var dev = require("./config/dev");

var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build';

if( isProd ) {
  module.exports = production;
} else {
  module.exports = dev;
}