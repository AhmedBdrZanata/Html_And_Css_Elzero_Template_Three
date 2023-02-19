let a = document.querySelector(".scroll-top");

window.onscroll = function () {
    this.scrollY >= 1000 ? a.classList.add("show") : a.classList.remove("show");
};

a.onclick = function () {
    window.scrollTo({
        top: 0,
        // behavior: "smooth",
    })
};