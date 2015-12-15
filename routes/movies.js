var express = require('express')
var router = express.Router();
var Movie = require('../models/movie');

router.route('/movies')
    .get(function(req, res) {
        Movie.find()
            .select('title director rating')
            .exec(function(err, movies) {


                if (err) return console.log(err);


                // res.json(movies);
                
                res.render('movies/index', {
                    "movies": movies, 'user': req.user
                });



            });
    })
    .post(function(req, res) {
        console.log(req.body);
        formData = req.body;
        var movie = new Movie(formData);
        movie.save(function(err, movie) {
            if (err) {
                console.log(err);
            } else {
                console.log('successfully saved the movie');
                res.redirect('/movies');
            }

        });
    });

router.route('/movies/new')
    .get(function(req, res) {
        res.render('movies/new');
    });

function updateMovie(method, req, res) {
    movieId = req.params.id;
    userRating = req.body.rating;
    userRating = req.body.rating;
    userTitle = req.body.title;
    userYearOfRelease = req.body.year_of_release;
    userDirector = req.body.director;

    // retrieve the movie from Mongodb
    Movie.findById(movieId, function(err, movie) {
        if (err) return console.log(err);

        movie.rating = userRating;
        movie.title = userTitle;
        movie.year_of_release = userYearOfRelease;
        movie.director = userDirector;

        movie.save(function(err, movie) {
            if (err) return console.log(err);
            

            if (method === 'PUT') {
                res.json(movie);
              
            } else {
                res.redirect('/movies/' + movie._id);
            };

        });
    });
};

router.route('/movies/:id/edit')
    .get(function(req, res) {

        movieId = req.params.id;

        // retrieve the movie from mongodb
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);

            // res.json(movie);
            res.render('movies/edit', {
                "movie": movie
            });

        });

    })
    .post(function(req, res) {
        updateMovie('POST', req, res);

    });

router.route('/movies/:id')
    .get(function(req, res) {
        movieId = req.params.id;

        // retrieve the movie from mongodb
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);

            // res.json(movie);
            res.render('movies/moviedetail', {
                "movie": movie
            });


        });
    })
    .put(function(req, res) {
        movieId = req.params.id;
        userRating = req.body.rating;
        movieDetails = req.body.details;

        // retrieve the movie from mongodb
        Movie.findById(movieId, function(err, movie) {
            if (err) return console.log(err);

            movie.rating = userRating;
            movie.details = movieDetails;
            movie.save(function(err, movie) {
                if (err) return console.log(err);
                console.log(movie);
                res.redirect("/movies");
            });

        });
    })
    .put(function(req, res) {
        updateMovie('PUT', req, res);
    })
    .delete(function(req, res) {
        movieId = req.params.id;

        // retrieve the movie from mongodb
        Movie.remove({
            _id: movieId
        }, function(err) {
            if (err) return console.log(err);

            res.send('movie deleted');

        });
    });

function deleteMovie(method, req, res) {
    movieId = req.params.id
    Movie.remove({
        _id: movieId
    }, function(err) {
        if (err) return console.log(err);
        if (method === 'GET') {
            res.redirect('/movies');
            console.log("You have deleted a movie");
        } else {
            res.send("Movie was deleted");
        }

    });
};

router.route('/movies/:id/delete')
    .get(function(req, res) {
        deleteMovie('GET', req, res);
    });

module.exports = router;
