const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blog");

//DB connction
mongoose
  .connect(
    "mongodb+srv://mahmoud:1111111111@cluster0.j4ubq.mongodb.net/test78?authSource=admin&replicaSet=atlas-5rlwym-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch(() => {
    console.log("DB connection failed");
  });
const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/blog", blogRoutes);

//global error handler
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
module.exports = app;
