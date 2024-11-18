
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

