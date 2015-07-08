var Bubbles = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer bubbles"></span>');

  this.step();
  this.setPosition(top, left);
};

Bubbles.prototype = Object.create(Dancer.prototype);
Bubbles.prototype.constructor = Bubbles;

Bubbles.prototype.step = function(){
  var context = this;
  setTimeout(function() {
    context.step()
  }, this._timeBetweenSteps);
};
