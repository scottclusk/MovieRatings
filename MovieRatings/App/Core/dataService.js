(function () {
    angular
        .module("app")
        .factory("dataService", dataService);

    dataService.$inject = ["$http"];

    function dataService($http) {
        var service = {
            getMovies: getMovies,
            addMovie: addMovie
        };

        return service;

        function getMovies() {
           return $http({
                method: "GET",
                url: "/api/movies/getmovies"
            });
        }

        function addMovie(movie) {
            return $http.post("/api/movies/addmovie", movie);
        }

        //var movie = {
        //    Title: vm.movieTitle,
        //    Year: vm.movieYear,
        //    RunningMinutes: vm.runningMinutes
        //};
    }
})();

