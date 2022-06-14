export default class Frames{
  constructor(){
    this.frames = [];
    this.frame = 0;
  }

  addFrame(canvasElements){
    this.frames.push(canvasElements);
    this.frame++;
  }

  getFrame(){
    return this.frames[frame];
  }
}