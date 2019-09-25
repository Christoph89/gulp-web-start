import * as $ from "gulp-web-build";
import * as path from "path";
import * as connect from "connect";
import * as serveStatic from "serve-static";
import * as yargs from "yargs";

/** Adds a test server task. */
export function addServerTask(name: string, port: number, folder: string, debugFolder?: string)
{
  $.task("run", function run(cb) 
  { 
    var args=yargs.argv;
    var folder: string;
    if (debugFolder && args.debug)
      folder=debugFolder;
    var port=args.port || 8080;
    var dir=path.resolve(__dirname+"/"+folder);
    connect().use(serveStatic(dir)).listen(port, function(){
      console.log(`Server running from ${dir} on port ${port}. Use http://localhost:${port} for testing...`);
    });
  });
}