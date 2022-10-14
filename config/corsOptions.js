const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
<<<<<<< HEAD
    // If the the petition comes outside our allowed origins or we use thirparty software to test.
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // (Error object, allowed boolean)
=======
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
>>>>>>> noneCORS
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
<<<<<<< HEAD
  // This allows access-control-header in CORS
  credentials: true,
  // Default is 204.
  optionSuccessStatus: 200,
=======
  credentials: true,
  optionsSuccessStatus: 200,
>>>>>>> noneCORS
};

module.exports = corsOptions;
