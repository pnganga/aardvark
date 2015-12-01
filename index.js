var http = require('http');
var dispatch = require('dispatch');
var mongoose = require('mongoose');
var querystring = require('querystring');


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

	// res.end();

});

// var server = http.createServer(
// 	dispatch({
// 				'/movies' : {
// 					'GET /': function(request, response, next){

// 								movies = [
// 									{
// 										title: "Final Destination",
// 										director:"Albert Johns",
// 										star: "Finch Walters"
// 									},
// 									{
// 										title: "Captivity",
// 										director:"Jordan Jones",
// 										star: "David Walkerman"
// 									},
// 									{
// 										title: "Nairobi half life",
// 										director:"John Kidum",
// 										star: "Shiks Kapyenga"
// 									}		
// 								]; 

// 								response.end(JSON.stringify(movies));
// 				},

// 				'POST /': function(request, response){
// 					// Get parameters from the form
// 					 var formData;
// 					request.on('data', function(chunk){
// 						formData = querystring.parse(chunk.toString());
// 					});

// 					request.on('end', function(){
// 						console.log(formData);
// 						// create an instanse of a movie
// 						var movie = new Movie(
// 							{
// 								title: formData.title,
// 								director: formData.director,
// 								star: formData.star
// 							})
// 						response.end();
// 					});
					
					
// 					// save the movie instance
// 					// if successful respond with the saved movie


// 				}

									
// 				}
// 			})
// );
				
			
app.listen(8081, function(){
	console.log('server running on http://127.0.0.1:8081');

});