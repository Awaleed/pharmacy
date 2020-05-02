var express = require('express');
var User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find((err, users) => { 
    return res.json(users);
  });
});

module.exports = router;
