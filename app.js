const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const { DB_HOST } = process.env;

const contactsRouter = require("./routes/index");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

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
  .then(() => console.log("Database connection successful"))
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
