var RotatingDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="rotate"></span>');


};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function(){

  setTimeout(this.step.bind(this), this._timeBetweenSteps);

};
