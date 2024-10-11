const express = require("express");
const cors = require("cors");

const app = express();

let products = [
    { id:1 ,name:"Shirt",price:500},
    { id:2 ,name:"Pants",price:800},
    { id:3 ,name:"Watch",price:1000},
]

app.get("/products", (req, res) => {
    res.status(200).json(products)
});

// Middleware for handling routes that do not exist
app.use((req, res, next) => {
    res.status(404).json({ message: "Route does not exist" }); 
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});


