const gotoTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        gotoTopBtn.classList.add("active");
    } else {
        gotoTopBtn.classList.remove("active");
    }
})