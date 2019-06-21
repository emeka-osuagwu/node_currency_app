const express = require('express');
const CurrencyRouter = express.Router();
const currencyController = require('../controller/currencyController');
const routeValidation = require('./middlewares/routeValidationMiddleware');

CurrencyRouter.post('/', routeValidation, currencyController.getCurrency);

module.exports = CurrencyRouter;
