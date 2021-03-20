
//Variable Declarations
var colorButton = $(".red span");
colorButton.on("click", function () {
    console.log("clkickedsnjkofsdjiunofsdjihnk");
    console.log(colorButton);
    console.log(this.classList);
    var newColor = $(this).attr("data-color");
    document.cookie = "color=" + this.classList;
    // border:5px solid white !important;
    //     box-sizing: border-box;
    // Remove class from currently active button
    $(".red > span").removeClass("active-color").removeClass("app-style-class");

    // Add class active to clicked button
    $(this).addClass("active-color");

    // Get background color of clicked
    this.classList.add(`app-style-class`);
    //$(this).css({"border" : "5px solid white", "box-sizing" : "border-box"});
    // Change background of everything with class .bg-color
    // $(".bg-color").css("background-color", newColor);
    $("#color-picker").css("fill", newColor);
    // document.cookie = newColor;
    // $("body").css("background-color", newColor);
    // Change color of everything with class .text-color
    // $("h1").css("color", newColor);
    $(".logo-clay").css("color", newColor);
    $(".submitBtn").css("background-color", newColor);
    $("hr").css("border-color", newColor);
    
    //index.html
    $(".stewart-clay").css("color", newColor);
    $(".seeMore").css("background-color", newColor);
    $(".contactMeBtn").css("background-color", newColor);
    $(".resumeBtn").css("background-color", newColor);
    if ( document.URL.includes("index.html") ) {
        $(".home-dot").css("background-color", newColor);
    } else if(document.URL.includes("contact.html")){
        $(".contact-dot").css("background-color", newColor);
    }
});


window.onload = function () {
    //issue tho is that when you go to a contact page it will reset the color they pick
    //save the color in a cookie and if its not empty use that color or do a radom one

    function getCookie(ccolor) {
        var color = ccolor + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
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
      
    //   function checkCookie() {
    //     var user = getCookie("username");
    //     if (user != "") {
    //       alert("Welcome again " + user);
    //     } else {
    //       user = prompt("Please enter your name:", "");
    //       if (user != "" && user != null) {
    //         // setCookie("username", user, 365);
    //       }
    //     }
    //   }


    var color = getCookie("color");
    if(color != ""){
        console.log("color is set already");
        document.getElementsByClassName(color)[0].click();
    } else {
    var s = Math.round(Math.random() * (5 - 1) + 1);
    console.log(s);
    document.getElementsByClassName("color" + s)[0].click();
    document.cookie = "color=color"+s;
    }
    window.addEventListener('scroll', function (e) {
        
        if (window.pageYOffset > 100) {
            document.querySelector("nav").classList.add('is-scrolling');
        } else {
            document.querySelector("nav").classList.remove('is-scrolling');
        }
    });
    const hamburger = document.querySelector(".hamburger");
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    // const navLinks = document.querySelector(".nav-links");
    menu_btn.addEventListener('click', function () {
        hamburger.classList.toggle("animate");
        hamburger.classList.toggle("is-active");
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        $("body").css("overflow", 'hidden');
    });

    // hamburger.forEach(link => {
    //     //this will call the area fade in the css
    //     link.classList.toggle("fade");
    // });
}


