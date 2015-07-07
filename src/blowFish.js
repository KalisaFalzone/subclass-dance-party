var makeBlowFish = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, arguments);

  this.$node = $('<span><img class="blowFish" src="images/blowFish.png"/></span>');

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


  // $('.blowFish').toggle(function() {
  //     $('.blowFish').animate({
  //           width: "+=20px",
  //           height: "+=20px"
  //         }, 1500 );
  //       $('.blowFish').animate({
  //           width: "-=20px",
  //           height:"-=20px"
  //         }, 1500);
  // });
};
