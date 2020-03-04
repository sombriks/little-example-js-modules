// using esm to suppor es6 modules on commonsjs-style node runtime
require = require("esm")(module)
module.exports = require("./app/main.js")
