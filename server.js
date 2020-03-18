
const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;

const PORT = process.env.PORT || 3000 ; 

// MongoDB
const uri = "mongodb+srv://Imane:<password>@cluster0-vsxwe.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


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
      readValuesFromFile()
        .catch(err => {
          res.send('error while reading réponses.json', err)
        })
        .then(valeursExistantes => {
          const data = JSON.stringify({
            ...valeursExistantes,
            [cle]: valeur
          })
          return writeFile('réponses.json', data)
        })
        .then(() => {
          res.send('Merci pour cette information !')
        })
        .catch((err) => {
          console.error('error while saving réponses.json', err)
          res.send('Il y a eu une erreur lors de l\'enregistrement')
        })
    } else {
      const cle = req.body.msg
      readValuesFromFile()
        .then((values) => {
          const reponse = values[cle]
          res.send(cle + ': ' + reponse)
        })
        .catch((err) => {
          res.send('error while reading réponses.json', err)
        })
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

function readValuesFromFile() {
  return readFile('réponses.json', { encoding: 'utf8' })
    .then(reponses => JSON.parse(reponses))
}