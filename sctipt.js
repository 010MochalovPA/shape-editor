import Tools from "./classes/Tools.js";
import Canvas from './classes/Canvas.js';

const canvas = new Canvas;
const canvasElement = canvas.getCanvas();

const tools = new Tools(canvasElement);

tools.init();
canvas.init();
