//import globals      from './PGlobals.js'
//import PImageLoader from './PImageLoader.js'

export default class ParametricWallpaper{

  constructor(){
  }

  resolution(resolution){
    this._resolution = resolution();
    console.log(this._resolution);
    setup_new_canvas(this._resolution.x, this._resolution.y);
  }

  grid_type(type){
    this._grid_type = type;
  }

  output_mode(output_function){
    this._output_function = output_function;
  }

  draw(){
    this._output_function(this._grid_type);
  }

}
