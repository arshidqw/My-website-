// Button message change
function changeMessage() {
    document.getElementById("message").innerText =
        "Welcome to our website and thanks for visiting!";
}

// SIGNUP form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();

    const thankYou = document.getElementById("thankYouMessage");

    if (!name || !email || !password || !confirm) {
        alert("Please complete all fields.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    thankYou.style.display = "block";

    this.reset();

    setTimeout(() => {
        thankYou.style.display = "none";
    }, 3000);
});

// CONTACT form
document.getElementById("contactForm2").addEventListener("submit", function (e) {
    e.preventDefault();

    const success = document.getElementById("successMessage");

    success.style.display = "block";

    this.reset();

    setTimeout(() => {
        success.style.display = "none";
    }, 3000);
});
