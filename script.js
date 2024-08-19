const imageWrapper = document.getElementById('imageWrapper');
const previousSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

let currentIndex = 0;
const slides = document.querySelectorAll('.slide-image');
const totalSlides = slides.length;

function changeSlide(newIndex) {
    currentIndex = (newIndex + totalSlides) % totalSlides;
    imageWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextSlide() {
    changeSlide(currentIndex + 1);
}

function showPreviousSlide() {
    changeSlide(currentIndex - 1);
}

nextSlide.addEventListener('click', showNextSlide);
previousSlide.addEventListener('click', showPreviousSlide);

setInterval(showNextSlide, 4000);
