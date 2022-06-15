import shapeStorage from './Storage.js';
import EditPoint from './EditPoint.js';

class Painter{
  constructor(){
    this.isMouseDown = false;
    this.editPoints = [];
    this.editShape = null;
  }


  addEditShape(shape){
    this.editShape = shape;
  }

  redrawAll(canvas){
    if (canvas.getContext){
      console.log('1');
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fill();
      
      shapeStorage.getStorage().forEach((shape) => {
        shape.draw(canvas);
      });
      if (this.editShape) this.editShape.drawEditArea();
      this.editPoints.forEach(point => {
        point.draw(canvas);
      });
    }
  }

  redraw(canvas){
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      shapeStorage.getStorage().forEach(shape => {
        shape.draw(canvas);
      });
    }
  }

  getMouseStatus(){
    return this.isMouseDown;
  }

  changeMouseStatusOnFalse(){
    this.isMouseDown = false;
    // collection.drawCollection(cloneCanvas);
  }

  clearEdit(){
    this.editPoints = [];
    this.editShape = null;
  }

  addEditPoints(points, shape){
    this.editPoints = [];
    points.forEach(point => {
      this.editPoints.push(new EditPoint(point[0], point[1], this, shape));
    });
  }

  checkClick(event, canvas){
    this.isMouseDown = true;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let result = '';
    this.editPoints.forEach(point => {
      if (point.draw(canvas, x, y)) result = point.draw(canvas, x, y);
    });
    if (result) return result;
    shapeStorage.getStorage().forEach(element => {
      if (element.draw(canvas, x, y)) result = element.draw(canvas, x, y);
    });
    return result;
  }
}

export default new Painter;