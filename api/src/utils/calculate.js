const moment = require('moment');

const N = 3;

const orderRatesByDate = (rates) => {
	const result = [];
	Object.keys(rates).sort().forEach((key) => {
		const [value] = Object.values(rates[key]);
		result.push({
			date: key,
			value,
		});
	});
  
	return result;
};
  

const calculateRates = (rates) => {
	const result = [];
	for (let i = 0; i <= rates.length - 2; i++) {
		const chunk = rates.slice(i, i + N);
		if (chunk.length < 3) {
			break;
		}
		result.push(chunk.reduce((sum, rate) => rate.value + sum, 0) / N);
	}
	return result;
};

const getResult = (rates, dates, maxWaitingTime) => {
	const result = [];
	for (let i = 0; i < rates.length; i++) {
		result.push({
			date: moment(dates[i + 1]).add(maxWaitingTime, 'weeks').format('YYYY-MM-DD'),
			value: rates[i],
		});
	}
	return result;
};

module.exports = (data, maxWaitingWeeks) => {
	const orderedRates = orderRatesByDate(data);
	const rates = calculateRates(orderedRates);
	const dates = orderedRates.map((item) => item.date);
	return getResult(rates, dates, maxWaitingWeeks);
};