const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/user/:id", function (req, res) {
  const id = req.params.id;
  if (Number(id) === 1) {
    const user = {
      id: 1,
      name: "Ilhamsyah Putra",
      age: 25,
      Favorite: {
        drink: "coca-cola",
        food: "McDonalds",
      },
    };
    res.send(user);
  } else {
    const user = {
      id: 2,
      name: "Fatkhur Rabbani",
      age: 24,
      Favorite: {
        drink: "Kopi",
        food: "Sandwich",
      },
    };
    res.send(user);
  }
});

router.get("/users", function (req, res) {
  const name = req.query.name;
  const age = req.query.age;
  res.send(name + " " + age + " ");
});

router.post("/users", function (req, res) {
  res.send("post Users");
});

router.put("/users", function (req, res) {
  res.send("put users");
});

router.delete("/users", function (req, res) {
  res.send("Delete Request");
});

module.exports = router;