//your parameter variables go here!
var thingy_width  = 20;
var thingy_height = 20;

function setup_wallpaper(pWallpaper){
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true);//set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 100;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset  = 50;

}

function wallpaper_background(){
  background(255,255,240);
}

function my_symbol(x, y){
  rect(x,y,thingy_width, thingy_height);
}
