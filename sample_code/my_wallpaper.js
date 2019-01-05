//your parameter variables go here!
var thingyWidth  = 100;
var thingyHeight = 100;

function setup_wallpaper(pWallpaper){
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(NINE_PORTRAIT);
}

function wallpaper_background(){
  background(255,255,240);
}

function my_symbol(x, y){
  rect(x,y,thingyWidth, thingyHeight);
}
