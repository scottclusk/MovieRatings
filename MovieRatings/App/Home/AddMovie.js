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

        AddMovieController.$inject = ['dataService'];

        return directive;

        function AddMovieController(dataService) {
            var vm = this;

            vm.movieTitle = "";
            vm.movieYear;
            vm.runningMinutes;
            vm.addMovie = addMovie;
            vm.casts = [{ActorName:""}];
            
            function addMovie() {
                dataService.addMovie({
                    Title: vm.movieTitle,
                    Year: vm.movieYear,
                    RunningMinutes: vm.runningMinutes,
                    Casts: vm.casts
                }).then(function (data) {
                    //clear out textboxes
                    vm.callback();
                }, function (error) {

                });
            }
        };
    }
})();