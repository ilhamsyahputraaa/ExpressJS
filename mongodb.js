const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "db_latihan";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  // the following code examples can be pasted here...
  const result = collection.find().toArray((err, result) => {
    if (err) throw err;

    console.log(result);
  });

  return result;
}


main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
