(function(){
    "use strict";
    
    angular
        .module("app")
        .config(config);

    config.$inject = ["$routeProvider"];

    function config($routeProvider) {
        $routeProvider.when("/home", {
            controller: "home",
            controllerAs: "home",
            templateUrl: "app/home/home.html"
        });

        $routeProvider.otherwise({ redirectTo: "/home" });
    }
})();