// Header scroll effect
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.nav-mobile');
const menuToggle = document.querySelector('.menu-toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Download button functionality
const downloadButton = document.querySelector('.download-button');
downloadButton.addEventListener('click', () => {
  downloadButton.classList.add('clicked');
  setTimeout(() => {
    downloadButton.classList.remove('clicked');
  }, 3000);
});

// Intersection Observer for fade-in animation
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section:not(.hero)').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 1s ease, transform 1s ease';
  observer.observe(section);
});
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.download-button');
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      // Si quieres que desaparezca después de, por ejemplo, 2 segundos:
      // setTimeout(() => btn.classList.remove('clicked'), 2000);
    });
  });
// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();