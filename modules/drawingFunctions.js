import shapes from '../classes/Shapes.js';
import { ShapeEllipse, ShapeTriangle, ShapeRectangle } from '../classes/Shape.js';

const drawingFunctions = {
  ellipse: (canvas) => {
    const newShape = new ShapeEllipse(`ellipse${shapes.getSize()}`, canvas);
    shapes.addShape(`ellipse`, newShape, canvas);
  },
  triangle: (canvas) => {
    const newShape = new ShapeTriangle(`triangle${shapes.getSize()}`, canvas,  {width: 250, height: 225} );
    shapes.addShape(`triangle`, newShape, canvas);
  },
  rectangle: (canvas) => {
    const newShape = new ShapeRectangle(`rectangle${shapes.getSize()}`, canvas);
    shapes.addShape(`rectangle`, newShape, canvas);
  },
}

export default drawingFunctions;