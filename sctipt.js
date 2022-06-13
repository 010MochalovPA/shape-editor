import Tools from "./classes/Tools.js";
import Canvas from './classes/Canvas.js';
import Editor from "./classes/Editor.js";

const canvas = new Canvas;
const canvasElement = canvas.getCanvas();
const editor = new Editor(canvasElement);

const tools = new Tools(canvas);

tools.init();
canvas.init();

document.body.addEventListener('mouseup', () => canvas.changeMouseStatusOnFalse());

canvasElement.addEventListener('mousedown', (event) => editor.editShape(event, canvas));

canvasElement.addEventListener('mousemove', (event) => editor.moveShape(event, canvas));


export default editor;

