var expect = chai.expect;

describe("Operators Test Suite", function() {
  describe("1 : Fahrenheit to Celsius", function() {
    it("fahrToCels(212) returns 100: ", function() {
      expect(fahrToCels(212)).to.equal(100);
    });
    it("fahrToCels(32) returns 0:", function() {
      expect(fahrToCels(32)).to.equal(0);
    });
    it("fahrToCels(0) returns -17.8:", function() {
      expect(fahrToCels(0)).to.be.closeTo(-17.8,1);
    });
  });
  describe("2 : Celsius to Fahrenheit", function() {
    it("CelsToFahr(100) returns 212: ", function() {
      expect(CelsToFahr(100)).to.equal(212);
    });
    it("CelsToFahr(0) returns 32:", function() {
      expect(CelsToFahr(0)).to.equal(32);
    });
    it("CelsToFahr(22) returns 71.6:", function() {
      expect(CelsToFahr(22)).to.equal(71.6);
    });
  });
  describe("3: Complete the following sum function:", function() {
    it("sum(1,2) returns 3", function() {
      expect(sum(1,2)).to.equal(3);
    });
    it('sum("1",2) returns 3', function() {
      expect(sum("1",2)).to.equal(3);
    });
    it('sum("1","2") returns 3', function() {
      expect(sum("1","2")).to.equal(3);
    });
    it('sum("banana",2) returns 3', function() {
      expect(sum("banana",2)).to.be.NaN;
    });
    it("sum(1.3,2.4) returns 3.7", function() {
      expect(sum(1.3,2.4)).to.equal(3.7);
    });
  });
  describe(`4: Complete the following isEven function, returning a boolean if
    the argument (num) is even.`, function() {
    it('isEven(2) returns true', function() {
      expect(isEven(2)).to.equal(true)
    });
    it('isEven(3) returns false', function() {
      expect(isEven(3)).to.equal(false)
    });
    it('isEven("banana") returns false', function() {
      expect(isEven("banana")).to.equal(false)
    });
    it('isEven(199076) returns true', function() {
      expect(isEven(199076)).to.equal(true)
    });
    it('isEven("2") returns false', function() {
      expect(isEven("2")).to.equal(false)
    });

  });
  describe(`5: Use a ternary operator in the
    'styleMeltdownWarningNotification' function...`, function() {
      it(`styleMeltdownWarningNotification(100) returns 'green'`, function() {
        expect(styleMeltdownWarningNotification(100)).to.equal('green');
      });
      it(`styleMeltdownWarningNotification(80) returns 'green'`, function() {
        expect(styleMeltdownWarningNotification(80)).to.equal('green');
      });
      it(`styleMeltdownWarningNotification(79) returns 'red'`, function() {
        expect(styleMeltdownWarningNotification(79)).to.equal('red');
      });
      it(`styleMeltdownWarningNotification(0) returns 'red'`, function() {
        expect(styleMeltdownWarningNotification(0)).to.equal('red');
      });
      it(`styleMeltdownWarningNotification(NaN) returns 'red'`, function() {
        expect(styleMeltdownWarningNotification(NaN)).to.equal('red');
      });
      it(`styleMeltdownWarningNotification(undefined) returns 'red'`, function() {
        expect(styleMeltdownWarningNotification(undefined)).to.equal('red');
      });
      it(`styleMeltdownWarningNotification('oh the humanity') returns 'red'`, function() {
        expect(styleMeltdownWarningNotification('oh the humanity')).to.equal('red');
      });
      it(`styleMeltdownWarningNotification(true) returns 'red'`, function() {
        expect(styleMeltdownWarningNotification(true)).to.equal('red');
      });
    });
  describe(`6: Modify the the randomWholeNumberGenerator(maximumNumberValue)
    function...`, function() {
    it(`randomWholeNumberGenerator(2) returns a number between 0-2`,
      function() {
      expect(randomWholeNumberGenerator(2)).to.be.within(0,2);
    });
    it(`randomWholeNumberGenerator(100) returns a number between 0-100`,
      function() {
      expect(randomWholeNumberGenerator(100)).to.be.within(0,100);
    });
    it(`randomWholeNumberGenerator(undefined) returns 0`,
      function() {
      expect(randomWholeNumberGenerator(undefined)).to.equal(0);
    });
    it(`randomWholeNumberGenerator(NaN) returns 0`,
      function() {
      expect(randomWholeNumberGenerator(NaN)).to.equal(0);
    });
    it(`randomWholeNumberGenerator("banana") returns 0`,
      function() {
      expect(randomWholeNumberGenerator("banana")).to.equal(0);
    });
    it(`randomWholeNumberGenerator("5") returns a number between 0-5`,
      function() {
      expect(randomWholeNumberGenerator("5")).to.be.within(0,5);
    });
  });
});
