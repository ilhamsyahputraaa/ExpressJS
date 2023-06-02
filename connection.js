const { MongoClient } = require("mongodb");
const connection = "mongodb://127.0.0.1:27017/";


const db = new MongoClient(connection);

(async () => {
    try {
        await db.connect()
    } catch (err) {
        console.log(err)
    }
})();


// Export the necessary functions or variables
module.exports = db