// import shapes from './classes/Shapes.js';

export default class Editor{
  constructor(canvas){
    this.canvas = canvas;
    this.target = null;
  }

  editShape(event, canvas){
    this.target = canvas.checkClick(event);
    // console.log(target);
  }

  moveShape(event, canvas){
    if (canvas.getMouseStatus()){
      let rect = canvas.getCanvas().getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      this.target.changePosition(x,y);
      canvas.redraw();
    }
    
  }

  drawEditArea(shape){

  }
}