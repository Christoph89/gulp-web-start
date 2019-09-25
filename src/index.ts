import * as $ from "gulp-web-build";
import * as path from "path";
import * as connect from "connect";
import * as serveStatic from "serve-static";
import * as yargs from "yargs";

export module WebServer
{
  /** Adds a test server task. */
  export function listen(taskName: string, port: number, folder: string, debugFolder?: string)
  {
    $.task(taskName, function run(cb) 
    { 
      var args=yargs.argv;
      var folder: string;
      if (debugFolder && args.debug)
        folder=debugFolder;
      var port=args.port || 8080;
      var dir=path.resolve(folder);
      connect().use(serveStatic(dir)).listen(port, function(){
        console.log(`Server running from ${dir} on port ${port}. Use http://localhost:${port} for testing...`);
      });
    });
  }
}

exports.module=WebServer;