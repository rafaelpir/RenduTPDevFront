var navbar = document.querySelector("header nav");

var stickyPoint = navbar.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
        document.body.style.paddingTop = navbar.offsetHeight + "px";
    } else {
        navbar.classList.remove("sticky");
        document.body.style.paddingTop = 0;
    }
};