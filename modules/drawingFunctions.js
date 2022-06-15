import shapeStorage from '../classes/Storage.js';
import painter from '../classes/Painter.js';
import { ShapeEllipse, ShapeTriangle, ShapeRectangle } from '../classes/Shape.js';

const drawingFunctions = {
  ellipse: (canvas) => {
    const newShape = new ShapeEllipse(`ellipse${shapeStorage.getSize()}`, canvas);
    shapeStorage.addValue(newShape.getName(), newShape);
    console.log('добавляем элипс');
    console.log(shapeStorage.getStorage());
    painter.redrawAll(canvas.getCanvas());
  },
  triangle: (canvas) => {
    const newShape = new ShapeTriangle(`triangle${shapeStorage.getSize()}`, canvas, 250, 205 );
    shapeStorage.addValue(newShape.getName(), newShape);
    painter.redrawAll(canvas.getCanvas());
  },
  rectangle: (canvas) => {
    const newShape = new ShapeRectangle(`rectangle${shapeStorage.getSize()}`, canvas);
    shapeStorage.addValue(newShape.getName(), newShape, canvas);
    painter.redrawAll(canvas.getCanvas());
  },
}

export default drawingFunctions;