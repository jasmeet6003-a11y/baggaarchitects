document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".nav__hamburger");
    const navLinks = document.querySelector(".nav__links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

});
