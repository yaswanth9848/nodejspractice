var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter = require('./routes/mobiles');
const refrigerator = require('./routes/refrigerator');
const mongoOperations = require('./routes/mongoOperations');
const addNewData = require('./routes/addNewData.js');
const updateData = require('./routes/updateData');
const deleteData = require('./routes/deleteData');
const login = require('./routes/login');
const register = require('./routes/register');
const cookie = require('./routes/cookie');
const logout = require('./routes/logout.js'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',(req, res, next)=>{
  console.log("Server is running successfully");
 next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/mobiles',mobileRouter);
app.get('/refrigerator',refrigerator);
app.get('/getData',mongoOperations);
app.post('/addData',mongoOperations);
app.delete('/deleteData',mongoOperations);
app.get('/openForm',addNewData);
app.post('/addNewData',addNewData);

app.get('/getDataToBeUpdated',updateData);
app.post('/updateNewData',updateData);

app.get('/deleteData',deleteData);

app.get('/login',login);
app.post('/login',login);
app.post('/register',register);
app.get('/register',register);
app.get('/cookie',cookie);
app.get('/logout',logout);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
