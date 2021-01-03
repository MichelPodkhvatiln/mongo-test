const express = require('express');
const routes = require('./routes/api');

const app = express();

app.use('/api', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`)
})
