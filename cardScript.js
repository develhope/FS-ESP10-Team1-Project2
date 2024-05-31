let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const mainImage = document.querySelector('.card-img-top');

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 3);
}

function prevSlide() {
    showSlide(currentSlide - 3);
}

function updateMainImage(src) {
    mainImage.src = src;
}

// Add event listeners for next and previous buttons
document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

// Initialize the carousel
showSlide(currentSlide);

// Add click event listeners to carousel images
const carouselImages = document.querySelectorAll('.carousel-item img');
carouselImages.forEach(img => {
    img.addEventListener('click', () => {
        updateMainImage(img.src);
    });
});
