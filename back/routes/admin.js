
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    message: "Hello. This is for admin. If you're not admin then then fuck off, go do something more usefull with your life."
  })
});

module.exports = router;
