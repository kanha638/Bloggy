const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json());
console.log(process.env);
app.get("/", (req, res) => {
  res.send(process.env);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DataBase is connected"))
  .catch((err) => console.log(err));
/* MongoDB is Connected */

app.listen(5001, () => {
  console.log("application is working ");
});
