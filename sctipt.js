import Tools from "./classes/Tools.js";
import Canvas from './classes/Canvas.js';
import Editor from "./classes/Editor.js";

const canvas = new Canvas;
const canvasElement = canvas.getCanvas();
const editor = new Editor;

const tools = new Tools(canvasElement);

tools.init();
canvas.init();

canvasElement.addEventListener('mouseup', () => canvas.changeMouseStatusOnFalse());

canvasElement.addEventListener('mousedown', (event) => editor.editShape(event, canvas));

canvasElement.addEventListener('mousemove', (event) => editor.moveShape(event, canvas));

