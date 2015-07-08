var BlowFish = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"><img class="blowFish" src="images/blowFish.png"/></span>');
  this.step();
  this.setPosition(top, left);
};

BlowFish.prototype = Object.create(Dancer.prototype);
BlowFish.prototype.constructor = BlowFish;

BlowFish.prototype.step = function(){
  // Dancer.prototype.step.call(this);

  var context = this;
  setTimeout(function(){context.step()}, 2000);

  $('.blowFish').animate({
    'width': '+=40px',
    'height': '+=40px'
  }, 1000);

    $('.blowFish').animate({
    'width': '-=40px',
    'height': '-=40px'
  }, 1000);

};
