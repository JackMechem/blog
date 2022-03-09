var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
const cors = require('cors');

var app = express();

/*
Routers
*/
var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');
var adminRouter = require('./routes/admin');

app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/admin', adminRouter);



/*
View Engine
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



/*
use
*/
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/*
Cors
*/
app.use(cors());



/*
Error Handler
*/
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// export
module.exports = app;
