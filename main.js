document.addEventListener('DOMContentLoaded', () => {
  
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
    }
  });
});

