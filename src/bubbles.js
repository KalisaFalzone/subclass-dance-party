var Bubbles = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer bubbles"></span>');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.step();
  this.setPosition(top, left);
};

Bubbles.prototype = Object.create(Dancer.prototype);
Bubbles.prototype.constructor = Bubbles;


Bubbles.prototype.step = function(){

//   // call the old version of step at the beginning of any call to this new version of step
  //Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var context = this;
  setTimeout(function() { step.call(context) }, this._timeBetweenSteps);

  var color = '#'+Math.floor(Math.random()*16777215).toString(16);

  $(".bubbles").on("mouseover", function(event){
    $(this).css('background-color', color);
  });
};
