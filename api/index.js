const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const CookieParser = require("cookie-parser");
const { startSession } = require("./models/Post");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
//Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

const port = process.env.PORT || 5002;
dotenv.config();

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
app.use(express.json());
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DataBase is connected"))
  .catch((err) => console.log(err));
/* MongoDB is Connected */
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`application is working on port no : ${port}`);
});

// // Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due to Unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
