
const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs')


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

// Exercice 4 + 5
app.post('/chat', function (req, res) {
  if (req.body.msg === 'ville') {
    res.send('Nous sommes à Paris')
  } else if (req.body.msg === 'météo') {
    res.send('Il fait beau')
  } else {
    if (/ = /.test(req.body.msg)) {
      const [ cle, valeur ] = req.body.msg.split(' = ')
      const valeursExistantes = readValuesFromFile();
      fs.writeFileSync('réponses.json', JSON.stringify({
        ...valeursExistantes,
        [cle]: valeur
      }))
      res.send('Merci pour cette information !')
    } else {
      const cle = req.body.msg
      const reponse = readValuesFromFile()[cle]
      res.send(cle + ': ' + reponse)
    }
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


app.listen(3000, function () {
  console.log('Listening on port 3000! :)')
})
