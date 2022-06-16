import saver from './Saver.js';
import editor from '../sctipt.js';
class Storage{
  constructor(){
    this.storage = [];
  }

  addValue(value){
    this.storage.push(value);
    editor.clearEdit();
    saver.addFrame(this.storage);
  }

  rewriteStorage(frame){
    this.storage = frame;
    editor.clearEdit();
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