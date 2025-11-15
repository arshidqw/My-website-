// Change message when clicking button
function changeMessage() {
    document.getElementById("message").innerText =
        "Welcome to our website and thanks for visiting!";
}


// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();

    const thankYouMessage = document.getElementById("thankYouMessage");

    // Validate required fields
    if (!name || !email || !password || !confirm) {
        alert("Please complete all fields before submitting.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Show success message
    thankYouMessage.style.display = "block";

    // Clear form
    this.reset();

    // Hide after 3 seconds
    setTimeout(() => {
        thankYouMessage.style.display = "none";
    }, 3000);
});
        
