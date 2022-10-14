const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 8000;

// Middleware

<<<<<<< HEAD
// Custom middleware to handle logs
app.use(logger);

//Makes API available to the public. Cors middleware to avoid CORS error.
=======
//Custom middleware for logs
app.use(logger);

// Makes API available for the public
>>>>>>> noneCORS
app.use(cors(corsOptions));

// Receives and parse JSON data
app.use(express.json());

<<<<<<< HEAD
// Handles cookies
app.use(cookieParser);
=======
// Cookie handler
app.use(cookieParser());
>>>>>>> noneCORS

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

<<<<<<< HEAD
// Middleware for logging errors
=======
//Error Handler Middleware
>>>>>>> noneCORS
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
