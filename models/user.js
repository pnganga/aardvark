// define schema
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    });

// set plugin
userSchema.plugin(passportLocalMongoose);

// compile model
var User = mongoose.model('User', userSchema);
//express settings
module.exports = User;