import Tools from "./classes/Tools.js";
import Canvas from "./classes/Canvas.js";
import Editor from "./classes/Editor.js";
import CloneCanvas from "./classes/CloneCanvas.js";


const cloneCanvas = new CloneCanvas();
const cloneCanvasElement = cloneCanvas.getCanvas();

const canvas = new Canvas(cloneCanvasElement);
const canvasElement = canvas.getCanvas();
const editor = new Editor(canvasElement);

const tools = new Tools(canvas);

tools.init();

const wrapper = document.createElement('div');
wrapper.className = 'wrapper'
document.body.append(wrapper);


cloneCanvas.init(wrapper);
canvas.init(wrapper);

document.addEventListener('mouseup', () => canvas.changeMouseStatusOnFalse());

canvasElement.addEventListener('mousedown', (event) => editor.editShape(event, canvas));

canvasElement.addEventListener('mousemove', (event) => editor.moveShape(event, canvas));

document.addEventListener('keydown', (event) => editor.keyPressed(event, canvas));

export default editor;

