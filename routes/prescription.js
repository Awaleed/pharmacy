var express = require('express');
var router = express.Router();

// TODO: implement prescription router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prescription' });
});

module.exports = router;