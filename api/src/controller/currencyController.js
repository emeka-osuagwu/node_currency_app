const axios = require('../utils/axios');
const moment = require('moment');
const calculate = require('../utils/calculate');

const DATA_FORMAT = 'YYYY-MM-DD';

exports.getCurrency = (req, res) => {
	const {base_currency, week} = req.body;
	
	const start_at = moment().subtract(week, 'week').format(DATA_FORMAT);
	const end_at = moment(new Date()).format(DATA_FORMAT);	
	
	axios.get(`/history?start_at=${start_at}&end_at=${end_at}&base=${base_currency}`)
		.then(function (response) {		
			const calculation = calculate(response.data.rates, week);
	
			return res.status(200).send({
				data: calculation,
			});
		})
		.catch(function (error) {
			return res.status(400).send({
				message: 'invalid request please try again',
				error
			});
		});
};



