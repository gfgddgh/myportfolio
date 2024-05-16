document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.querySelector(".menu");
    const closeBar = document.querySelector(".close");
    const navBar = document.querySelector(".nav-bar");

    menuBar.addEventListener("click", () => {
        navBar.classList.add("active");
    });

    closeBar.addEventListener("click", () => {
        navBar.classList.remove("active");
    });

    navBar.addEventListener("click", (event) => {
        if (event.target.classList.contains("element")) {
            navBar.classList.remove("active");
        }
    });
});
