document.getElementById("submit-btn").addEventListener("click", function () {
  // Collect form data
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const comments = document.getElementById("comments").value;

  // Validate form data
  if (!name || !contact || !service || !date || !time) {
    alert("Please fill in all required fields!");
    return;
  }

  // Generate WhatsApp message
  const whatsappMessage = `Hello, I would like to book an appointment: 
- Name: ${name}
- Contact: ${contact}
- Service: ${service}
- Preferred Date: ${date}
- Preferred Time: ${time}
- Additional Comments: ${comments}`;

  const whatsappLink = `https://wa.me/+264818301098?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Generate email link
  const emailSubject = "Appointment Booking Request";
  const emailBody = `Hello, I would like to book an appointment:%0D%0A
- Name: ${name}%0D%0A
- Contact: ${contact}%0D%0A
- Service: ${service}%0D%0A
- Preferred Date: ${date}%0D%0A
- Preferred Time: ${time}%0D%0A
- Additional Comments: ${comments}`;

  const emailLink = `mailto:kvatuva@gmail.com?subject=${encodeURIComponent(
    emailSubject
  )}&body=${emailBody}`;

  // Prompt user to choose WhatsApp or Email
  const choice = confirm(
    "Do you want to send this booking via WhatsApp? (Cancel for Email)"
  );

  // Open the appropriate link
  if (choice) {
    window.open(whatsappLink, "_blank");
  } else {
    window.open(emailLink, "_blank");
  }
});

  