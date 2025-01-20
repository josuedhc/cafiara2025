document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

const carouselImages = document.querySelector('.carousel-images');
            const prevButton = document.getElementById('prev');
            const nextButton = document.getElementById('next');
            const totalImages = document.querySelectorAll('.carousel img').length;
            let currentIndex = 0;
    
            function updateCarousel() {
                const width = document.querySelector('.carousel img').clientWidth;
                carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
            }
    
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
                updateCarousel();
            });
    
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            });
    
            window.addEventListener('resize', updateCarousel);