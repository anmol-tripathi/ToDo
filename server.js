const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/ToDoRoutes");
const app = express();
const port = 8005;
const mongodburl = "mongodb://127.0.0.1:27017/ToDo";
app.use(cors());
app.use(express.json());

mongoose
  .connect(mongodburl)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api", routes);
app.listen(port, () => {
  console.log("Listening ...");
});
