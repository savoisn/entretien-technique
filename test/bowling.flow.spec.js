// @flow
let chai = require('chai'),
    path = require('path')

let Bowling = require('../flow');

describe('Bowling', () => {
  it('should start', () => {
    const bowling: Bowling = new Bowling();
    bowling.start();
    bowling.totalScore = 0;

    expect(bowling.totalScore).toEqual(0);
  });

  it('should add throw', () => {
    const bowling: Bowling = new Bowling();
    bowling.start();
    bowling.addThrow(3);
    expect(bowling.totalScore).toEqual(3);
  });
});
