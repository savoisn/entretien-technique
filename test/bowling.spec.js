// Import chai.
let chai = require('chai'),
  path = require('path')

// Tell chai that we'll be using the "should" style assertions.
chai.should();
should = chai.should();

// Import the Rectangle class.
let Bowling = require(path.join(__dirname, '..', 'bowling'));

// The fat arrow (=>) syntax is a new way to define
// functions in ES6. One feature that is different
// from the usual "function" keyword is that the scope
// is inherited from the parent, so there is no need to write
//
//   function() {
//     ...
//   }.bind(this)
//
// anymore. In this case we are not using "this" so the new
// syntax is just used for brevity.
describe('Bowling', () => {
  it('should start', () => {
    bowling = new Bowling();
    bowling.start();
    bowling.totalScore = 0;
    bowling.totalScore.should.equal(0);

  });
});
