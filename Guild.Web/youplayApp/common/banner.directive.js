﻿define(["angularAMD"], function (angularAMD) {

    angularAMD
        .directive("banner", banner);

    function banner() {
        var directive = {
            restrict: "E",
            controller: "bannerController",
            controllerAs: "bannerCtrl",
            templateUrl: "youplayApp/common/bannerView.html",
            scope:{
                top: "@",
                imageurl: "@",
                controlid:"@"
            },
            link: link,
            bindToController:true
        };

        return directive;

        function link(scope, el, attr, ctrl) {
            if (typeof youplay !== 'undefined') {
                youplay.init({
                    // enable parallax
                    parallax: true,

                    // set small navbar on load
                    navbarSmall: false,

                    // enable fade effect between pages
                    fadeBetweenPages: true,

                    // twitter and instagram php paths
                    php: {
                        twitter: './php/twitter/tweet.php',
                        instagram: './php/instagram/instagram.php'
                    }
                });
            }
        };
    }

});