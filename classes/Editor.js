import Shape from './Shape.js';

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

  checkClick(event, canvas){
    // let rect = this.canvas.getCanvas().getBoundingClientRect();
    // this.MouseX = event.clientX - rect.left;
    // this.MouseY = event.clientY - rect.top;
    // console.log(canvas.checkClick(event));
    // // this.target = canvas.checkClick(event);
  }

  editShape(event, canvas){


    let rect = canvas.getCanvas().getBoundingClientRect();
    this.MouseX = event.clientX - rect.left;
    this.MouseY = event.clientY - rect.top;
    
    this.target = canvas.checkClick(event);
    if (!this.target) return;
    if (this.target instanceof Shape){
      canvas.addEditPoints(this.target.getEditPoints());
      this.target.isChanges();
      this.differenceX = this.MouseX - this.target.editArea.x;
      this.differenceY = this.MouseY - this.target.editArea.y;
      canvas.redraw();
    } else {
      console.log('point1')
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
        canvas.redraw();
      }
    } else {
      if (canvas.getMouseStatus()){
        const transformShape = this.target.getParentShape();
        transformShape.editScale(this.MouseX, this.MouseY);
        canvas.addEditPoints(transformShape.getEditPoints(), transformShape);
        console.log('transform');
        canvas.redraw();
      }
      
    }

    
  }

  // drawEditArea(){
  //   if (!this.target) return;
  //   let ctx = this.canvas.getContext('2d');

  //   ctx.fillStyle = 'yellow';
  //   ctx.strokeStyle = 'black';
  //   ctx.lineWidth = 2;

  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x - this.target.editArea.width / 2, this.target.editArea.y - this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   this.editPoints.push([this.target.editArea.x - this.target.editArea.width / 2, this.target.editArea.y - this.target.editArea.height / 2]);
  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x + this.target.editArea.width / 2, this.target.editArea.y - this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   this.editPoints.push([this.target.editArea.x + this.target.editArea.width / 2, this.target.editArea.y - this.target.editArea.height / 2]);
  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x - this.target.editArea.width / 2, this.target.editArea.y + this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   this.editPoints.push([this.target.editArea.x - this.target.editArea.width / 2, this.target.editArea.y + this.target.editArea.height / 2]);
  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x + this.target.editArea.width / 2, this.target.editArea.y + this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   this.editPoints.push([this.target.editArea.x + this.target.editArea.width / 2, this.target.editArea.y + this.target.editArea.height / 2]);
  // }

  // getEditPoints(){
  //   return this.editPoints;
  // }
  // checkEditArea(){
  //   console.log('checkEditArea');
  //   if (!this.target) return;
  //   console.log('рисуем и проверяем');
  //   let ctx = this.canvas.getContext('2d');
  //   ctx.beginPath();
  //   ctx.fillStyle = 'yellow';
  //   ctx.strokeStyle = 'black';
  //   ctx.lineWidth = 4;
    
  //   ctx.arc(this.target.editArea.x - this.target.editArea.width / 2, this.target.editArea.y - this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   if (ctx.isPointInPath(this.MouseX, this.MouseY)) return true;
  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x + this.target.editArea.width / 2, this.target.editArea.y - this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   if (ctx.isPointInPath(this.MouseX, this.MouseY)) return true;
  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x - this.target.editArea.width / 2, this.target.editArea.y + this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   if (ctx.isPointInPath(this.MouseX, this.MouseY)) return true;
  //   ctx.beginPath();
  //   ctx.arc(this.target.editArea.x + this.target.editArea.width / 2, this.target.editArea.y + this.target.editArea.height / 2, 4, 0, Math.PI*2);
  //   ctx.stroke();
  //   ctx.fill();
  //   if (ctx.isPointInPath(this.MouseX, this.MouseY)) return true;
  // }

  // getClicked(MouseX, MouseY){
  //   let result = '';
  //   this.editPoints.forEach(point => {
  //     if (point.drawShape(MouseX, MouseY)) result = shape.drawShape(MouseX, MouseY);
  //   });

  //   return result;
  // }
}