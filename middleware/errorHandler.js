const { logEvents } = require("./logger");

<<<<<<< HEAD
const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}`,
    "errorLog.log",
  );
  // Long described error
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500; // Server error

=======
// replaces the default express error handler
const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errorLog.log",
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500; // erver error
>>>>>>> noneCORS
  res.status(status);
  res.json({ message: err.message });
};

module.exports = errorHandler;
