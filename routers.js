const express = require("express");
const router = express.Router();
// const connection = require("./connection");
// const { ObjectId } = require("mongodb");
require("./mongoose");
const User = require("./User");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send({ data: users });
  } catch (err) {
    res.send({ message: err.message || "Internal Server Error" });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
      res.send({ data: user });
    } else {
      res.send({ message: "User Tidak ditemukan" });
    }
  } catch (err) {
    res.send({ message: err.message || "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { name, age, status } = req.body;
    const user = await User.create({
      name,
      age,
      status,
    });
    if (user) {
      res.send({ data: user });
    } else {
      res.send({ message: "User Tidak ditemukan" });
    }
  } catch (err) {
    res.send({ message: err.message || "Internal Server Error" });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
      res.send({ data: user });
    } else {
      res.send({ message: "User Tidak ditemukan" });
    }
  } catch (err) {
    res.send({ message: err.message || "Internal Server Error" });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, status } = req.body;
    const user = await User.findOne({ _id: id }, {
      name,
      age,
      status
    }, {runValidators: true});
    if (user) {
      res.send({ data: user });
    } else {
      res.send({ message: "User Tidak ditemukan" });
    }
  } catch (err) {
    res.send({ message: err.message || "Internal Server Error" });
  }
});

// router.get("/users", async (req, res) => {
//   try {
//     const dbName = "db_latihan";
//     const connect = connection.db(dbName);
//     const collection = connect.collection("users");
//     const result = await collection.find().toArray();
//     res.send({ data: result });
//   } catch (err) {
//     res.send({ message: err.message || "Internal Server Error" });
//   }
// });

// router.post("/users", async (req, res) => {
//   try {
//     const { name, age, status } = req.body;
//     const dbName = "db_latihan";
//     const connect = connection.db(dbName);
//     const collection = connect.collection("users");
//     const result = await collection.insertOne({
//       name,
//       age,
//       status,
//     });
//     if (result.insertedCount === 1) {
//       res.send({ message : "Berhasil ditambahkan"})
//     } else {
//       res.send({ message: "Gagal Menambahkan" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal Server Error" });
//   }
// });

// router.delete("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params
//     const dbName = "db_latihan";
//     const connect = connection.db(dbName);
//     const collection = connect.collection("users");
//     const result = await collection.deleteOne(
//       { _id: new ObjectId(id) }
//     );
//     console.log(result);
//     if (result.deletedCount === 1) {
//       res.send({ message : "Berhasil dihapus"})
//     } else {
//       res.send({ message: "Gagal Dihapus" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal Server Error" });
//   }
// });

// router.put("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params
//     const { name, age, status } = req.body;
//     const dbName = "db_latihan";
//     const connect = connection.db(dbName);
//     const collection = connect.collection("users");
//     const result = await collection.updateOne(
//       { _id: new ObjectId(id) },
//       {
//         $set: {
//           name,
//           age,
//           status,
//         },
//       }
//     );
//     console.log(result);
//     if (result.modifiedCount === 1) {
//       res.send({ message : "Berhasil ditambahkan"})
//     } else {
//       res.send({ message: "Gagal Menambahkan" });
//     }
//   } catch (err) {
//     res.send({ message: err.message || "Internal Server Error" });
//   }
// });

module.exports = router;
