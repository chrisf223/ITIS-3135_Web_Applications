// Sidbar Expanding and Collapsing
const resourcesButton = document.getElementById('toggle-resources-sidebar');
resourcesButton?.addEventListener('click', toggleResources);


const classButton = document.getElementById('toggle-class-sidebar');
classButton?.addEventListener('click', toggleClass);

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

//Home Image Carousel
const prevButton = document.querySelector('.left-btn');
prevButton?.addEventListener('click', previousImage);

const nextButton = document.querySelector('.right-btn');
nextButton?.addEventListener('click', nextImage);

const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0; 
images && images[currentIndex]?.classList.add('active');

let intervalId;
resetInterval();

function nextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    resetInterval();
}

function previousImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);  
    intervalId = setInterval(nextImage, 5000);  
}

