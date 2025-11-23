document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    const thankYouMessage = document.getElementById("thankYouMessage");

    if (!name || !email || !password || !confirm) {
        alert("Please complete all fields before submitting.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // SEND DATA TO BACKEND
    try {
        const response = await fetch("https://sjoe.onrender.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                message: "New signup request"
            })
        });

        const result = await response.json();
        alert(result.message);

    } catch (error) {
        alert("Error sending data to server");
    }

    // Show success message
    thankYouMessage.style.display = "block";
    this.reset();

    setTimeout(() => {
        thankYouMessage.style.display = "none";
    }, 3000);
});
