// import drawingFunctions from "../modules/drawingFunctions";

class Shape{
  constructor(name, canvas, size = { width: 400, height: 200 }, coordinates = {x: canvas.width / 2, y: canvas.height / 2}){
    this.name = name;
    this.color = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    this.canvas = canvas;
    this.editArea = {
      x: coordinates.x,
      y: coordinates.y,
      width: size.width,
      height: size.height,
    };
    this.size = size;
    this.coordinates = coordinates;
  }

  changePosition(x, y){
    this.editArea.x = x;
    this.editArea.y = y;
  }
}

class ShapeEllipse extends Shape{
  drawShape(checkX = 0,checkY = 0){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
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
  drawShape(checkX = 0, checkY = 0){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
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
  drawShape(checkX = 0, checkY = 0){
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.rect(this.editArea.x - this.editArea.width / 2, this.editArea.y - this.editArea.height / 2, this.editArea.width, this.editArea.height);
      ctx.fill();
      ctx.stroke();
      if (ctx.isPointInPath(checkX, checkY)) return this;
    }
  }
}

export { ShapeEllipse, ShapeTriangle, ShapeRectangle };