export const draw_x = function(x, y, size){
  push();
    stroke(255,0,0);
    line(x, y, x-size, y-size);
    line(x, y, x+size, y-size);
    line(x, y, x-size, y+size);
    line(x, y, x+size, y+size);
  pop();
}
