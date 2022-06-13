export default class Shape{
  constructor(name, canvas, size = { width: 400, height: 200 }, coordinates = {x: canvas.getCanvas().width / 2, y: canvas.getCanvas().height / 2}){
    this.name = name;
    this.color = '#' + Math.random().toString(16).substring(2,8).toUpperCase();
    this.canvas = canvas.getCanvas();
    this.editArea = {
      x: coordinates.x,
      y: coordinates.y,
      width: size.width,
      height: size.height,
    };
    this.editPoints = [
      [this.editArea.x - this.editArea.width / 2, this.editArea.y - this.editArea.height / 2],
      [this.editArea.x - this.editArea.width / 2, this.editArea.y + this.editArea.height / 2],
      [this.editArea.x + this.editArea.width / 2, this.editArea.y - this.editArea.height / 2],
      [this.editArea.x + this.editArea.width / 2, this.editArea.y + this.editArea.height / 2],
    ]
    this.isEdit = false;
  }

  getEditPoints(){
    return this.editPoints;
  }

  changePosition(x, y){
    if (x - this.editArea.width / 2 <= 8) x = this.editArea.width / 2 + 8;
    if (y - this.editArea.height / 2 <= 8) y = this.editArea.height / 2 + 8;
    if (x + this.editArea.width / 2 >= this.canvas.width - 8) x = this.canvas.width - this.editArea.width / 2 - 8;
    if (y + this.editArea.height / 2 >= this.canvas.height - 8) y = this.canvas.height - this.editArea.height /2 - 8;
    this.editArea.x = x;
    this.editArea.y = y;
    this.changeEditPoints();
  }

  changeEditPoints(){
    this.editPoints = [
      [this.editArea.x - this.editArea.width / 2, this.editArea.y - this.editArea.height / 2],
      [this.editArea.x - this.editArea.width / 2, this.editArea.y + this.editArea.height / 2],
      [this.editArea.x + this.editArea.width / 2, this.editArea.y - this.editArea.height / 2],
      [this.editArea.x + this.editArea.width / 2, this.editArea.y + this.editArea.height / 2],
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
      ctx.rect(this.editArea.x - this.editArea.width / 2, this.editArea.y - this.editArea.height / 2, this.editArea.width, this.editArea.height);
      ctx.restore();
      ctx.stroke();
      
    }
  }

  editScale(MouseX, MouseY){
    if (MouseX < this.editArea.x && MouseY < this.editArea.y){
      const diffX = (this.editArea.x - this.editArea.width / 2) - MouseX;
      const diffY = (this.editArea.y - this.editArea.height / 2)- MouseY;
      this.editArea.width = this.editArea.width + (diffX);
      this.editArea.height = this.editArea.height + (diffY);
      this.editArea.x = this.editArea.x - diffX / 2;
      this.editArea.y = this.editArea.y - diffY / 2;
      this.changeEditPoints();
    }
    if (MouseX > this.editArea.x && MouseY < this.editArea.y) {
      const diffX = MouseX -(this.editArea.x + this.editArea.width / 2);
      const diffY = (this.editArea.y - this.editArea.height / 2) - MouseY;
      this.editArea.width = this.editArea.width + (diffX);
      this.editArea.height = this.editArea.height + (diffY);
      this.editArea.x = this.editArea.x + diffX / 2;
      this.editArea.y = this.editArea.y - diffY / 2;
      this.changeEditPoints();
    }
    if (MouseX < this.editArea.x && MouseY > this.editArea.y) {
      const diffX = (this.editArea.x - this.editArea.width / 2) - MouseX;
      const diffY = MouseY - (this.editArea.y + this.editArea.height / 2);
      this.editArea.width = this.editArea.width + (diffX);
      this.editArea.height = this.editArea.height + (diffY);
      this.editArea.x = this.editArea.x - diffX / 2;
      this.editArea.y = this.editArea.y + diffY / 2;
      this.changeEditPoints();
    }
    if (MouseX > this.editArea.x && MouseY > this.editArea.y) {
      const diffX = MouseX -(this.editArea.x + this.editArea.width / 2);
      const diffY = MouseY - (this.editArea.y + this.editArea.height / 2);
      this.editArea.width = this.editArea.width + (diffX);
      this.editArea.height = this.editArea.height + (diffY);
      this.editArea.x = this.editArea.x + diffX / 2;
      this.editArea.y = this.editArea.y + diffY / 2;
      this.changeEditPoints();
    }
  }

  isChanges(){
    this.isEdit = true;
  }
  notChanges(){
    this.isEdit = false;
  }
  getEdit(){
    return this.isEdit;
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
      ctx.strokeStyle = this.color;
      ctx.ellipse(this.editArea.x, this.editArea.y, this.editArea.width / 2,  this.editArea.height / 2, 0, 0, Math.PI*2);
      ctx.fill();
      ctx.stroke();
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
      ctx.moveTo(this.editArea.x, this.editArea.y - this.editArea.height / 2);
      ctx.lineTo(this.editArea.x - this.editArea.width / 2, this.editArea.y + this.editArea.height / 2);
      ctx.lineTo(this.editArea.x + this.editArea.width / 2, this.editArea.y + this.editArea.height / 2);
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
      ctx.rect(this.editArea.x - this.editArea.width / 2, this.editArea.y - this.editArea.height / 2, this.editArea.width, this.editArea.height);
      ctx.fill();
      if (ctx.isPointInPath(checkX, checkY)) return this;
    }
  }
}

export {ShapeEllipse, ShapeTriangle, ShapeRectangle };