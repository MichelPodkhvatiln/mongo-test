const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`)
})
