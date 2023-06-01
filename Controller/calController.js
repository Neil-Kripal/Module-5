const myCalculatorController = require('../Library/calculatorLibrary');

const addNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let myCalc = new myCalculatorController();
  let sum = myCalc.add(num1, num2);

  res.status(200).json({ Result: sum });
};

const subtractNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let myCalc = new myCalculatorController();
  let sum = myCalc.subtract(num1, num2);

  res.status(200).json({ Result: sum });
};

const divideNumbers = (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let myCalc = new myCalculatorController();
    const sum = myCalc.divide(num1, num2);

    res.status(200).json({ Result: sum });
  };

const multiplyNumbers = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let myCalc = new myCalculatorController();
  let sum = myCalc.multiply(num1, num2);

  res.status(200).json({ Result: sum });
};

module.exports = {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers
};