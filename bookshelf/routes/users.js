var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  const t = req.query.t;
  const u = req.query.f;

  res.send("respond with an user resource '/''" + t + " " + u);
});

router.get("/:userid", function (req, res, next) {
  res.send("respond with an id ");
});
module.exports = router;
