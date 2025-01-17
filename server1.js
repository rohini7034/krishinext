const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
var serviceAccount = require("///home/user/Downloads/project-4feef-firebase-adminsdk-w6a9w-94319f2697.json"); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:  "https://project-4feef-default-rtdb.firebaseio.com",
});

const db = admin.database();
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Handle form submissions
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  const newRef = db.ref("people").push();
  newRef
    .set({ Name: name, Email: email, Message: message })
    .then(() => res.status(200).send("Data saved successfully!"))
    .catch((error) => res.status(500).send("Error saving data: " + error.message));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
