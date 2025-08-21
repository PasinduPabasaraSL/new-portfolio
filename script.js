const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');

    if (navList.classList.contains('active')) {
        hamburger.textContent = '×';
    } else {
        hamburger.textContent = '☰';
    }
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    form.reset();

    alert("Thank you! Your message has been received.");
});
