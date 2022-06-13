
class Shapes{
  constructor(){
    this.shapes = new Map();
  }

  addShape(name, shape, canvas){
    this.shapes.set(`${name}${this.shapes.size}`, shape);
    canvas.addElement(shape);
  }

  getShapes(){
    return this.shapes;
  }

  getSize(){
    return this.shapes.size;
  }

  
}

export default new Shapes();