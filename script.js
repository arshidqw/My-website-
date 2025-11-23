// SIGNUP FORM
document.getElementById("signupForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    const thankYouMessage = document.getElementById("thankYouMessage");

    if (!name || !email || !password || !confirm) {
        alert("Please complete all fields.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    try {
        const response = await fetch("https://my-backend-sjoe.onrender.com/contact", {
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
        alert("Error sending data");
    }

    thankYouMessage.classList.remove("hidden");

    setTimeout(() => {
        thankYouMessage.classList.add("hidden");
    }, 3000);

    this.reset();
});



// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const successMessage = document.getElementById("successMessage");

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    try {
        const res = await fetch("https://my-backend-sjoe.onrender.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();
        alert(data.message);

    } catch (error) {
        alert("Error sending message");
    }

    successMessage.classList.remove("hidden");

    setTimeout(() => {
        successMessage.classList.add("hidden");
    }, 4000);

    this.reset();
});
