export default class Action{
  constructor(type, shape, x , y , width, height){
    this.type = type;
    this.shape = shape;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getType(){
    return this.type;
  }

  getShape(){
    return this.shape;
  }
}