define(["angularAMD"], function (angularAMD) {

    angularAMD
        .directive("mainMenu", mainMenu);

    function mainMenu() {
        var directive = {
            restrict: "E",
            controller: "mainMenuController",
            controllerAs: "mainMenuCtrl",
            link: link,
            templateUrl: "app/mainMenu/mainMenuView.html",
            bindToController: true
        };

        return directive;

        function link(scope, el, attr, ctrl) {

        };
    }

});