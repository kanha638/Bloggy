const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DataBase is connected"))
  .catch((err) => console.log(err));
/* MongoDB is Connected */
app.use("/api/auth", authRoute);

app.listen(5001, () => {
  console.log("application is working ");
});
