const express = require('express');
const myRouter = express.Router();
const calController = require('../Controller/calController');

myRouter.get('/add', (req, res) => {
  calController.addNumbers(req, res);
});

myRouter.get('/subtract', (req, res) => {
  calController.subtractNumbers(req, res);
});

myRouter.get('/multiply', (req, res) => {
  calController.multiplyNumbers(req, res);
});

myRouter.get('/divide', (req, res) => {
  calController.divideNumbers(req, res);
});

module.exports = myRouter;