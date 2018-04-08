const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProfileSchema = new Schema({
  image: String,
  title: String,
  info: String,
  website: String
});

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
