import saver from './Saver.js'

export default class Canvas{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.width = window.innerWidth - 300;
    this.canvas.height = window.innerHeight - 78;
    this.cloneCanvas = null;
    this.isMouseDown = false;
  }

  getWidth(){
    return this.canvas.width;
  }

  getHeight(){
    return this.canvas.height;
  }

  getElements(){
    return this.elements;
  }
  
  init(wrapper, cloneCanvas) {
    this.cloneCanvas = cloneCanvas;
    if (document.querySelector('#canvas')) {
      document.querySelector('#canvas').remove();
    }
    wrapper.append(this.canvas);
    let ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    ctx.fill();
    saver.addFrame([]);

  }

  

  getClone(){
    return this.cloneCanvas;
  }

  getCanvas(){
    return this.canvas;
  }

  

}