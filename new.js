const form = document.getElementById("emailForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);
        form.reset();
      } else {
        alert("Failed to save data. " + (await response.text()));
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  } else {
    alert("Please fill in all fields");
  }
});
