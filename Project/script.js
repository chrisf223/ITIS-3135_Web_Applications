
const resourcesButton = document.getElementById('toggle-resources-sidebar');
if (resourcesButton) {
    resourcesButton.addEventListener('click', toggleResources);
}

const classButton = document.getElementById('toggle-class-sidebar');
if (classButton) {
    classButton.addEventListener('click', toggleClass);
}

function toggleResources() {
    const sidebar = document.querySelector('.resources-sidebar');
    const button = document.getElementById('toggle-resources-sidebar');

    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        button.textContent = '→';  
    } else {
        button.textContent = '←';  
    }
} 

function toggleClass() {
    const sidebar = document.querySelector('.class-sidebar');
    const button = document.getElementById('toggle-class-sidebar');
    
    sidebar.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('collapsed')) {
        button.textContent = '→';  
    } else {
        button.textContent = '←';  
    }
}


    const prevButton = document.querySelector('.left-btn');
    const nextButton = document.querySelector('.right-btn');
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    
    let currentIndex = 0;

    // Show the next image
    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first image
        }
        updateCarousel();
    });

    // Show the previous image
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        updateCarousel();
    });

    function updateCarousel() {
        carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
