const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./utils/config');
const CurrencyRouter = require('./routes/index');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', CurrencyRouter);

app.listen(config.APP_PORT, () => console.log(`listening on port ${config.APP_PORT}!`));
