class Saver{
  constructor(){
    this.frames = [];
    this.index = 0;
  }

  addFrame(elements){
    console.log('создаем кадр')
    let cloneArr = []
    elements.forEach((element) => {
      cloneArr.push(Object.assign( Object.create( Object.getPrototypeOf(element)), element))
    });
    
    if (this.index < this.frames.length){
      this.frames.splice(this.index - 1, this.frames.length - this.index);
    }
    
    if (this.frames.length === 0) {
      this.frames.push(cloneArr);
      this.index++;
      console.log(`прибавляем индекс`)
      return;
    }
    console.log(this.frames[this.index - 1]);
    console.log(this.index);
    console.log(cloneArr);
    console.log(!this.isEqual(this.frames[this.index - 1], cloneArr));
    if (!this.isEqual(this.frames[this.index - 1], cloneArr)) {
      this.frames.push(cloneArr);
      this.index++;
      console.log(`прибавляем индекс`)
    }
  }

  getFrames(){
    return this.frames;
  }
  
  prevFrame(){
    this.index = this.index - 1;
    console.log(this.index)
    if (this.index < 1) return this.frames[0];
    return this.frames[this.index - 1];
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