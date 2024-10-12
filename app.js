const express = require("express");
const cors = require("cors");
const connectDB = require('./db/connect.js')
const dotenv = require('dotenv')
const Car = require('./models/Car.js')
dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors())
app.get("/cars", async (req, res) => {
    const cars = await Car.find();
    res.status(200).json(cars)
});

// Middleware for handling routes that do not exist
app.use((req, res, next) => {
    res.status(404).json({ message: "Route does not exist" }); 
});

const startServer = async () => {
    try {
      await connectDB(MONGO_URL);
      app.listen(PORT, () => {
        console.log(`server is running on port : ${PORT}`);
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  startServer();

