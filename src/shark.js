var Shark = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><img class="shark" src="images/shark.png"/></span>');

  this.step();
  this.setPosition(top, left);
};

Shark.prototype = Object.create(Dancer.prototype);
Shark.prototype.constructor = Shark;

Shark.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);

  var counter = 0;

  while(counter<4){
      this.$node.css('left', '+=10px');
      counter++;
  }
};
