
var mongoose = require('mongoose');



// express
var express = require('express');
var app = express();

//include express middlewares
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/aarrdvark');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// define schema


var movieSchema = mongoose.Schema({
	title: String,
	director: String,
	star: String
});

// compile model

var Movie = mongoose.model('Movie', movieSchema);

app.use(bodyParser.urlencoded({extended: true}));

app.get('/movies', function(req, res){
	Movie.find(function(err, movie){
		if(err){
			console.log(err);
		}else{
			res.json(movie); 
		}

	});
	
	

});

app.post('/movies/new', function(req, res){
	console.log(req.body);
	formData = req.body;
	var movie = new Movie(formData);
	movie.save(function(err, movie){
		if(err){
			console.log(err);
		}else {
			console.log('successfully saved the movie');
			res.redirect('/movies');
		}

	});
});

app.get('/movies/:id', function(req, res) {
  movieId = req.params.id;

  // retrieve the movie from mongodb
  Movie.findById(movieId, function (err, movie) {
  	if (err) return console.log(err);

  	res.json(movie);

  });
});		
			
app.listen(8081, function(){
	console.log('server running on http://127.0.0.1:8081');

});