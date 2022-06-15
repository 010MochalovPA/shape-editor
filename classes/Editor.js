import Shape from './Shape.js';
import painter from './Painter.js';
import EditPoint from "./EditPoint.js";

export default class Editor{
  constructor(canvas){
    this.canvas = canvas;
    this.target = null;
    this.differenceX = 0;
    this.differenceY = 0;
    this.MouseX = 0;
    this.MouseY = 0;
  }

  

  editShape(event, canvas){
    let rect = canvas.getCanvas().getBoundingClientRect();
    this.MouseX = event.clientX - rect.left;
    this.MouseY = event.clientY - rect.top;
    this.target = painter.checkClick(event, canvas.getCanvas());
    if (!this.target) {
      painter.clearEdit();
      painter.redrawAll(canvas.getCanvas());
      return;
    };
    if (this.target instanceof Shape){
      painter.addEditPoints(this.target.getEditPoints());
      this.differenceX = this.MouseX - this.target.x;
      this.differenceY = this.MouseY - this.target.y;
      painter.addEditShape(this.target);
      painter.redrawAll(canvas.getCanvas());
    }
    
  }

  moveShape(event, canvas){
    if (!this.target) return;
    
    let rect = canvas.getCanvas().getBoundingClientRect();
    this.MouseX = event.clientX - rect.left;
    this.MouseY = event.clientY - rect.top;

    if (this.target instanceof Shape){
      painter.addEditPoints(this.target.getEditPoints(), this.target);
      if (painter.getMouseStatus()){
        this.target.changePosition(this.MouseX - this.differenceX, this.MouseY - this.differenceY);
        painter.addEditPoints(this.target.getEditPoints(), this.target);
        painter.redrawAll(canvas.getCanvas());
      }
    } else if (this.target instanceof EditPoint) {
      if (painter.getMouseStatus()){
        const transformShape = this.target.getParentShape();
        transformShape.editScale(this.MouseX, this.MouseY);
        painter.addEditPoints(transformShape.getEditPoints(), transformShape);
        painter.redrawAll(canvas.getCanvas());
      }
    } 
  }

  keyPressed(event, canvas){
    if (event.keyCode == 46){
      if (this.target) canvas.deleteShape(this.target);
    }
    
    if (event.ctrlKey && event.keyCode == 90) {
      console.log("Ctrl+Z");
    }

    if (event.ctrlKey && event.keyCode == 89) {
      console.log("Ctrl+Y");
    }
  }
}