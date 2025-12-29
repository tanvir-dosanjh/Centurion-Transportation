// Select the form
const quoteForm = document.getElementById('quoteForm');

quoteForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create email body
  const body = `Hello,%0A%0AI would like to request a quote for transportation services.%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0A%0AThank you.`;

  // Open user's email client
  window.location.href = `mailto:transportationcenturion@gmail.com?subject=Request%20for%20Quote&body=${body}`;
});
