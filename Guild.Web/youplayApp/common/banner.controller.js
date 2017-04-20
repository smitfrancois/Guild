define(["angularAMD"], function (angularAMD) {

    angularAMD
        .controller("bannerController", bannerController);

    bannerController.$inject = ["$scope", "commonService"];

    function bannerController(scope,commonServices) {
        var vm = this;

        commonServices.initializeYouPlay();
        
    };

});