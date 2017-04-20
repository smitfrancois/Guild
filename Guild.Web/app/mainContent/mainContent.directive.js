define(["angularAMD"], function (angularAMD) {

    angularAMD
        .directive("mainContent", mainContent);

    function mainContent() {
        var directive = {
            restrict: "E",
            controller: "mainContentController",
            controllerAs: "mainContentCtrl",
            bindToController: true,
            link: link,
            templateUrl: "app/mainContent/mainContentView.html"
        };

        return directive;

        function link(scope, el, attr, ctrl) {

        };
    };

});