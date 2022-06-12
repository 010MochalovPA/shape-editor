import drawingFunctions from '../modules/drawingFunctions.js';
import Tool from './Tool.js';

export default class Tools{
  constructor(canvas){
    this.tools = [];
    this.canvas = canvas;
    this.fillTools();
  };
  
  fillTools(){
    Object.entries(drawingFunctions).forEach(([name, func]) => {
      this.tools.push(new Tool(name, () => func(this.canvas)));
    });
  }

  getTools(){
    console.log(this.tools);
  }

  init(){
    if (document.querySelector('#tools')) {
      document.querySelector('#tools').remove();
    }

    const toolsElement = document.createElement('div');
    toolsElement.id = 'tools';
    document.body.append(toolsElement);
    
    this.tools.forEach((tool) => {
      const toolName = tool.getName();
      const btnTool = document.createElement('button');
      const icon = document.createElement('img');

      icon.src = `./assets/icons/${toolName}.png`;
      icon.alt = `${toolName}.png`;
      
      icon.className = 'icon';
      btnTool.className = 'btnTool';

      btnTool.append(icon);
      toolsElement.append(btnTool);
      btnTool.innerHTML += toolName;
      btnTool.addEventListener('click', tool.getFunction());
    })

  }
}