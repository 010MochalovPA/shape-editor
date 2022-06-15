class Storage{
  constructor(){
    this.storage = new Map();
  }

  addValue(key, value){
    this.storage.set(key, value);
  }

  removeValue(key){
    this.storage.delete(key);
  }

  getSize(){
    return this.storage.size;
  }

  getStorage(){
    return this.storage;
  }
}

export default new Storage;