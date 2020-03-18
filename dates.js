const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/date';
const dbName = 'date';

(async function() {

    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("connected correctly");
      const db = client.db(dbName);
      const col = db.collection("dates");
      r = await db.collection('dates').insertOne({date: new Date()}); 
      assert.equal(1, r.insertedCount);
      console.log("successful");
      
      const cursor = col.find();
      while(await cursor.hasNext()) {
        const doc = await cursor.next();
        console.dir(doc);
      }
      console.log("ok");

    } catch (err) {
      console.log(err.stack);
    }
  
    client.close();
  })();