import saver from "./Saver.js";
import editor from "../sctipt.js"
class Storage{
  constructor(){
    this.storage = [];
  }

  addValue(value){
    this.storage.push(value);
    saver.addFrame(this.storage);
    editor.clearEdit();
  }

  rewriteStorage(frame){
    this.storage = frame;
  }

  getSize(){
    return this.storage.length;
  }

  getStorage(){
    return this.storage;
  }
  deleteShape(element){
    const index = this.storage.indexOf(element);
    this.storage.splice(index,1);
  }
}

export default new Storage;