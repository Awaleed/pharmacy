var express = require('express');
var router = express.Router();

// TODO: implement patient router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Patient' });
});

module.exports = router;
