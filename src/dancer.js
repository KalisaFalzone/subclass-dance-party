// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps || 1000;
  this.top = top || 0;
  this.left = left || 0;

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){context.step()}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left:left
  };
  this.$node.css(styleSettings);
};
