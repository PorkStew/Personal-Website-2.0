const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //this will call the area open in the css
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("animate");
  //this is what fades in each link for the nav overlay NOT NECESSERY
  links.forEach(link => {
    //this will call the area fade in the css
    link.classList.toggle("fade");
  });
});