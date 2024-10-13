const express = require("express");
const cors = require("cors");
const Car = require("./models/Car.js");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.status(200).json({ msg: "Welcome to our API" });
});

app.get("/api/cars", async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
});

app.get("/api/orders",(req,res)=>{
    res.status(200).json({ orders:"node.js api ec2 ci/cd orders route"})
})

// Middleware for handling routes that do not exist
app.use((req, res, next) => {
  res.status(404).json({ msg: "Route does not exist" });
});

module.exports = app;
