const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("colors");

dotenv.config();
const { DB_HOST } = process.env;

const { contactsRouter, authRouter } = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful".green.italic.bold))
  .then(() => {
    app.listen(3000, () => {
      console.log(
        "Server is running. Use our API on port: 3000".green.italic.bold
      );
    });
  })
  .catch((error) => {
    console.error(error.message.red.italic.bold);
    process.exit(1);
  });
