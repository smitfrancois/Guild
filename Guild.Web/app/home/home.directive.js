define(["angularAMD"], function (angularAMD) {

    angularAMD
        .directive("home", home);

    function home() {
        var directive = {
            restrict: "E",
            controller: "homeController",
            controllerAs: "homeCtrl",
            bindToController: true,
            link: link,
            templateUrl: "app/home/homeView.html"
        };

        return directive;

        function link(scope,el,attr,ctrl){

        };
    };

});