
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 ; 

// exo 1
app.get('/', function (req, res) {
  res.send('Hello World!')
})
// exo 2 : deploiement en production

// exo 3
app.get('/hello', function(req, res){
  if(req.query.nom == "" || req.query.nom == undefined){
    res.send("Quel est votre nom ?")
  }
  res.send("Bonjour, " + req.query.nom+ " !")
})

// exo 4
app.post('/chat', function(req, res){

  if(msg != "" ){

      switch(msg){

          case "ville":
              res.send("Nous sommes à Paris")
              break

          case "météo":
              res.send("Il fait beau")
              break
      }
  }

});

//exo 5
////

app.listen(3000, function () {
  console.log('Listening on port 3000! :)')
})
