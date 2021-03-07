//getting the right pixel ratio for canvas, kill me plz
getPixelRatio : function getPixelRatio(context) {
  console.log('Detemining the pixel ratio');
  //storing props in an array to 
  //dynamically get the backing ratio
  var backingStores = [
    'webkitBackingStorePizelRation',
    'mozBackingStorePixelRatio',
    'msBackingStorePixelRatio',
    'oBackingStorePixelRatio',
    'backingStorePixelRatio'
    ];
var deviceRatio = window.devicePixelRatio;
  
var backingRatio = backingStores.reduce(function(prev, curr) { 
  return (context.hasOwnProperty(curr) ? context[curr] : 1); 
});
 //final pixel ratio
  return deviceRatio / backingRatio;
},
generateCanvas : function generateCanvas(w, h) {
  console.log('Generating canvas.');
  var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d');
  //wtf i didnt want to do this but fuck it
var ratio = this.getPixelRatio(context);

//downscale via css ugghhhhhh
  canvas.width = Math.round(w * ratio);
  canvas.height = Math.round(h * ratio);
  canvas.style.width = w +'px';
  canvas.style.height = h +'px';
  //scaling again for right pixel density
  context.setTransform(ratio, 0, 0, ratio, 0, 0,);
  
  return canvas;
}
