
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/hello', function(req, res){
  if(req.query.nom == null){
    res.send('Quel est votre nom ?')
  }
  res.send('Bonjour, ' + req.query.nom+ " !")
})

app.post('/message', function(req,res,next) {
  console.dir(req.body, {depth: 1})
  res.sendStatus(200);
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
