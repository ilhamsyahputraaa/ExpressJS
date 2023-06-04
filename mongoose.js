// getting-started.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db_latihan", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {

    console.log("Server Database Connect")


//   const users = await User.find();
//   console.log(users);
  // we're connected!
  // try {
  //   const newUser = await User.create({
  //       name: 'Nasryan Tiar',
  //       age: 25,
  //       status: 'active'
  //   });
  //   console.log(newUser);
  //   }
});
