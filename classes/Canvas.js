import shapes from './Shapes.js';
export default class Canvas{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 78;
    this.isMouseDown = false;
  }

  init() {
    if (document.querySelector('#canvas')) {
      document.querySelector('#canvas').remove();
    }
    document.body.append(this.canvas);
  }

  getCanvas(){
    return this.canvas;
  }

  getMouseStatus(){
    return this.isMouseDown;
  }

  changeMouseStatusOnFalse(){
    console.log('изменения на false')
    this.isMouseDown = false;
  }

  checkClick(e){
    this.isMouseDown = true;
    let rect = this.canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    return shapes.getClicked(x,y);
  }

  redraw(){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
      shapes.getShapes().forEach(shape => {
        shape.drawShape();
      })
    }
    
  }
}