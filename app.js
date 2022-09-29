const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/vignes";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected");
});

app.use(express.json());

const crudRouter = require("./crud");
app.use("/user", crudRouter);

app.listen(8080, () => {
  console.log("Server started");
});
