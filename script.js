document.getElementById("submit-btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const comments = document.getElementById("comments").value;

  if (!name || !contact || !service || !date || !time) {
    alert("Please fill in all required fields!");
    return;
  }

  const whatsappMessage = `Hello, I would like to book an appointment: 
- Name: ${name}
- Contact: ${contact}
- Service: ${service}
- Preferred Date: ${date}
- Preferred Time: ${time}
- Additional Comments: ${comments}`;

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

  const phoneNumber = "264818301098"; // Replace with your WhatsApp number
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        whatsappMessage
      )}`;

  // Ask user for preferred method
  const choice = prompt(
    "How would you like to send your booking? Type 'WhatsApp' or 'Email'."
  );

  if (choice && choice.toLowerCase() === "whatsapp") {
    window.open(whatsappLink, "_blank");
  } else if (choice && choice.toLowerCase() === "email") {
    window.open(emailLink, "_blank");
  } else {
    alert("Please type 'WhatsApp' or 'Email' to proceed.");
  }
});


  