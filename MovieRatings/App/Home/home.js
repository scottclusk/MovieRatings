(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', Home);
    
    Home.$inject = ['dataService'];

    function Home(dataService) {
        var vm = this;
        vm.title = "Movies";
        vm.movies = [];
        vm.getMovies = getMovies;
        vm.deleteMovie = deleteMovie;
        vm.addRating = addRating;
        vm.ratingNumbers = [1, 2, 3, 4, 5];

        activate();

        function activate() {
            getMovies();
        }

        function getMovies() {
            dataService.getMovies()
                .then(function (result) {
                    vm.movies = result.data;
                }, function (error) {
                    console.log(error);
                });
        }

        function deleteMovie(movie) {
            dataService.deleteMovie(movie)

                .then(function (result) {
                    getMovies();
                }, function (error) {
                    console.log(error);
                });
        }

        function addRating(movieId, rating) {
            dataService.addRating({ MovieId: movieId, Rating1: rating })
                .then(function () {
                    getMovies();
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();