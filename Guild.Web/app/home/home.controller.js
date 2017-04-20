define(["angularAMD"], function (angularAMD) {

    angularAMD
        .controller("homeController", homeController);

    homeController.$inject = ["$scope"];

    function homeController(scope) {
        var vm = this;

        $.material.init();
    };

});