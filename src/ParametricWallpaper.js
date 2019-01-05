import GridSettings from './PGridSettings.js'
//import PImageLoader from './PImageLoader.js'

export default class ParametricWallpaper{

  constructor(){
    this.grid_settings = new GridSettings();
  }

  resolution(resolution){
    if(resolution === undefined){
      return this._resolution;
    }
    this._resolution = resolution();
    console.log(this._resolution);
    setup_new_canvas(this._resolution.x, this._resolution.y);
  }

  show_guide(do_show){
    if(do_show === undefined){
      return this._show_guide;
    }
    this._show_guide = do_show;
  }

  output_mode(output_function){
    this._output_function = output_function;
  }

  draw(){
    this._output_function();
  }

}
