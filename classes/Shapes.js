class Shapes{
  constructor(){
    this.shapes = new Map();
  }

  addShape(name, shape){
    this.shapes.set(`${name}${this.shapes.size}`, shape);
  }

  getShapes(){
    return this.shapes;
  }

  getSize(){
    return this.shapes.size;
  }

  getClicked(MouseX, MouseY){
    let result = '';
    this.shapes.forEach(shape => {
      if (shape.drawShape(MouseX, MouseY)) result = shape.drawShape(MouseX, MouseY);
    })
    return result;
  }
}

export default new Shapes();