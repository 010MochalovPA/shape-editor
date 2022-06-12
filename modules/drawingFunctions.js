const drawingFunctions = {
  ellipse: (canvas) => {
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
      ctx.beginPath();
      ctx.fillStyle = randomColor;
      ctx.strokeStyle = randomColor;
      ctx.ellipse(canvas.width / 2, canvas.height / 2, 200, 100, 0, 0, Math.PI*2);
      ctx.fill();
      ctx.stroke();
    }
  },

  triangle: (canvas) => {
    console.log('drawing triangle');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
      ctx.beginPath();
      ctx.fillStyle = randomColor;
      ctx.moveTo(canvas.width / 2, canvas.height / 2 - 100);
      ctx.lineTo(canvas.width / 2 - 100, canvas.height / 2 + 100);
      ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2 + 100);
      ctx.fill();
    }
  },

  rectangle: () => {
    console.log('drawing rectangle');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
      ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 100, 300, 200)
      ctx.fill();
      ctx.stroke();
    }
  },

  // square: () => {
  //   console.log('drawing square');
  // },
  
  // circle: () => {
  //   console.log('drawing circle');
  //   if (canvas.getContext){
  //     var ctx = canvas.getContext('2d');
  //     ctx.beginPath();
  //     ctx.arc(75, 75, 50, 0, Math.PI*2, true);
  //     ctx.stroke();
  //   }
  // },

}

export default drawingFunctions;