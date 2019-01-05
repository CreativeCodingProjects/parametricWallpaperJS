import globals from './PGlobals.js'
import { draw_x }from "./PDrawingHelpers.js"

export const output_symbol = function(ParametricWallpaper){

    return function(){
      push();
        translate(width/2, height/2);
        push();
          my_symbol(0, 0);
        pop();
        strokeWeight(2);
        draw_x(0, 0, 5);
      pop();
    }

}

export const output_wallpaper = function(ParametricWallpaper){

  // return function(layer){
  //   push();
  //     set_initial_transforms(pScope);
  //     translate(0, pScope._wedge_size/2.0);
  //     layer.draw_boundry();
  //     layer.animation_function(0, layer.boundary.low, layer.boundary.high);
  //   pop();
  // }

}
