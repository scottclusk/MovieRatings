(function () {
    'use strict';

    angular
        .module('app')
        .directive('addMovie', addMovie);
    function addMovie(){
        var directive = {
            restrict: 'EA',
            templateUrl: 'app/home/addmovie.html',
            controller: AddMovieController,
            controllerAs: 'vm',
            scope: {
                callback: "&"
            },
            bindToController: true
        };

        AddMovieController.$inject = ['dataService','$scope'];

        return directive;

        function AddMovieController(dataService,$scope) {
            var vm = this;

            vm.movieTitle = "";
            vm.movieYear;
            vm.runningMinutes;
            vm.addMovie = addMovie;

            function addMovie() {
                dataService.addMovie({
                    Title: vm.movieTitle,
                    Year: vm.movieYear,
                    RunningMinutes: vm.runningMinutes
                }).then(function (data) {
                    //clear out textboxes
                    vm.callback();
                }, function (error) {

                });
            }
        };
    }
})();