
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Imane!')
})

app.listen(4000, function () {
  console.log('Listening on port 3000!')
})
