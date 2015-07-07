var makeShark = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);

  this.$node = $('<span class="dancer"><img class="shark" src="images/shark.png"/></span>');

};

makeShark.prototype = Object.create(makeDancer.prototype);
makeShark.prototype.constructor = makeShark;

makeShark.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  setTimeout(this.step.bind(this), 1500);

};