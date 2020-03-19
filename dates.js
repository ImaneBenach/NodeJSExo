const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  await client.connect();
  const collection = client.db("test").collection("dates");
  // affiche la liste des documents de la collection dates dans la sortie standard
  const dates = await collection.find({}).toArray();
  console.log('dates:', dates)

  await collection.insertOne({ date: new Date() });

  await client.close();
})();