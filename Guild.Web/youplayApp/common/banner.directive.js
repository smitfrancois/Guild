define(["angularAMD"], function (angularAMD) {

    angularAMD
        .directive("banner", banner);

    function banner() {
        var directive = {
            restrict: "E",
            controller: "bannerController",
            controllerAs: "bannerCtrl",
            templateUrl: "youplayApp/common/bannerView.html",
            link: link,
            bindToController:true
        };

        return directive;

        function link(scope, el, attr, ctrl) {

        };
    }

});