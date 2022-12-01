const express = require("express");
const patients = require("./data/patients");
const dontenv = require("dotenv");

const app = express();
dontenv.config();

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/patients", (req, res) => {
  res.json(patients);
});

app.get("/api/patients/:id", (req, res) => {
  const patient = patients.find((n) => n._id == req.params.id);

  res.send(patient);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
);
