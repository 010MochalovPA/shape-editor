import shapes from '../classes/Shapes.js';
import { ShapeEllipse, ShapeTriangle, ShapeRectangle } from '../classes/Shape.js';

const drawingFunctions = {
  ellipse: (canvas) => {
    const newShape = new ShapeEllipse(`ellipse${shapes.getSize()}`, canvas);
    shapes.addShape(`ellipse`, newShape);
    newShape.drawShape();
  },
  triangle: (canvas) => {
    const newShape = new ShapeTriangle(`triangle${shapes.getSize()}`, canvas);
    shapes.addShape(`triangle`, newShape);
    newShape.drawShape();
  },
  rectangle: (canvas) => {
    const newShape = new ShapeRectangle(`rectangle${shapes.getSize()}`, canvas);
    shapes.addShape(`rectangle`, newShape);
    newShape.drawShape();
  },
}

export default drawingFunctions;