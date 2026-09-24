document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const navbar = document.getElementById("navbar");

  if (mobileToggle && navbar) {
    mobileToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (navbar.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });

    // Close menu when clicking navigation link
    navbar.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      });
    });
  }

  // 2. Set Minimum Date on Datepicker (Can only book today onwards)
  const dateInput = document.getElementById("preferredDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
  }

  // 3. Service Booking Request Form -> WhatsApp Direct Message
  const bookingForm = document.getElementById("serviceBookingForm");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const service = document.getElementById("serviceSelect").value;
      const name = document.getElementById("customerName").value.trim();
      const phone = document.getElementById("customerPhone").value.trim();
      const email = document.getElementById("customerEmail").value.trim() || "Not provided";
      const address = document.getElementById("serviceAddress").value.trim();
      const date = document.getElementById("preferredDate").value;
      const time = document.getElementById("preferredTime").value;
      const notes = document.getElementById("serviceNotes").value.trim();

      // Format WhatsApp Message
      const message = 
`*NEW SERVICE BOOKING REQUEST*
----------------------------------
*Service:* ${service}
*Customer:* ${name}
*Phone/WA:* ${phone}
*Email:* ${email}
*Location:* ${address}
*Preferred Date:* ${date}
*Preferred Time:* ${time}

*Requirement Notes:*
${notes}
----------------------------------
Sent from Sky Express & Solution Website`;

      const encodedMessage = encodeURIComponent(message);
      const companyWhatsAppNumber = "8754081311";
      const whatsappUrl = `https://wa.me/${companyWhatsAppNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Optional UX Feedback
      alert("Thank you! Opening WhatsApp to send your booking request directly to our team.");
      bookingForm.reset();
    });
  }

  // 4. FAQ Accordion Behavior
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const activeHeader = document.querySelector(".accordion-header.active");
      if (activeHeader && activeHeader !== header) {
        activeHeader.classList.remove("active");
        activeHeader.nextElementSibling.style.maxHeight = null;
      }

      header.classList.toggle("active");
      const body = header.nextElementSibling;
      if (header.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = null;
      }
    });
  });
});