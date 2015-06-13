(function () {
    angular
        .module("app")
        .factory("dataService", dataService);

    dataService.$inject = ["$http"];

    function dataService($http) {
        var service = {
            getMovies: getMovies,
            addMovie: addMovie,
            deleteMovie: deleteMovie,
            addRating: addRating
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

        function deleteMovie(movie) {
            return $http.post("/api/movies/deleteMovie", movie );
        }   

        function addRating(rating) {
            return $http.post("/api/movies/AddRating", rating);
        }
    }
})();

