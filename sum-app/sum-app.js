class SumApp {
  numbers = [];

  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    let result = 0;
    if (this.numbers.length === 0) {
      return result;
    } else {
      this.numbers.forEach((element) => (result += element));
    }
    return result;
  }

  reset() {
    this.numbers = [];
  }
}
