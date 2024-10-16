const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const previewImage = document.querySelector('.preview');
        previewImage.src = event.target.src;
        previewImage.alt = event.target.alt;

        const figcaption = document.querySelector('.preview-container figcaption');
        figcaption.textContent = event.target.alt;
    }
});

    




