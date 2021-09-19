window.onload = function pageLoaded(){
        setTimeout(function() {
            console.log("Added loaded");
            $('body').addClass('loaded');
        }, 2000);

        setTimeout(function() {
            $('#type').addClass(" typewriter");
        }, 2300);
    }




    function onClickProjectMenu() {
        document.getElementById("wts-button").className = "bar-item hover-text-orange padding-16 project-button slide-left";
        document.getElementById("dig-button").className = "bar-item hover-text-orange padding-16 project-button slide-left";
        document.getElementById("ebm-button").className = "bar-item hover-text-orange padding-16 project-button slide-left";
        document.getElementById("bop-button").className = "bar-item hover-text-orange padding-16 project-button slide-left";
        document.getElementById("nuc-button").className = "bar-item hover-text-orange padding-16 project-button slide-left";
    }





    function showDiv(num) {

        setTimeout(function() {
            if (num == "1") {
                var prim = document.getElementById("project-div-wts");
                var hide1 = document.getElementById("project-div-dig");
                var hide2 = document.getElementById("project-div-ebm");
                var hide3 = document.getElementById("project-div-bop");
                var hide4 = document.getElementById("project-div-nuc");

                var primtext = document.getElementById("wts-button");
                var hide1text = document.getElementById("dig-button");
                var hide2text = document.getElementById("ebm-button");
                var hide3text = document.getElementById("bop-button");
                var hide4text = document.getElementById("nuc-button");
            }
            if (num == "2") {
                var hide1 = document.getElementById("project-div-wts");
                var prim = document.getElementById("project-div-dig");
                var hide2 = document.getElementById("project-div-ebm");
                var hide3 = document.getElementById("project-div-bop");
                var hide4 = document.getElementById("project-div-nuc");

                var hide1text = document.getElementById("wts-button");
                var primtext = document.getElementById("dig-button");
                var hide2text = document.getElementById("ebm-button");
                var hide3text = document.getElementById("bop-button");
                var hide4text = document.getElementById("nuc-button");
            }

            if (num == "3") {
                var hide1 = document.getElementById("project-div-wts");
                var hide2 = document.getElementById("project-div-dig");
                var prim = document.getElementById("project-div-ebm");
                var hide3 = document.getElementById("project-div-bop");
                var hide4 = document.getElementById("project-div-nuc");

                var hide2text = document.getElementById("wts-button");
                var hide1text = document.getElementById("dig-button");
                var primtext = document.getElementById("ebm-button");
                var hide3text = document.getElementById("bop-button");
                var hide4text = document.getElementById("nuc-button");
            }

            if (num == "4") {
                var hide3 = document.getElementById("project-div-wts");
                var hide1 = document.getElementById("project-div-dig");
                var hide2 = document.getElementById("project-div-ebm");
                var prim = document.getElementById("project-div-bop");
                var hide4 = document.getElementById("project-div-nuc");

                var hide3text = document.getElementById("wts-button");
                var hide1text = document.getElementById("dig-button");
                var hide2text = document.getElementById("ebm-button");
                var primtext = document.getElementById("bop-button");
                var hide4text = document.getElementById("nuc-button");
            }

            if (num == "5") {
                var hide3 = document.getElementById("project-div-wts");
                var hide1 = document.getElementById("project-div-dig");
                var hide2 = document.getElementById("project-div-ebm");
                var hide4 = document.getElementById("project-div-bop");
                var prim = document.getElementById("project-div-nuc");

                var hide3text = document.getElementById("wts-button");
                var hide1text = document.getElementById("dig-button");
                var hide2text = document.getElementById("ebm-button");
                var hide4text = document.getElementById("bop-button");
                var primtext = document.getElementById("nuc-button");
            }

            if (prim.style.display === "none") {

                prim.style.display = "block";
                hide1.style.display = "none";
                hide2.style.display = "none";
                hide3.style.display = "none";
                hide4.style.display = "none";

                primtext.style.color = "#b14e10"
                hide1text.style.color = "white"
                hide2text.style.color = "white"
                hide3text.style.color = "white"
                hide4text.style.color = "white"

            } else {
                prim.style.display = "none";
            }
        }, 200);
    }



//         document.onload = (function() {
 
//     setTimeout(function(){
//         document.body.addClass("loaded");
//     }, 3000);
 
// });

    window.onscroll = function() {
        on_scroll()
    };

    function on_scroll() {

        var body = document.body,
            html = document.documentElement;

        var height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (document.body.scrollTop > height / 2 || document.documentElement.scrollTop > height / 2) { //if scrolling reached 70% of height
            document.getElementById("projects").className = "slideUp";
        }

        if (document.body.scrollTop > height / 4 || document.documentElement.scrollTop > height / 4) { //if scrolling reached 70% of height
            document.getElementById("skills").className = "slideUp";
        }
    }

    window.onload = function() {
        on_load()
    };

    function on_load() {
        setTimeout(about_init(), 4000);
    }


    function nav_init() {
        document.getElementById("nav").className = "slideUp";
    }

    function about_init() {
        document.getElementById("about").className = "slideUp";
    }

    function name_init() {
        document.getElementById("name").className = "slideUp";
    }

    function im_init() {
        document.getElementById("im").className = "slideUp";
    }

    function profile_init() {
        document.getElementById("profile").className = "slideUp";
    }
