export interface Occurance {
  datetime: Date;
  number: number;
  value: number;
  occurances: number;
  lastDatetime: Date;
}

class Calculator {
  private static inst: Calculator;

  private calculationPromise: Promise<number> | null;

  // store array of requested numbers. Not duplilcated
  private requestHistory: number[] = [];

  // store array of results. Not duplicated
  private resultHistory: Occurance[] = [];

  constructor() {
    this.calculationPromise = null;
  }

  // real calculation logic
  private calculate(n: number): Promise<number> {
    this.calculationPromise = new Promise((resolve, reject) => {
      const squareOfSum = (((n + 1) * n) ** 2) / 4;
      let sumOfSquare = 0;

      for (let i = 1; i <= n; i += 1) {
        sumOfSquare += i ** 2;
      }

      resolve(squareOfSum - sumOfSquare);
    });

    return this.calculationPromise;
  }

  // proxy to check occurance and call calculation function
  public async getResult(n: number): Promise<Occurance> {
    const index = this.requestHistory.indexOf(n);
    let resObject: Occurance;

    if (index > -1) {
      this.resultHistory[index].datetime = new Date();
      this.resultHistory[index].occurances += 1;

      resObject = {
        ...this.resultHistory[index],
      };

      this.resultHistory[index].lastDatetime = new Date();
    } else {
      const calcResult = await this.calculate(n);
      resObject = {
        datetime: new Date(),
        number: n,
        value: calcResult,
        occurances: 1,
        lastDatetime: new Date(),
      };

      this.requestHistory.push(n);
      this.resultHistory.push(resObject);
    }

    return resObject;
  }

  // get instance of singleton
  public static get instance() {
    if (!this.inst) this.inst = new Calculator();
    return this.inst;
  }
}

export default Calculator.instance;
