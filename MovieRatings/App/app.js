(function () {
    'use strict';

    angular.module('app', ['ngRoute'])
           .controller("application", application);

    application.$inject = ["$scope","$location"];

    function application($scope,$location) {
        $scope.title = "AppHome";

        $location.path("/home");
    }

})();