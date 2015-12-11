// define schema
var mongoose = require('mongoose');
var movieSchema = mongoose.Schema({
    title: String,
    director: String,
    star: String,
    rating: {
        type: Number,
        default: 0,
        max: 10
    },
    details: String,
});

// compile model

var Movie = mongoose.model('Movie', movieSchema);
//express settings
module.exports = Movie;