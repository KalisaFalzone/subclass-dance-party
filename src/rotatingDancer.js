var makeRotatingDancer = function(top, left, timeBetweenSteps){

  makeDancer.apply(this, arguments);
  this.$node = $('<span class="rotate"></span>');


};

makeRotatingDancer.prototype = Object.create(makeDancer.prototype);
makeRotatingDancer.prototype.constructor = makeRotatingDancer;

makeRotatingDancer.prototype.step = function(){

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};
