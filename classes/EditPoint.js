export default class EditPoint{

  constructor(x, y, canvas, shape){
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.shape = shape;
  }

  draw(canvas, checkX, checkY){
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(this.x, this.y, 6, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();

    if (ctx.isPointInPath(checkX, checkY)) return this;
  }

  getParentShape(){
    return this.shape;
  }

}