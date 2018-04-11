const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

var MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://heroku_sd2dz914:pdvot82hddooo1ngsi21m2chlb@ds125479.mlab.com:25479/heroku_sd2dz914";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

mongodb: app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/apiRoutes.js")(app);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
