require.config({
    baseUrl: "",
    paths: {
        "angular": "scripts/angular",
        "angularAMD": "scripts/angularAMD",
        "bootstrap": "scripts/bootstrap",
        "jquery": "scripts/jquery-1.9.1",
        "hexagon": "scripts/hexagonProgress/hexagon.progress",
        "jarallax": "scripts/jaralaxx/jarallax",
        "moment": "scripts/moment/moment",
        "owlCarousel": "scripts/owlCarousel/owl.carousel",
        "smoothScroll": "scripts/smoothScroll/smoothScroll",
        "youPlay": "scripts/youplay/youplay",
        "bannerController": "youplayApp/common/banner.controller",
        "bannerDirective": "youplayApp/common/banner.directive",
        "commonServices":"youplayApp/commonServices/common.service"
        
    },
    shim: {
        "angular": "angular",
        "bootstrap": { deps: ["jquery"] },
        "hexagon": { exports: "hexagon", deps: ["bootstrap"] },
        "jarallax": { exports: "jarallax", deps: ["bootstrap"] },
        "moment": { exports: "moment", deps: ["bootstrap"] },
        "owlCarousel": { exports: "owlCarousel", deps: ["bootstrap"] },
        "smoothScroll": { exports: "smoothScroll", deps: ["bootstrap"] },
        "youPlay": { exports: "youplay", deps: ["bootstrap"] },
        "bannerController": { deps: ["youPlay"] },
        "bannerDirective": { deps: ["youPlay"] },
        "commonServices":{deps:["youPlay"]}

    },
    deps: ["youplayApp/guild.module"]
});