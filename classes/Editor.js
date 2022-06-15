import Shape from './Shape.js';
import painter from './Painter.js';
import EditPoint from "./EditPoint.js";
import shapeStorage from './Storage.js'
import saver from './Saver.js';

export default class Editor{
  constructor(canvas){
    this.isMouseDown = false;
    this.canvas = canvas;
    this.target = null;
    this.differenceX = 0;
    this.differenceY = 0;
    this.MouseX = 0;
    this.MouseY = 0;
    this.editPoints = [];
  }

  getEditPoints() {
    return this.editPoints;
  }

  getTarget(){
    return this.target;
  }

  editShape(event, canvas){
    let rect = canvas.getCanvas().getBoundingClientRect();
    this.MouseX = event.clientX - rect.left;
    this.MouseY = event.clientY - rect.top;
    this.target = this.checkClick(event, canvas.getCanvas());
    if (!this.target) {
      this.clearEdit();
      painter.redrawAll(canvas.getCanvas());
      return;
    };
    if (this.target instanceof Shape){
      this.addEditPoints(this.target.getEditPoints());
      this.differenceX = this.MouseX - this.target.x;
      this.differenceY = this.MouseY - this.target.y;
      painter.addEditShape(this.target);
      painter.redrawAll(canvas.getCanvas());
    }
    
  }

  getMouseStatus(){
    return this.isMouseDown;
  }

  moveShape(event, canvas){
    if (!this.target) return;
    
    let rect = canvas.getCanvas().getBoundingClientRect();
    this.MouseX = event.clientX - rect.left;
    this.MouseY = event.clientY - rect.top;
    if (this.target instanceof Shape){
      this.addEditPoints(this.target.getEditPoints(), this.target);
      if (this.getMouseStatus()){
        this.target.changePosition(this.MouseX - this.differenceX, this.MouseY - this.differenceY);
        this.addEditPoints(this.target.getEditPoints(), this.target);
        painter.redrawAll(canvas.getCanvas());
      }
    } else if (this.target instanceof EditPoint) {
      if (this.getMouseStatus()){
        const transformShape = this.target.getParentShape();
        transformShape.editScale(this.MouseX, this.MouseY);
        this.addEditPoints(transformShape.getEditPoints(), transformShape);
        painter.redrawAll(canvas.getCanvas());
      }
    } 
  }

  keyPressed(event, canvas){
    if (event.keyCode == 46){
      this.clearEdit();
      if (this.target) shapeStorage.deleteShape(this.target);
      painter.redrawAll(canvas.getCanvas());
      painter.redraw(canvas.getClone());
      saver.addFrame(shapeStorage.getStorage());
    }
    
    if (event.ctrlKey && event.keyCode == 90) {
      console.log("Ctrl+Z");
      this.clearEdit();
      shapeStorage.rewriteStorage(saver.prevFrame());
      painter.redrawAll(canvas.getCanvas());
      painter.redraw(canvas.getClone());
      
    }

    if (event.ctrlKey && event.keyCode == 89) {
      console.log("Ctrl+Y");
      
    }
  }

  clearEdit(){
    this.editPoints = [];
    painter.clearEditShape();
  }

  changeMouseStatusOnFalse(){
    this.isMouseDown = false;
    painter.redraw(this.canvas.getClone());
    saver.addFrame(shapeStorage.getStorage());
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


  addEditPoints(points, shape){
    this.editPoints = [];
    points.forEach(point => {
      this.editPoints.push(new EditPoint(point[0], point[1], this, shape));
    });
  }

}