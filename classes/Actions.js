import shapes from "./Shapes.js";

class Actions{
  constructor(){
    this.actions = [];
    this.index = 0;
  }

  addAction(action){
    console.log(`добавили действие ${action}`)
    if (this.index < this.actions.length) {
      this.actions.splice(this.index, this.actions.length-1);
    }
    this.actions.push(action);
    this.index++;
    
  }

  getActions(){
    return this.actions;
  }

  revert(canvas){
    if (this.actions[this.index-1].getType() === 'delete'){
      console.log(`${this.actions[this.index-1].getShape()} был удален`);
      
      const newShape = this.actions[this.index-1].getShape();
      shapes.addShape('shape', newShape, canvas);

      console.log(`${this.actions[this.index-1].getShape()} восстановлен`);
    }
    this.index--;
  }

}

export default new Actions;