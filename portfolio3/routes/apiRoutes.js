const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.get("/home", (req, res) => {
    res.render("home");
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });

  app.get("/portfolio", (req, res) => {
    db.Profile.find({}, (err, allProfile) => {
      if (err) {
        console.log(err);
      } else {
        res.render("portfolio", { profile: allProfile });
      }
    });
  });
};
