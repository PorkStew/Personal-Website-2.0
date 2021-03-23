//Variable Declarations
var colorButton = $(".red span");
const hamburger = document.querySelector(".hamburger");
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
//color dot on click fuction START
colorButton.on("click", function () {
    var newColor = $(this).attr("data-color");
    //sets a cookie color to the new selected color
    document.cookie = "color=" + this.classList;
    // Remove class from currently active button
    $(".red > span").removeClass("active-color").removeClass("app-style-class");
    // Add class active to clicked button
    $(this).addClass("active-color");
    // Get background color of clicked
    this.classList.add(`app-style-class`);
    //global
    $("#color-picker").css("fill", newColor);
    $(".logo-clay").css("color", newColor);
    $("hr").css("border-color", newColor);
    //contact.html
    $(".submitBtn").css("background-color", newColor);
    //index.html
    $(".stewart-clay").css("color", newColor);
    $(".seeMore").css("background-color", newColor);
    $(".contactMeBtn").css("background-color", newColor);
    $(".resumeBtn").css("background-color", newColor);
    //check which page the user is on and set the menu button to selected accent color
    if (document.URL.includes("index.html")) {
        $(".home-dot").css("background-color", newColor);
    } else if (document.URL.includes("contact.html")) {
        $(".contact-dot").css("background-color", newColor);
    }
});
//color dot on click fuction END ----------------
//onload of a page START
window.onload = function () {
    //get the cookie that contains the color and based on that color set the accent color START
    function getCookie(ccolor) {
        var color = ccolor + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(color) == 0) {
                return c.substring(color.length, c.length);
            }
        }
        return "";
    }
    var color = getCookie("color");
    if (color != "") {
        document.getElementsByClassName(color)[0].click();
    } else {
        var s = Math.round(Math.random() * (5 - 1) + 1);
        document.getElementsByClassName("color" + s)[0].click();
        document.cookie = "color=color" + s;
    }
    //get the cookie that contains the color and based on that color set the accent color END ---------------------
    //hamburger icon onclick listener START
    menu_btn.addEventListener('click', function () {
        hamburger.classList.toggle("animate");
        hamburger.classList.toggle("is-active");
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        var x = document.getElementsByTagName("BODY")[0];

        if (document.body.style.overflow == 'hidden') {
            $("body").css("overflow", 'unset');
        }
        else {
            $("body").css("overflow", 'hidden');
        }
    });
    //hamburger icon onclick listener END --------------
}
//onload of a page END ------------

