
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000 ; 

//Exercice 1
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// Exercice 3
app.get('/hello', function(req, res){
  const nom = req.query.nom
  if(nom) {
    res.send("Bonjour, " + nom + " !")
  } else {
    res.send("Quel est votre nom ?")
  }
})
/*
app.get('/hello', function(req, res){
  if(req.query.nom == "" || req.query.nom == undefined){
    res.send("Quel est votre nom ?")
  }
  res.send("Bonjour, " + req.query.nom+ " !")
})
*/

// Exercice 4 
app.post('/chat', function(req,res) {
  if (req.body.msg == "ville") {
    res.send("Nous sommes à Paris")
  } else if(req.body.msg == "météo"){
    res.send("Il fait beau")
  } else {
    res.send(req.body.msg)
  }
})
/*
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
*/

//exo 5


app.listen(3000, function () {
  console.log('Listening on port 3000! :)')
})
