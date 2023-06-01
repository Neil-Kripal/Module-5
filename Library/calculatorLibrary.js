const log = require('./Logger');

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1000000);
    }
    

    add(num1, num2) {
        const value = num1 + num2
        log(`${this.id}`, value);
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2
        log(`${this.id}`, value);
        return value;
    }

     divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    const value = num1 / num2;
    log(`${this.id}`, value);
    return value;
  }


    multiply(num1, num2) {
        const value=num1 * num2
        log(`${this.id}`, value);
        return value;
        }
}

module.exports = Calculator