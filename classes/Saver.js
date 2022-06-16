class Saver{
  constructor(){
    this.frames = [[],];
    this.index = 0;
  }

  addFrame(elements){
    this.index++;
    let cloneFrame = []
    elements.forEach((element) => {
      cloneFrame.push(Object.assign(Object.create( Object.getPrototypeOf(element)), element))
    });

    if (this.frames.length === 0) {
      this.frames.push(cloneFrame);
      return;
    }

    if (this.isEqual(this.frames[this.index - 2], cloneFrame)) {
      this.index--;
      return;
    }

    if (this.index - 1 < this.frames.length){
      this.frames.length = this.index;
    }

    this.frames.push(cloneFrame);
  }

  getFrames(){
    return this.frames;
  }
  
  prevFrame(){
    if (this.index - 1 < 0) this.index = 0;
    else this.index--;

    let cloneFrame = [];
    
    this.frames[this.index].forEach((element) => {
      cloneFrame.push(Object.assign(Object.create(Object.getPrototypeOf(element)), element))
    });

    return cloneFrame;
  }

  nextFrame(){
    if (this.index + 2 > this.frames.length) this.index = this.frames.length - 1;
    else this.index++;

    let cloneFrame = [];
    
    this.frames[this.index].forEach((element) => {
      cloneFrame.push(Object.assign(Object.create(Object.getPrototypeOf(element)), element))
    });

    return cloneFrame;
    
  }


  isEqual(frame, clone) {
    if (!frame || !clone) return false;
    if (frame.length != clone.length) return false;
    for(let i = 0; i < frame.length; i++){
      for (var key in frame[i]) {
        if (frame[i][key] != clone[i][key]) return false;
      }
    }
    return true;
  }
}

export default new Saver;