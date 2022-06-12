export default class Canvas{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 78;
  }

  init() {
    document.body.append(this.canvas);
  }

  getCanvas(){
    return this.canvas;
  }
}