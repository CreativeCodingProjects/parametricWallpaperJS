import * as outputs   from "./POutputFunctions.js"

//althugh it isn't ideal to pollute the global variable space this is done for sake of ease!
//keeping in mind this library is for absolute beginners to code!
export const setup_window_constants = function(pWallpaper){

  window.DEVELOP_GLYPH      = outputs.output_symbol(pWallpaper);
  window.WALLPAPER          = outputs.output_wallpaper(pWallpaper);

  window.FIT_TO_SCREEN    = function(){
                                          window.addEventListener("resize", function(){
                                            pWallpaper.resolution(function(){return {x:window.innerWidth, y:window.innerHeight};});
                                          });
                                          return {x:window.innerWidth, y:window.innerHeight};
                                        }

  window.NINE_LANDSCAPE     = function(){return {x:2000, y:1000}};
  window.NINE_PORTRAIT      = function(){return {x:2000, y:1000}};
  window.A4                 = function(){return {x:2480, y:3508}};
  window.A3                 = function(){return {x:3508, y:2480*2}};

}
