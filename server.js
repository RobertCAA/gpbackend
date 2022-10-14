const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

// Middleware
// Receives and parse JSON data
app.use(express.json());

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

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
