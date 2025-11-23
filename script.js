
// Change message button
function changeMessage() {
    document.getElementById("message").innerText =
"Welcome to our website and thanks for visiting!";}

// Sign Up Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("thankYouMessage").style.display = "block";
});

// Contact Form
document.getElementById("contactForm2").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMessage").classList.remove("hidden");
});

document.getElementById("contactForm").addEventListener("submit", async function(e) {
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
});
