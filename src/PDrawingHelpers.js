import globals from './PGlobals.js'

export const draw_x = function(x, y, size){
  push();
    stroke(255,0,0);
    line(x, y, x-size, y-size);
    line(x, y, x+size, y-size);
    line(x, y, x-size, y+size);
    line(x, y, x+size, y+size);
  pop();
}

export const draw_dashed_rect = function(x, y, width, height){
  var ctx = globals.gfx;

  ctx.save();
    ctx.strokeStyle = "#777777"
    ctx.beginPath();
    ctx.setLineDash([5, 8]);
    ctx.moveTo(x, y);
    ctx.lineTo(x+width, y);
    ctx.lineTo(x+width, y+height);
    ctx.lineTo(x, y+height);
    ctx.lineTo(x, y);
    ctx.stroke();
  ctx.restore();

}
