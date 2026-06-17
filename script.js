document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".nav__hamburger");
    const nav = document.querySelector(".nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
    }
});
