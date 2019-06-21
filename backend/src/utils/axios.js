const {EXCHANGE_RATES_API} = require('./config');
const axios = require('axios');

module.exports = axios.create({
    baseURL: EXCHANGE_RATES_API,
    headers: {'X-Custom-Header': 'foobar'}
});