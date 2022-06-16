import Tools from './classes/Tools.js';
import Canvas from './classes/Canvas.js';
import Editor from './classes/Editor.js';
import CloneCanvas from './classes/CloneCanvas.js';




const canvas = new Canvas();
const canvasElement = canvas.getCanvas();

const cloneCanvas = new CloneCanvas(canvas);
const cloneCanvasElement = cloneCanvas.getCanvas();


const editor = new Editor(canvas);

const tools = new Tools(canvas);

tools.init();

const wrapper = document.createElement('div');
wrapper.className = 'wrapper'
document.body.append(wrapper);


cloneCanvas.init(wrapper);
canvas.init(wrapper, cloneCanvasElement);


window.addEventListener('mouseup', () => editor.changeMouseStatusOnFalse());

canvasElement.addEventListener('mousedown', (event) => editor.editShape(event, canvas));

window.addEventListener('mousemove', (event) => editor.moveShape(event, canvas));

document.addEventListener('keydown', (event) => editor.keyPressed(event, canvas));


export default editor;