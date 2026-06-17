document.addEventListener("DOMContentLoaded", function () {

    const nav = document.querySelector(".nav");
    const hamburger = document.querySelector(".nav__hamburger");

    if (hamburger && nav) {
        hamburger.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }

});
