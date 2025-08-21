// Select the hamburger button and nav list
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    // Toggle menu visibility
    navList.classList.toggle('active');

    // Toggle icon
    if (navList.classList.contains('active')) {
        hamburger.textContent = '×';
    } else {
        hamburger.textContent = '☰';
    }
});
