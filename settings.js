// Get a reference to the Firebase authentication service
const auth = firebase.auth();

// Get the currently signed-in user
const user = auth.currentUser;

// Function to change password
function changePassword(newPassword) {
    // Prompt the user to re-authenticate
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword // Provide the user's current password here
    );

    // Re-authenticate the user
    user.reauthenticateWithCredential(credential)
        .then(() => {
            // User re-authenticated successfully
            // Proceed to change password
            return user.updatePassword(newPassword);
        })
        .then(() => {
            // Password updated successfully
            console.log("Password updated successfully!");
        })
        .catch((error) => {
            // Error occurred while changing password
            console.error("Failed to change password:", error.message);
        });
}

// Function to update email
function updateEmail(newEmail) {
    // Prompt the user to re-authenticate
    const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        currentPassword // Provide the user's current password here
    );

    // Re-authenticate the user
    user.reauthenticateWithCredential(credential)
        .then(() => {
            // User re-authenticated successfully
            // Proceed to update email
            return user.updateEmail(newEmail);
        })
        .then(() => {
            // Email updated successfully
            console.log("Email updated successfully!");
        })
        .catch((error) => {
            // Error occurred while updating email
            console.error("Failed to update email:", error.message);
        });
}
