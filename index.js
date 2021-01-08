const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

//bodyParser middleware
app.use(bodyParser.json());
//init routes
app.use('/api', routes);
//error handing middleware
app.use((err, req, res, next)=>{
  const errorMessage = {
    error: err._message
  };

  res.status(422).send(errorMessage);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`)
})
