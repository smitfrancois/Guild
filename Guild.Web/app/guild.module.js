define(["angularAMD",
    "angular",
    "bootstrap",
    "jquery",
    "material",
    "ripples",
    "mainContentController",
    "mainContentDirective",
    "mainMenuController",
    "mainMenuDirective",
    "homeController",
    "homeDirective"], function (angularAMD) {
        var app = angular.module("GuildApp", []);

        return angularAMD.bootstrap(app);
    });