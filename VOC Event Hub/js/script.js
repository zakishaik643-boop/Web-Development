const faqItems = document.querySelectorAll('.faq-item');
const form = document.getElementById('register-form');
const navToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

/* FAQ accordion */

faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  if (!trigger || !answer) {
    return;
  }

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');

    faqItems.forEach((faqItem) => {
      const faqAnswer = faqItem.querySelector('.faq-answer');

      faqItem.classList.remove('active');

      if (faqAnswer) {
        faqAnswer.hidden = true;
      }
    });

    if (!isOpen) {
      item.classList.add('active');
      answer.hidden = false;
    }
  });
});

/* Registration form */

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';

    if (!name || !email) {
      alert('Please complete your details before registering.');
      return;
    }

    form.submit();
  });
}

/* Mobile navigation */

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');

    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

/* Register button */

const registerButton = document.querySelector('.primary-btn');

if (registerButton) {
  registerButton.addEventListener('click', () => {
    registerButton.classList.add('active');
  });
}
