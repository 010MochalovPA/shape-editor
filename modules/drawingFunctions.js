import shapeStorage from '../classes/Storage.js';
import painter from '../classes/Painter.js';
import { ShapeEllipse, ShapeTriangle, ShapeRectangle } from '../classes/Shape.js';

const drawingFunctions = {
  ellipse: (canvas) => {
    const newShape = new ShapeEllipse(`ellipse${shapeStorage.getSize()}`, canvas);
    shapeStorage.addValue(newShape);
    painter.redrawAll(canvas.getCanvas());
    painter.redraw(canvas.getClone());
  },
  triangle: (canvas) => {
    const newShape = new ShapeTriangle(`triangle${shapeStorage.getSize()}`, canvas, 250, 205 );
    shapeStorage.addValue(newShape);
    painter.redrawAll(canvas.getCanvas());
    painter.redraw(canvas.getClone());
  },
  rectangle: (canvas) => {
    const newShape = new ShapeRectangle(`rectangle${shapeStorage.getSize()}`, canvas);
    shapeStorage.addValue(newShape);
    painter.redrawAll(canvas.getCanvas());
    painter.redraw(canvas.getClone());
  },
}

export default drawingFunctions;