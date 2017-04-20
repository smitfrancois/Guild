require.config({
    baseUrl: "",
    paths: {
        "angular": "scripts/angular",
        "angularAMD": "scripts/angularAMD",
        "bootstrap": "scripts/bootstrap",
        "jquery": "scripts/jquery-1.9.1",
        "material": "scripts/material/material.min",
        "ripples": "scripts/material/ripples.min",
        "mainContentController": "app/mainContent/mainContent.controller",
        "mainContentDirective": "app/mainContent/mainContent.directive",
        "mainMenuController": "app/mainMenu/mainMenu.controller",
        "mainMenuDirective": "app/mainMenu/mainMenu.directive",
        "homeController": "app/home/home.controller",
        "homeDirective":"app/home/home.directive"
    },
    shim: {
        "angular": "angular",
        "material": { exports: "material", deps: ["jquery"] },
        "ripples": { exports: "ripples", deps: ["material"] },
        "bootstrap": { deps: ["jquery"] }

    },
    deps: ["app/guild.module"]
});