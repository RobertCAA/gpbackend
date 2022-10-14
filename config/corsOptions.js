const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // If the the petition comes outside our allowed origins or we use thirparty software to test.
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // (Error object, allowed boolean)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  // This allows access-control-header in CORS
  credentials: true,
  // Default is 204.
  optionSuccessStatus: 200,
};

module.exports = corsOptions;
