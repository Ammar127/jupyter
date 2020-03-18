var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const cookieParser = require("cookie-parser");
var path = require('path');
var serveAngular = require('./routes/serving');
var urlManager = require('./routes');
//initialize the app
var app = module.exports = express();
app.use(cors());
var env = process.env.NODE_ENV;
app.set('env', env);

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());



urlManager(app);
serveAngular(app);

// disallowMethods(app);

//set up http error handler
// app.use(errorHandler(app));

// process.on('uncaughtException', function (err, req, res) {
//     console.log(err.stack);
// });

// process.on('SIGINT', function () {
//     // calling shutdown allows your process to exit normally
//     process.exit();
// });


