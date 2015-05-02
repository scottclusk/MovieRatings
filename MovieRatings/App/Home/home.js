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

        activate();

        function activate() {
            getMovies();
        }

        function getMovies() {
            var movies = dataService.getMovies()
                .then(function (result) {
                    vm.movies = result.data;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();