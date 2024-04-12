document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    const isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});