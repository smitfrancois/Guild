define(["angularAMD"], function (angularAMD) {

    angularAMD
        .factory("commonService", commonService);

    

    function commonService() {
        return  {
            initializeYouPlay: initializeYouPlay
        }

        function initializeYouPlay() {
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
    };

});