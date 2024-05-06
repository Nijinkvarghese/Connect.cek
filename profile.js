// Get elements
const profilePhoto = document.getElementById("profilePhoto");
const profilePhotoPreview = document.getElementById("profilePhotoPreview");

// Add event listener for profile photo change
profilePhoto.addEventListener("change", () => {
    const file = profilePhoto.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            profilePhotoPreview.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});
// Get a reference to the Firebase authentication service
const auth = firebase.auth();

// Get the currently signed-in user
const user = auth.currentUser;

// Add event listener for form submission
const updateProfileForm = document.getElementById("updateProfileForm");
updateProfileForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(updateProfileForm);
    const username = formData.get('username'); // Get the username from the form
    
    try {
        // Update the user's profile using Firebase authentication
        await user.updateProfile({
            displayName: username // Update the display name (username)
            // You can also update other profile information here if needed
        });
        
        // Profile updated successfully
        console.log("Profile updated successfully!");
        // You can redirect the user to another page or perform any other action here
    } catch (error) {
        // Error occurred while updating profile
        console.error("Failed to update profile:", error.message);
    }
});
