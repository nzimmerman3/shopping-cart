const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("short-id");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/shopping-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    name: String,
    description: String,
    price: Number,
    image: String,
    type: String,
  })
);

app.get("/api/products", async (req, res) => {
  const produts = await Product.find({});
  res.send(produts);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`serve at http://localhost:${port}`));
