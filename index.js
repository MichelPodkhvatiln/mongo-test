const express = require('express');


//set up express app
const app = express();

app.get('/api', (req, res) => {
  console.log('GET request')
  res.send({
    name: 'Michel',
    age: '23'
  })
})

//listen for request
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening for requests on port: ${port}`)
})
