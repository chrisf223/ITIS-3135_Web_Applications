const root = document.documentElement;

const buttons = document.querySelectorAll('.accordion-label');

function buttonClick(event) {
    const btn = event.target;
    const content = btn.nextElementSibling;

    btn.classList.toggle('open');
    content.classList.toggle('open');

    root.style.setProperty('--content-height', content.classList.contains('open') 
        ? `${content.scrollHeight}px` 
        : '0px'
    );

    buttons.forEach(otherBtn => {
        if (otherBtn !== btn && otherBtn.classList.contains('open')) {
            otherBtn.classList.remove('open');
            const otherContent = otherBtn.nextElementSibling;
            if (otherContent) {
                otherContent.classList.remove('open');
                root.style.setProperty('--content-height', '0px');
            }
        }
    });
}

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
});
