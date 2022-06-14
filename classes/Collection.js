class Collection{
  constructor(){
    this.collection = [];
  }

  addElement(element){
    this.collection.push(element)
  }

  deleteElement(element){
    const indexRemovableShape = this.collection.indexOf(element);
    this.collection.splice(indexRemovableShape, 1);
  }

  getCollection(){
    return this.collection;
  }

  drawCollection(canvas){
    if (canvas.getContext){
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      this.collection.forEach(element => {
        element.draw(canvas);
      });
    }
  }
}

export default new Collection;