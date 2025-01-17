const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./path/to/your/serviceAccountKey.json"); 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-database-name.firebaseio.com", 
});

const db = admin.database();
const app = express();
const port = 3000;


app.use(bodyParser.json());


app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  
  const ref = db.ref("people").push(); 
  ref
    .set({ Name: name, Email: email, Message: message })
    .then(() => res.status(200).json({ message: "Data saved successfully!" }))
    .catch((error) =>
      res.status(500).json({ error: "Error saving data: " + error.message })
    );
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
