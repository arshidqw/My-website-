const path = require("path");
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your frontend
app.use(express.static("public"));

// Serve home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Save contact form messages
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    const newMessage = {
        name,
        email,
        message,
        date: new Date()
    };

    // Save to JSON file (simple database)
    const filePath = "./data/messages.json";

    let messages = [];

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        messages = JSON.parse(data);
    }

    messages.push(newMessage);

    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    res.status(200).send({ success: true, message: "Message saved!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});





