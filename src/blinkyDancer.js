var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){context.step()}, this._timeBetweenSteps);

  this.$node.toggle();
};
