import shapeStorage from './Storage.js';
import editor from '../sctipt.js';

class Painter{
  
  constructor(){
    this.editShape = null;
  }

  clearEditShape(){
    this.editShape = null;
  }
  addEditShape(shape){
    this.editShape = shape;
  }

  redrawAll(canvas){

    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fill();
    
    if (shapeStorage.getStorage()){
      shapeStorage.getStorage().forEach((shape) => {
        shape.draw(canvas);
      });
    }
    
    if (this.editShape) this.editShape.drawEditArea();
    
    editor.getEditPoints().forEach(point => {
      point.draw(canvas);
    });

  }

  redraw(canvas){
    
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    shapeStorage.getStorage().forEach(shape => {
      shape.draw(canvas);
    });

  }
}

export default new Painter;