var Shark = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  this.$node = $('<span class="dancer"><img class="shark" src="images/shark.png"/></span>');

};

Shark.prototype = Object.create(Dancer.prototype);
Shark.prototype.constructor = Shark;

Shark.prototype.step = function(){
  Dancer.prototype.step.call(this);

  setTimeout(this.step.bind(this), 1000);

  var counter = 0;

  while(counter<4){
      this.$node.css('left', '+=10px');
      counter++;
  }

};
