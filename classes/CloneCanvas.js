export default class CloneCanvas{
  constructor(parentCanvas){
    this.canvas = document.createElement('canvas');
    this.parentCanvas = parentCanvas
    this.canvas.id = 'cloneCanvas';
    this.canvas.width = window.innerWidth - 300;
    this.canvas.height = window.innerHeight - 78;
  }

  init(wrapper) {
    if (document.querySelector('#cloneCanvas')) {
      document.querySelector('#cloneCanvas').remove();
    }
    this.canvas.style.width = this.parentCanvas.getWidth() / 4 + 'px';
    this.canvas.style.height = this.parentCanvas.getHeight() / 4 + 'px';
    wrapper.append(this.canvas);
    let ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    ctx.fill();
  }

  getCanvas(){
    return this.canvas;
  }
}