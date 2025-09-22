// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
}

// FAQ Toggle
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const symbol = element.querySelector('span:last-child');
    
    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        symbol.textContent = '+';
    } else {
        // Close all other open FAQs
        document.querySelectorAll('.faq-answer.active').forEach(openAnswer => {
            openAnswer.classList.remove('active');
            openAnswer.previousElementSibling.querySelector('span:last-child').textContent = '+';
        });
        answer.classList.add('active');
        symbol.textContent = '−';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Lazy loading animation for service cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all service cards and review cards
document.querySelectorAll('.service-card, .review-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Set minimum date to today for moving date input
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);
