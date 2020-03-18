
const express = require('express')
const app = express()
app.use(express.json())
const fs = require('fs')
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/chat-bot';
const dbName = 'chat-bot';
const PORT = process.env.PORT || 3000 ; 

(async function() {
  const client = new MongoClient(url, { useUnifiedTopology: true } );
  try {
    await client.connect();
    console.log("connected correctly");
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
})();

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

// Exercice 4 + 5
app.post('/chat', async function (req, res) {
  if (req.body.msg === 'ville') {
    res.send('Nous sommes à Paris')
  } else if (req.body.msg === 'météo') {
    res.send('Il fait beau')
  } else {
    if (/ = /.test(req.body.msg)) {
      const [ cle, valeur ] = req.body.msg.split(' = ')
      let valeursExistantes
      try {
        valeursExistantes = await readValuesFromFile();
      } catch (err) {
        res.send('error while reading réponses.json', err)
        return
      }
      const data = JSON.stringify({
        ...valeursExistantes,
        [cle]: valeur
      })
      try {
        await writeFile('réponses.json', data)
        res.send('Merci pour cette information !')
      } catch (err) {
        console.error('error while saving réponses.json', err)
        res.send('Il y a eu une erreur lors de l\'enregistrement')
      }
    } else {
      const cle = req.body.msg
      try {
        const values = await readValuesFromFile()
        const reponse = values[cle]
        res.send(cle + ': ' + reponse)
      } catch (err) {
        res.send('error while reading réponses.json', err)
      }
    }
  }
})

// PARTIE 2 : Exercice 2
app.get('/messages/all', function (req, res) {
  const db = client.db(dbName)
  const col = db.collection('messages')
  col.find().toArray(function(err, docs) {
      return res.json(docs);
  });
})

app.listen(3000, function () {
  console.log('Listening on port 3000! :)')
})

async function readValuesFromFile() {
  const reponses = await readFile('réponses.json', { encoding: 'utf8' })
  return JSON.parse(reponses)
}