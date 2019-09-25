"use strict";
exports.__esModule = true;
var $ = require("gulp-web-build");
var path = require("path");
var connect = require("connect");
var serveStatic = require("serve-static");
var yargs = require("yargs");
/** Adds a test server task. */
function addServerTask(name, port, folder, debugFolder) {
    $.task("run", function run(cb) {
        var args = yargs.argv;
        var folder;
        if (debugFolder && args.debug)
            folder = debugFolder;
        var port = args.port || 8080;
        var dir = path.resolve(__dirname + "/" + folder);
        connect().use(serveStatic(dir)).listen(port, function () {
            console.log("Server running from " + dir + " on port " + port + ". Use http://localhost:" + port + " for testing...");
        });
    });
}
exports.addServerTask = addServerTask;
