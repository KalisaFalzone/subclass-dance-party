var Bubbles = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer bubbles"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

Bubbles.prototype = Object.create(Dancer.prototype);
Bubbles.prototype.constructor = Bubbles;


Bubbles.prototype.step = function(){

//   // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   setTimeout(this.step.bind(this), this._timeBetweenSteps);
   this.$node.toggle();
};
