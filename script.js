// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submission feedback
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});
