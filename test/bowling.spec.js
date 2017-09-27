// @flow
let chai = require('chai');
let path = require('path');

let Bowling = require('../bowling');

describe('Bowling', () => {
  test('foo should return Coucou when passed coucou', () => {
    const bowling: Bowling = new Bowling();
    let ret:string = bowling.foo("Coucou");
    expect(ret).toEqual("Coucou");
  });
  test('foo should return Default String when passed nothing', () => {
    const bowling: Bowling = new Bowling();
    let ret:string = bowling.foo();
    expect(ret).toEqual("default string");
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
