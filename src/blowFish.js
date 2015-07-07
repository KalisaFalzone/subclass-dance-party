var makeBlowFish = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);

  this.$node = $('<span class="dancer"><img class="blowFish" src="images/blowFish.png"/></span>');

};

makeBlowFish.prototype = Object.create(makeDancer.prototype);
makeBlowFish.prototype.constructor = makeBlowFish;

makeBlowFish.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  setTimeout(this.step.bind(this), 1500);

  $('.blowFish').animate({
    'width': '+=40px',
    'height': '+=40px'
  }, 2000);

    $('.blowFish').animate({
    'width': '-=40px',
    'height': '-=40px'
  }, 2000);

};
