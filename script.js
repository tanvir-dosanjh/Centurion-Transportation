// Select the quote button
const quoteButton = document.getElementById('quoteButton');

// Add click event listener
quoteButton.addEventListener('click', () => {
  // Open the user's email client with pre-filled recipient, subject, and body
  window.location.href = "mailto:transportationcenturion@gmail.com?subject=Request%20for%20Quote&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20transportation%20services.%0A%0AThank%20you.";
});
