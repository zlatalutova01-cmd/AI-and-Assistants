// показать кнопку при прокрутке
window.onscroll = function () {
    const btn = document.getElementById("toTopBtn");

    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// плавный скролл вверх
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}