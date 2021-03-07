var $container = document.getElementById('container');

function Game() {
  this.viewport = document.createElement('canvas');
  this.context = viewport.getContext('2d');
  
  this.viewport.width = 800;
  this.viewport.height = 600;
  
  $container.insertBefore(this.viewport, $container.firstChild);
  //random txt
  this.context.font = '32px arial';
  this.context.fillText('I\'m Feeling lucky', 5, 50, 800);
  
  return this;
}
//instantiate the game in global
windwo.game = new Game()

//export the game as a module
module.exports = game();
