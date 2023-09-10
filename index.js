require('dotenv').config();
var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require("passport");
const path = require("path");
const url = require('url');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

var EventEmitter = require('events').EventEmitter;
var EventController = new EventEmitter();

const crypto = require('crypto');
//Setting up SESSION

var session = require("express-session")({
    secret: process.env.SESSION_SECRET || 'GOL_825020918201',
    resave: true,
    saveUninitialized: true
});



// Setting up port
const connUri = process.env.MONGO_LOCAL_CONN_URL || 'mongodb+srv://newsuser:newspwd123@cluster0.yhzn2.mongodb.net/newsblok';
console.log(connUri);
let PORT = process.env.PORT || 3001;


//=== 1 - CREATE APP
// Creating express app and configuring middleware needed for authentication

const app = express();
app.use(sslRedirect.default());

app.use(session);

app.use(bodyParser.json({
    verify: function(req, res, buf, encoding) {
        if (buf && buf.length) {
            req.rawBody = buf.toString(encoding || 'utf8');
        }
    }
}));


app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded
// view engine setup

/*

app.set('view engine', 'jade');
*/

//app.use(/public',express.static(__dirname + '/public'));'
app.set('views', path.join(__dirname, 'views'));
app.use('/views', express.static(__dirname + '/views'));
//=== 2 - SET UP DATABASE
//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(connUri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB --  database connection established successfully!'));
connection.on('error', (err) => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    process.exit();
});



//=== 4 - CONFIGURE ROUTES
//Configure Route
require('./src/routes/index')(app);

const log = require('./src/controllers/log');

//=== 5 - START SERVER
var serv = app.listen(PORT, () => console.log('Server running on http://localhost:'+PORT+'/'));

//var feedRecipes = require('./middlewares/puppeteer').feedRecipes;

//feedRecipes();