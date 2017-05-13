var express = require("express");
// Import the model to use its database functions.
var db = require("../models");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.Burger.update({
    devoured: true
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;