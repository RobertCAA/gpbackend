require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConnection");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

// Connects DB
connectDB();

// Middleware
//Custom middleware for logs
app.use(logger);

// Makes API available for the public
app.use(cors(corsOptions));

// Receives and parse JSON data
app.use(express.json());

// Cookie handler
app.use(cookieParser());

// Loads static files from the public folder
app.use("/", express.static(path.join(__dirname, "public")));

// Router middleware
app.use("/", require("./routes/root"));

// Catch every other petition
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not found");
  }
});

//Error Handler Middleware
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to mongoDB");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrorLog.log",
  );
});
