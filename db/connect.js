const mongoose = require("mongoose");

//create connect database function and export it
const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("connected to database success");
  } catch (err) {
    console.log("connect to database failed !");
    console.log(err);
  }
};

module.exports = connectDB;
