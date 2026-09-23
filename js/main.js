// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Booking Form Submission Handling
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const service = document.getElementById('service').value;
      const name = document.getElementById('customer-name').value;
      const phone = document.getElementById('customer-phone').value;
      const address = document.getElementById('service-address').value;
      const date = document.getElementById('preferred-date').value;
      const time = document.getElementById('preferred-time').value;
      const details = document.getElementById('requirement-details').value;

      const refCode = 'SES-' + Math.floor(100000 + Math.random() * 900000);

      // Construct WhatsApp pre-filled booking message
      const text = `*New Service Booking Request*\n` +
        `Ref: ${refCode}\n` +
        `Service: ${service}\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Address: ${address}\n` +
        `Preferred Slot: ${date} at ${time}\n` +
        `Details: ${details}`;

      const waUrl = `https://wa.me/8754081311?text=${encodeURIComponent(text)}`;

      // Show confirmation alert and redirect
      alert(`Booking request generated!\nReference Number: ${refCode}\n\nRedirecting to WhatsApp to send your request details to our team.`);
      window.open(waUrl, '_blank');
      bookingForm.reset();
    });
  }
});