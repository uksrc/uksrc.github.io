const track = document.querySelector('.carousel-track');
let currentIndex = 0;

function moveCarousel(direction) {
    const totalCards = document.querySelectorAll('.carousel-card').length;
    const cardWidth = document.querySelector('.carousel-card').offsetWidth;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
