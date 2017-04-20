define(["angularAMD",
    "angular",
    "bootstrap",
    "jquery",
    "hexagon",
    "jarallax",
    "moment",
    "owlCarousel",
    "smoothScroll",
    "youPlay",
    "bannerController",
    "bannerDirective",
    "commonServices"], function (angularAMD) {
        var app = angular.module("GuildApp", []);

        

        return angularAMD.bootstrap(app);
    });