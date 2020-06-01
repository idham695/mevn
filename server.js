const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// get db
const db = require("./app/model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse content-type application/json
app.use(bodyParser.json());

// parse content-type application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  req.json({ message: "Welcome to my application" });
});

require("./app/routes/Blogroutes")(app);

// set PORT, to listen request
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
