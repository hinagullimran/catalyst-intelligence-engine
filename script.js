document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');
    const progress = document.getElementById('progress');
    
    let currentSlide = 0;
    const totalSlides = 5;

    function updateSlides() {
        // Move the wrapper
        wrapper.style.transform = `translateX(-${currentSlide * 100}vw)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });

        // Update progress bar
        const progressWidth = ((currentSlide + 1) / totalSlides) * 100;
        progress.style.width = `${progressWidth}%`;

        // Update buttons
        prevBtn.classList.toggle('disabled', currentSlide === 0);
        nextBtn.classList.toggle('disabled', currentSlide === totalSlides - 1);
    }

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlides();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlides();
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlides();
            }
        }
    });

    // Handle dots click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlides();
        });
    });

    // Initial state
    updateSlides();
});
