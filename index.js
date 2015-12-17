// express
var express = require('express');
var cons = require('consolidate');
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// express middleware
var bodyParser = require('body-parser');

// include mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aarrdvark');

// express settings
app.set('port', (process.env.PORT || 8081));
app.engine('html', cons.liquid);
app.set('views',  path.join(__dirname, 'views'));
app.set('view engine', 'html');

// express middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false

}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Include routes
var moviesRoutes = require('./routes/movies');
app.use(moviesRoutes);
var usersRoutes = require('./routes/users');
app.use(usersRoutes);
var indexRoute = require('./routes/index');
app.use(indexRoute);

// passport config
var User = require('./models/user');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(app.get('port'), function() {
    console.log('server running on http://127.0.0.1:%s', app.get('port'));

});
