import ParametricWallpaper from './ParametricWallpaper.js'
import globals from './PGlobals.js'
import {setup_window_constants} from "./PWindowConstants.js"

let p = new p5();

window.setup = function() {
  angleMode(DEGREES);
  imageMode(CENTER);
  pixelDensity(1);

  globals.parametricWallpaper = new ParametricWallpaper({x:1000, y:2000});

  setup_window_constants(globals.parametricWallpaper);
  setup_wallpaper(globals.parametricWallpaper);
}

window.draw = function() {
  background(255);
  wallpaper_background();
  globals.parametricWallpaper.draw();
  noLoop();
}

window.setup_new_canvas = function(width, height){
    console.log(width, height);
    globals.p5 = p;
    globals.gfx = createCanvas(width, height).drawingContext;
    globals.canvas = globals.gfx.canvas;
    loop();
}
