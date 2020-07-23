"use strict";
import {paths} from "../gulpfile.babel";
import gulp from "gulp";
import gulpif from "gulp-if";
import replace from "gulp-replace";
import browsersync from "browser-sync";
import yargs from "yargs";
import posthtml from "gulp-posthtml";
import include from "posthtml-include"
import modules from "posthtml-modules";
import layout from "posthtml-extend";


const argv = yargs.argv,
  production = !!argv.production;

gulp.task("views", () => {
  return gulp.src(paths.views.src)
    .pipe(posthtml( [
      include({root: 'src/blocks/modules/'}),
      modules({root: 'src/blocks/modules/'}),
      layout(),
      // variables(({locals: {block : 'src/blocks/modules/footer/'}}))

    ]))
    .pipe(gulpif(production, replace(".css", ".min.css")))
    .pipe(gulpif(production, replace(".js", ".min.js")))
    .pipe(gulp.dest(paths.views.dist))
    .pipe(browsersync.stream());
});



