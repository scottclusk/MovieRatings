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
            var movies = dataService.deleteMovie(movie)

                .then(function (result) {
                    getMovies();
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();