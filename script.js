function changeMessage() {
  document.getElementById("message").innerText = 
    "Welcome to our website and thanks for your visiting";
}

function createaccount() {
  when createaccountdone
}

// Handle form submission
document.getElementById("contactForm")
.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const thankYouMessage = document.getElementById("thankYouMessage");
  // Validate required fields
  if (!name || !email || !message) {
    alert("Please complete all fields before submitting.");
    return;
  }

  // Show thank you message
  thankYouMessage.style.display = "block";

  // Clear the form
  this.reset();

  // Optionally hide message after 3 seconds
  setTimeout(() => {
    thankYouMessage.style.display = "none";
  }, 3000);
});
