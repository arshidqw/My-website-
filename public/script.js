// CONTACT FORM -> SEND TO BACKEND
document.getElementById("contactForm2").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    const response = await fetch("https://my-website--1-h9sg.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();
    alert(result.message);

    document.getElementById("successMessage").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("successMessage").classList.add("hidden");
    }, 4000);

    this.reset();
});
