export default class EditPoint{
  constructor(x, y, canvas, shape){
    this.x = x;
    this.y = y;
    this.canvas = canvas.getCanvas();
    this.shape = shape;
  }

  draw(checkX, checkY){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'yellow';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 4, 0, Math.PI*2);
      ctx.stroke();
      ctx.fill();
      if (ctx.isPointInPath(checkX, checkY)) return this;
    }
  }

  getParentShape(){
    return this.shape;
  }
}