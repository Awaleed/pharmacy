var express = require('express');
var router = express.Router();


var authRouter = require('./auth');
var usersRouter = require('./users');
var drugsRouter = require('./drugs');
var patientsRouter = require('./patient');
var insuranceRouter = require('./insurance');
var prescriptionsRouter = require('./prescription');

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/drugs', drugsRouter);
router.use('/patients', patientsRouter);
router.use('/insuranse', insuranceRouter);
router.use('/prescriptions', prescriptionsRouter);

module.exports = router;
