import * as outputs   from "./POutputFunctions.js"

//althugh it isn't ideal to pollute the global variable space this is done for sake of ease!
//keeping in mind this library is for absolute beginners to code!
export const setup_window_constants = function(pWallpaper){

  window.DEVELOP_GLYPH    = outputs.output_symbol(pWallpaper);
  window.GRID_WALLPAPER   = outputs.grid_wallpaper(pWallpaper);
  window.GLIDE_WALLPAPER  = outputs.glide_wallpaper(pWallpaper);

  window.FIT_TO_SCREEN    = function(){
                                          window.addEventListener("resize", function(){
                                            pWallpaper.resolution(function(){return {x:window.innerWidth, y:window.innerHeight, scale:1};});
                                          });

                                          return {x:window.innerWidth, y:window.innerHeight, scale:1};
                                        }

  window.NINE_LANDSCAPE     = function(){return {x:2000, y:1000,   scale:1}};
  window.NINE_PORTRAIT      = function(){return {x:1000, y:2000,   scale:1}};
  window.A4                 = function(){return {x:2480, y:3508,   scale:300/72.0}};
  window.A3                 = function(){return {x:3508, y:2480*2, scale:300/72.0}};

}
