import * as $ from "gulp-web-build";

/** Installs all dependencies and prepares the project. */
$.task("prep", function prep_fn (cb) {
  return new $.VSCode()
    .excludeGitIgnores()
    // add all gulp task runners to vsc
    .addGulpTasks() 
    // add debuggers to vsc
    .addDebugger($.VSCodeDebuggers.Gulp())
    // don't forget to run
    .run(cb);
});

/** Builds the project unminified with sourcemaps. */
$.task("build", function build_fn (cb) {;
  return new $.Build({ minify: false, sourcemaps: true })
    .addTs("./src/*.ts", "./bin/js", "./bin/dts")
    .run(cb);
});

/** Cleans the project. */
$.task("clean", function clean_fn (cb) {
  new $.Clean()
    .delVSCodeExcludes("node_modules")
    .del("./bin")
    .run(cb);
});

/** Rebuilds the project. */
$.task("rebuild", "clean", "build");