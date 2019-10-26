var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// setup database coonection
mongoose.connect(
  'mongodb://admin:Uf]hgvplk1@ds237588.mlab.com:37588/phone-book',
  { useNewUrlParser: true, useUnifiedTopology: true },
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('database: counnection seccess')
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var drugsRouter = require('./routes/drugs');
var patientsRouter = require('./routes/patient');
var prescriptionsRouter = require('./routes/prescription');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/drugs', drugsRouter); 
app.use('/patients', patientsRouter); 
app.use('/prescriptions', prescriptionsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
