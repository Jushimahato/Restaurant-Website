document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".toggle-btn");
    const navbarMenu = document.querySelector(".navbar-menu");

    toggleButton.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
    });
});
