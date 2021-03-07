var cUtils = require('./utils/utils.canvas.js'),
      $container = document.getElementById('container');

function Game(w, h) {
  this.viewport = cUtils.generateCanvas(w, h);
  this.viewport.id = "gameViewport";
  
  //get and store canvas context as a global
  this.context = this.viewportgetContext('2d');
  $container.insertBefore(this.viewport, $container.firstChild)
  //text, once again
  this.context.font = '32px Arial';
  this.context.fillStyle = '#fff';
  this.context.fillText = ('I\'m feeling lucky!', 5, 50);
  
  return this;
}

window.game = new Game(800,600);
module.exports = game;
