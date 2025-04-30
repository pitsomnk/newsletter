document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('error-message');
  const signUpContainer = document.getElementById('sign-up-container');
  const successContainer = document.getElementById('success-container');
  const confirmationEmail = document.getElementById('confirmation-email');
  const dismissBtn = document.getElementById('dismiss-btn');

  // Show error state
  function showError() {
    emailInput.classList.add('error');
    errorMessage.style.display = 'block';
  }

  // Hide error state
  function hideError() {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  }

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Real-time validation as user types
  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
      hideError();
    } else if (!validateEmail(emailInput.value)) {
      showError();
    } else {
      hideError();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Trim whitespace from email
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      // Valid email
      confirmationEmail.textContent = email;
      signUpContainer.classList.add('hidden');
      successContainer.classList.remove('hidden');
    } else {
      // Invalid email
      showError();
    }
  });

  dismissBtn.addEventListener('click', () => {
    successContainer.classList.add('hidden');
    signUpContainer.classList.remove('hidden');
    emailInput.value = '';
    hideError();
  });

  // Navbar Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Check if hamburger and navLinks exist before adding event listeners
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
});