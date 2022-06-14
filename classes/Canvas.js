import EditPoint from './EditPoint.js';
import collection from './Collection.js';
export default class Canvas{
  constructor(cloneCanvas){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.width = window.innerWidth - 300;
    this.canvas.height = window.innerHeight - 78;
    this.cloneCanvas = cloneCanvas;
    this.isMouseDown = false;
    this.elements = [];
    this.editPoints = [];
    this.editShape = null;
  }

  getElements(){
    return this.elements;
  }
  
  init(wrapper) {
    if (document.querySelector('#canvas')) {
      document.querySelector('#canvas').remove();
    }
    wrapper.append(this.canvas);
    let ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    ctx.fill();
  }

  addEditShape(shape){
    this.editShape = shape;
  }

  getClone(){
    return this.cloneCanvas;
  }
  
  clearEdit(){
    this.editPoints = [];
    this.editShape = null;
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
    collection.drawCollection(cloneCanvas);
  }

  checkClick(e){
    this.isMouseDown = true;
    let rect = this.canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let result = '';
    this.editPoints.forEach(point => {
      if (point.draw(this.canvas, x, y)) result = point.draw(this.canvas, x, y);
    });
    if (result) return result;
    this.elements.forEach(element => {
      if (element.draw(this.canvas, x, y)) result = element.draw(this.canvas, x, y);
    });
    return result;
  }

  redraw(){
    if (this.canvas.getContext){
      let ctx = this.canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
      ctx.fill();
      this.elements.forEach(shape => {
        shape.draw(this.canvas);
      });
      if (this.editShape) this.editShape.drawEditArea();
      this.editPoints.forEach(point => {
        point.draw(this.canvas);
      });
    }
  }

  deleteShape(removableShape){
    const indexRemovableShape = this.elements.indexOf(removableShape);
    this.elements.splice(indexRemovableShape, 1);
    collection.deleteElement(removableShape);
    this.clearEdit();
    collection.drawCollection(cloneCanvas);
    this.redraw();
  }
}