window.onload = random_select;
function getCookie(color) {
    var name = color + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            $("h1").css("color", c.substring(name.length, c.length));
            $("#color-picker").css("fill", c.substring(name.length, c.length));

            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function random_select() {
    //    document.getElementById('main-color').click();
    //change the color1 to what class you want
    document.getElementsByClassName('color1')[0].click();
    var x = document.cookie;
}
var colorButton = $(".red span");

colorButton.on("click", function () {
    // border:5px solid white !important;
    //     box-sizing: border-box;
    // Remove class from currently active button
    $(".red > span").removeClass("active-color").removeClass("app-style-class");

    // Add class active to clicked button
    $(this).addClass("active-color");

    // Get background color of clicked
    var newColor = $(this).attr("data-color");
    document.cookie = "color=" + newColor;
    this.classList.add(`app-style-class`);
    //$(this).css({"border" : "5px solid white", "box-sizing" : "border-box"});
    // Change background of everything with class .bg-color
    // $(".bg-color").css("background-color", newColor);
    $("#color-picker").css("fill", newColor);


    // $("body").css("background-color", newColor);
    // Change color of everything with class .text-color
    // $("h1").css("color", newColor);
    $(".logo-clay").css("color", newColor);
    $(".submitBtn").css("background-color", newColor);
    $("hr").css("border-color", newColor);
    $(".home-dot").css("background-color", newColor);
    $(".contact-dot").css("background-color", newColor);
    //index.html
    $(".stewart-clay").css("color", newColor);
    $(".seeMore").css("background-color", newColor);
    $(".contactMeBtn").css("background-color", newColor);
    $(".resumeBtn").css("background-color", newColor);
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
const links = document.querySelectorAll(".mobile-nav");
// const list = document.querySelector(".header-body");
hamburger.addEventListener("click", () => {

    // if($(".header-body").css("overflow") === "hidden"){
    //     console.log("hidden");
    //     document.body.style.overflow = 'unset';
    // }
    // else{
    //     console.log("unset");
    //     document.body.style.overflow = 'hidden';
    // }
  //this will call the area open in the css
//   navLinks.classList.toggle("open");
  hamburger.classList.toggle("animate");
  hamburger.classList.toggle("is-active");

  //this is what fades in each link for the nav overlay NOT NECESSERY
  links.forEach(link => {
    //this will call the area fade in the css
    link.classList.toggle("fade");
  });
});
//$(document).on('click', 'div ul li', function() {
 // $(this).addClass('active').siblings().removeClass('active')
//})

window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 100) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
    const navLinks = document.querySelector(".nav-links");
	menu_btn.addEventListener('click', function () {
        hamburger.classList.toggle(".animate");
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});
    links.forEach(link => {
        //this will call the area fade in the css
        link.classList.toggle("fade");
      });
}