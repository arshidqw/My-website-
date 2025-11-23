// Change message button
function changeMessage() {
  document.getElementById("message").innerText =
    "Welcome to our website and thanks for visiting!";
}

// SIGN UP FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const pw = document.getElementById("password").value;
  const cf = document.getElementById("confirm").value;

  if (pw !== cf) {
    alert("Passwords do not match.");
    return;
  }

  document.getElementById("thankYouMessage").style.display = "block";

  setTimeout(() => {
    document.getElementById("thankYouMessage").style.display = "none";
  }, 4000);

  this.reset();
});

// CONTACT FORM WITH BACKEND
document.getElementById("contactForm2").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  const response = await fetch("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  });

  const result = await response.json();
  alert(result.message);

  // Show message on page
  document.getElementById("successMessage").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("successMessage").classList.add("hidden");
  }, 4000);

  this.reset();
});
