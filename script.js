// Animate Skill Bars on Scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');

    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = '0%';

        // Animate when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = level + '%';
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(bar.parentElement.parentElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const subjectInput = contactForm.querySelectorAll('input[type="text"]')[1];
            const messageInput = contactForm.querySelector('textarea');

            const name = nameInput ? nameInput.value : '';
            const email = emailInput ? emailInput.value : '';
            const subject = subjectInput ? subjectInput.value : '';
            const message = messageInput ? messageInput.value : '';

            // Simple validation
            if (name && email && subject && message) {
                // Show success message (in a real app, this would send data to a server)
                alert('Terima kasih! Pesan Anda telah berhasil dikirim. Saya akan membalas segera.');
                contactForm.reset();
            } else {
                alert('Harap lengkapi semua field sebelum mengirim pesan.');
            }
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';

            if (email) {
                alert('Terima kasih telah berlangganan newsletter kami!');
                newsletterForm.reset();
            }
        });
    }

    // Initialize animations
    animateSkillBars();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
                header.style.padding = '10px 0';
            } else {
                header.style.backgroundColor = 'var(--primary-color)';
                header.style.padding = '0';
            }
        }
    });
});