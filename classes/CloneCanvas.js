export default class CloneCanvas{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'cloneCanvas';
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 78;
  }

  init(wrapper) {
    if (document.querySelector('#cloneCanvas')) {
      document.querySelector('#cloneCanvas').remove();
    }
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