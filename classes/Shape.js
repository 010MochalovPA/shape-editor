export default class Shape{
  constructor(name, canvas, width = 400, height = 200, x = canvas.getCanvas().width / 2, y = canvas.getCanvas().height / 2){
    this.name = name;
    this.color = '#' + Math.random().toString(16).substring(2,8).toUpperCase();
    this.canvas = canvas.getCanvas();
    this.x = x,
    this.y = y,
    this.width = width,
    this.height = height, 
    this.editPoints = [
      [this.x - this.width / 2, this.y - this.height / 2],
      [this.x - this.width / 2, this.y + this.height / 2],
      [this.x + this.width / 2, this.y - this.height / 2],
      [this.x + this.width / 2, this.y + this.height / 2],
    ]
  }

  getName(){
    return this.name;
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  getWidth(){
    return this.width;
  }

  getHeight(){
    return this.height;
  }

  getEditPoints(){
    return this.editPoints;
  }

  changePosition(x, y){
    if (x - this.width / 2 <= 8) x = this.width / 2 + 8;
    if (y - this.height / 2 <= 8) y = this.height / 2 + 8;
    if (x + this.width / 2 >= this.canvas.width - 8) x = this.canvas.width - this.width / 2 - 8;
    if (y + this.height / 2 >= this.canvas.height - 8) y = this.canvas.height - this.height /2 - 8;
    this.x = x;
    this.y = y;
    this.changeEditPoints();
  }

  changeEditPoints(){
    this.editPoints = [
      [this.x - this.width / 2, this.y - this.height / 2],
      [this.x - this.width / 2, this.y + this.height / 2],
      [this.x + this.width / 2, this.y - this.height / 2],
      [this.x + this.width / 2, this.y + this.height / 2],
    ]
  }

  drawEditArea(){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
      ctx.lineWidth = 2;
      ctx.setLineDash([4]);
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.strokeStyle = 'black';
      ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      ctx.stroke();
    }
  }
  getXY(){
    return [this.x,this.y];
  }
  
  editScale(MouseX, MouseY){
    if (MouseX < this.x && MouseY < this.y){
      const diffX = (this.x - this.width / 2) - MouseX;
      const diffY = (this.y - this.height / 2) - MouseY;
      this.width = this.width + diffX;
      this.height = this.height + diffY;
      this.x = this.x - diffX / 2;
      this.y = this.y - diffY / 2;
      this.changeEditPoints();
    }
    if (MouseX > this.x && MouseY < this.y) {
      const diffX = MouseX -(this.x + this.width / 2);
      const diffY = (this.y - this.height / 2) - MouseY;
      this.width = this.width + diffX;
      this.height = this.height + diffY;
      this.x = this.x + diffX / 2;
      this.y = this.y - diffY / 2;
      this.changeEditPoints();
    }
    if (MouseX < this.x && MouseY > this.y) {
      const diffX = (this.x - this.width / 2) - MouseX;
      const diffY = MouseY - (this.y + this.height / 2);
      this.width = this.width + diffX;
      this.height = this.height + diffY;
      this.x = this.x - diffX / 2;
      this.y = this.y + diffY / 2;
      this.changeEditPoints();
    }
    if (MouseX > this.x && MouseY > this.y) {
      const diffX = MouseX -(this.x + this.width / 2);
      const diffY = MouseY - (this.y + this.height / 2);
      this.width = this.width + diffX;
      this.height = this.height + diffY;
      this.x = this.x + diffX / 2;
      this.y = this.y + diffY / 2;
      this.changeEditPoints();
    }
  }
}

class ShapeEllipse extends Shape{
  draw(canvas, checkX = 0,checkY = 0){
    if (canvas.getContext){      
      let ctx = canvas.getContext('2d');
      ctx.setLineDash([]);
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.ellipse(this.x, this.y, this.width / 2,  this.height / 2, 0, 0, Math.PI*2);
      ctx.fill();
      if (ctx.isPointInPath(checkX, checkY)) return this;
    }
  }
}

class ShapeTriangle extends Shape{
  draw(canvas, checkX = 0, checkY = 0){
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');
      ctx.setLineDash([]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.moveTo(this.x, this.y - this.height / 2);
      ctx.lineTo(this.x - this.width / 2, this.y + this.height / 2);
      ctx.lineTo(this.x + this.width / 2, this.y + this.height / 2);
      ctx.fill();
      if (ctx.isPointInPath(checkX, checkY)) return this;
    }
  }
}

class ShapeRectangle extends Shape{
  draw(canvas, checkX = 0, checkY = 0){
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');
      ctx.setLineDash([]);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.rect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
      ctx.fill();
      if (ctx.isPointInPath(checkX, checkY)) return this;
    }
  }
}

export {ShapeEllipse, ShapeTriangle, ShapeRectangle };