"use strict";
exports.__esModule = true;
var $ = require("gulp-web-build");
var path = require("path");
var connect = require("connect");
var serveStatic = require("serve-static");
var yargs = require("yargs");
var WebServerTask;
(function (WebServerTask) {
    /** Adds a test server task. */
    function listen(taskName, port, folder, debugFolder) {
        $.task(taskName, function run(cb) {
            var args = yargs.argv;
            if (debugFolder && args.debug)
                folder = debugFolder;
            var port = args.port || 8080;
            var dir = path.resolve(folder);
            connect().use(serveStatic(dir)).listen(port, function () {
                console.log("Server running from " + dir + " on port " + port + ". Use http://localhost:" + port + " for testing...");
            });
        });
    }
    WebServerTask.listen = listen;
})(WebServerTask = exports.WebServerTask || (exports.WebServerTask = {}));
exports.module = WebServerTask;
