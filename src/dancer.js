// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps || 1000;
  this.top = top || 0;
  this.left = left || 0;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // now that we have defined the dancer object, we can start setting up important parts of it by
  //calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  var context = this;
  setTimeout(function(){context.step()}, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left:left
  };
  this.$node.css(styleSettings);
};

//  var self = this;
//  setTimeout(function() { self.step(); }, this.timeBetweenSteps);
