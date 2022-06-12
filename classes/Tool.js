export default class Tool{
  constructor(name, func){
    this.name = name;
    this.func = func;
  }

  getFunction(){
    return this.func;
  }

  getName(){
    return this.name;
  }
}