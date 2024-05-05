document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form inputs
        const name = contactForm.elements["name"].value;
        const email = contactForm.elements["email"].value;
        const message = contactForm.elements["message"].value;

        // Perform basic validation
        if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Send form data to server (or do any other desired action)
        // For demonstration purposes, let's just log the form data
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear form inputs after submission
        contactForm.reset();

        // Show confirmation message
        const confirmationMessage = document.createElement("p");
        confirmationMessage.textContent = "Message sent successfully. Admin will contact you soon.";
        contactForm.appendChild(confirmationMessage);
    });
});
