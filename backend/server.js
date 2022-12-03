const express = require("express");
const patients = require("./data/patients");
const dontenv = require("dotenv");
const connectDB  = require("./config/db");
const  userRoutes  = require("./routes/userRoutes");


const app = express();
dontenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/patients", (req, res) => {
  res.json(patients);
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
