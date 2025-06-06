function validateForm() {
  // Get values from the form
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const scamType = document.getElementById("scamType").value;
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked');
  const message = document.getElementById("message").value.trim();

  // Check if all required fields are filled
  if (!email || !scamType || !contactMethod || !message) {
    alert("Please fill in all required fields.");
    return false; // Stop form submission
  }

  // Show different alerts based on selected scam type
  switch (scamType) {
    case "impersonation":
      alert("Thank you. Stay cautious of impersonation scams involving government or bank officials.");
      break;
    case "love":
      alert("Thank you. Be aware of romance scams — never send money to someone you haven’t met.");
      break;
    case "investment":
      alert("Thank you. Always verify investment schemes before committing any money.");
      break;
    default:
      alert("Thank you for your enquiry.");
  }

  // Redirect to success.html
  window.location.href = "success.html";
  return false; // Prevent default form submission
}
