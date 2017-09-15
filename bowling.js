// @flow

interface Game {
  totalScore: number;
  start(): void;
}

class Bowling implements Game{

  totalScore: number;

  constructor(){
    this.totalScore = 0;
  }

  foo(x: ?string): string {
    if (x) {
      return x;
    }
    return "default string";
  }

  start(){
    this.totalScore = 0;
  }

  addThrow(numberOfPin: ?number) {
    this.totalScore += numberOfPin;
  }

}

module.exports = Bowling;
