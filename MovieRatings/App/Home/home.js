(function () {
    'use strict';

    angular
        .module('app')
        .controller('home', Home);
    
    Home.$inject = ['$http']
    function Home($http) {
        var vm = this;
        vm.title = "Movies";
        vm.movies = [];
        vm.addMovie = addMovie;
        vm.movieTitle = "";
        vm.movieYear;
        vm.runningMinutes;

        activate();

        function activate() {
            getMovies();
        }

        function getMovies() {
            $http({
                method: "GET",
                url: "/api/movies/getmovies"
            }).success(function (data) {
                vm.movies = data;
            }).error(function (error) {
            });
        }

        function addMovie() {
            var movie = {
                Title: vm.movieTitle,
                Year: vm.movieYear,
                RunningMinutes: vm.runningMinutes
            };

            $http.post("/api/movies/addmovie", movie)
                .success(function(){
                    
                });
        }
        //{
        //Title: "Test",
        //Year: 1999,
        //RunningMinutes: 150
        //}
    }
})();