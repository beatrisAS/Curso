let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-cyan", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-cyan";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Inicializar o slideshow ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    showSlides(slideIndex);
});
