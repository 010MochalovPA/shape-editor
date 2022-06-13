import shapes from './Shapes.js';
import EditPoint from './EditPoint.js';
export default class Canvas{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 78;
    this.isMouseDown = false;
    this.elements = [];
    this.editPoints = [];
  }

  init() {
    if (document.querySelector('#canvas')) {
      document.querySelector('#canvas').remove();
    }
    document.body.append(this.canvas);
  }

  addElement(element){
    this.elements.push(element);
    this.redraw();
  }

  addEditPoints(points, shape){
    this.editPoints = [];
    points.forEach(point => {
      this.editPoints.push(new EditPoint(point[0], point[1], this, shape));
    });
  }

  getCanvas(){
    return this.canvas;
  }

  getMouseStatus(){
    return this.isMouseDown;
  }

  changeMouseStatusOnFalse(){
    this.isMouseDown = false;
  }

  checkClick(e){
    this.isMouseDown = true;
    let rect = this.canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let result = '';
    this.editPoints.forEach(point => {
      if (point.draw(x, y)) result = point.draw(x, y);
    });
    if (result) return result;
    this.elements.forEach(element => {
      if (element.draw(x, y)) result = element.draw(x, y);
    });
    return result;
  }

  redraw(){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
      this.elements.forEach(shape => {
        shape.draw();
      });
      this.editPoints.forEach(point => {
        console.log('перерисовка point')
        point.draw();
      });
    }
    
  }
}