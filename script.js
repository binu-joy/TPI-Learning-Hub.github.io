// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

menuToggle.addEventListener('change', () => {
    navMenu.classList.toggle('active');
});

// Dropdown functionality for mobile
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.classList.toggle('active');
        }
    });
});

// Search Functionality
const searchInput = document.getElementById('search-input');
const sections = document.querySelectorAll('.section');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();

    sections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        if (sectionText.includes(filter)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Apply saved preference on load
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        accordionContent.classList.toggle('active');
    });
});

// Modal Pop-up for Course Details
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeButton = document.querySelector('.close-button');

// Only show modal if data-course exists, otherwise allow direct navigation
document.querySelectorAll('.course-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const courseDetails = this.getAttribute('data-course');

        if (courseDetails) {
            e.preventDefault(); // Prevent navigation
            modalText.innerText = courseDetails;
            modal.style.display = 'block';
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
