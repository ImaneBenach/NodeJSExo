
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(4000, function () {
  console.log('Listening on port 4000!')
})
