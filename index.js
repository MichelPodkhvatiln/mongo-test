const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`)
})
