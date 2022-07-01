const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DataBase is connected"))
  .catch((err) => console.log(err));
/* MongoDB is Connected */
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(5002, () => {
  console.log("application is working ");
});
