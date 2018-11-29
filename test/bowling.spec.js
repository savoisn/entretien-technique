// Import chai.
import chai from 'chai';

  // Tell chai that we'll be using the "should" style assertions.
chai.should();

let expect = chai.expect;


// Import the Rectangle class.
import Bowling from "../bowling";

describe('Bowling', () => {
  

  it('should display the score by frame', () => {
    const bowling = new Bowling();
    bowling.start();
  })

});
