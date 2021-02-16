const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongodb = require('./api/database/mongodb');

const restoRoutes = require('./api/routes/restaurants');

app.use('/api/v1/restaurants', restoRoutes);

module.exports = app;