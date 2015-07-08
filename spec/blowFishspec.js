describe("blowFish", function() {

  var blowFishie;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blowFishie = new BlowFish(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blowFishie.$node).to.be.an.instanceof(jQuery);
  });

  xit("should increase and then decrease in size", function() {
    sinon.spy(blowFishie, 'animate');
    blowFishie.step();
    expect(blowFishie.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blowFishie, "step");
      expect(blowFishie.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blowFishie.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blowFishie.step.callCount).to.be.equal(2);
    });
  });
});
