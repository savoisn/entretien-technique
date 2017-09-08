// @flow

class Bowling{

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
  }

  addThrow(numberOfPin: ?number) {
    this.totalScore = numberOfPin;
  }

}

module.exports = Bowling;
