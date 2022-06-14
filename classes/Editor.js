import Shape from './Shape.js';

import EditPoint from "./EditPoint.js";
import actions from './Actions.js';

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
    this.target = canvas.checkClick(event);
    if (!this.target) {
      canvas.clearEdit();
      canvas.redraw();
      return;
    };
    if (this.target instanceof Shape){
      canvas.addEditPoints(this.target.getEditPoints());
      this.target.isChanges();
      this.differenceX = this.MouseX - this.target.editArea.x;
      this.differenceY = this.MouseY - this.target.editArea.y;
      canvas.addEditShape(this.target);
      canvas.redraw();
    }
    
  }

  moveShape(event, canvas){
    if (!this.target) return;
    
    let rect = canvas.getCanvas().getBoundingClientRect();
    this.MouseX = event.clientX - rect.left;
    this.MouseY = event.clientY - rect.top;

    if (this.target instanceof Shape){
      canvas.addEditPoints(this.target.getEditPoints(), this.target);
      if (canvas.getMouseStatus()){
        this.target.changePosition(this.MouseX - this.differenceX, this.MouseY - this.differenceY);
        canvas.addEditPoints(this.target.getEditPoints(), this.target);
        canvas.redraw();
      }
    } else if (this.target instanceof EditPoint) {
      if (canvas.getMouseStatus()){
        const transformShape = this.target.getParentShape();
        transformShape.editScale(this.MouseX, this.MouseY);
        canvas.addEditPoints(transformShape.getEditPoints(), transformShape);
        canvas.redraw();
      }
    } 
  }

  keyPressed(event, canvas){
    if (event.keyCode == 46){
      if (this.target) canvas.deleteShape(this.target);
    }
    
    if (event.ctrlKey && event.keyCode == 90) {
      actions.revert(canvas);
      console.log("Ctrl+Z");
    }
  }
}