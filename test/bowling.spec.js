// @flow
let chai = require('chai');
let path = require('path');

let Bowling = require('../bowling');

describe('Bowling', () => {
  it('should test foo', () => {

    const bowling: Bowling = new Bowling();
    let ret:string = bowling.foo(43);

  });

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

  it('should add another throw', () => {
    const bowling: Bowling = new Bowling();
    bowling.start();
    bowling.addThrow(3);
    bowling.addThrow(4);
    expect(bowling.totalScore).toEqual(7);
  });

});
