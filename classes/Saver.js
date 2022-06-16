class Saver{
  constructor(){
    this.frames = [];
    this.index = 0;
  }

  increaceIndex(){
    this.index++;
  }

  decreaseIndex(){
    this.index--;
  }

  addFrame(elements){

    if (this.index < this.frames.length){
      this.frames.length = this.index + 1;
    }

    
    let cloneArr = [];

    elements.forEach((element) => {
      cloneArr.push(Object.assign(Object.create( Object.getPrototypeOf(element)), element))
    });
    
    
    console.log(this.index);
    if (this.frames.length === 0) {
      this.frames.push(cloneArr);
      console.log('длинна меньше 0')
    }

    
    console.log(!this.isEqual(this.frames[this.index - 1], cloneArr));
    if (!this.isEqual(this.frames[this.index - 1], cloneArr)) {
      console.log(this.frames);
      console.log('индекс: ' + this.index)
      console.log('длинна: ' + this.frames.length)
      console.log(this.frames[this.index - 1]);
      console.log(cloneArr);
      
      console.log(cloneArr);
      this.frames.push(cloneArr);
    } else {
      this.decreaseIndex();
    }
    this.increaceIndex();
  }

  getFrames(){
    return this.frames;
  }
  
  prevFrame(){
    this.decreaseIndex();
    console.log(this.index);
    if (this.index < 1) return this.frames[0];
    console.log(this.frames[this.index]);
    return this.frames[this.index];
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