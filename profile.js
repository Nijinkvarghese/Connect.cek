// Get elements
const profilePhoto = document.getElementById("profilePhoto");
const profilePhotoPreview = document.getElementById("profilePhotoPreview");
const updateProfileForm = document.getElementById("updateProfileForm");
const updatedProfile = document.getElementById("updatedProfile");

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

// Add event listener for form submission
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

        // Display updated profile information
        updatedProfile.innerHTML = `
            <p>Updated Profile:</p>
            <p>Username: ${username}</p>
            <p>Profile Photo:</p>
            <img src="${profilePhotoPreview.src}" alt="Profile Photo">
            <button id="editProfileBtn">Edit Profile</button>
        `;

        // Add event listener for edit profile button
        const editProfileBtn = document.getElementById("editProfileBtn");
        editProfileBtn.addEventListener("click", () => {
            // Clear the updated profile section and show the update form again
            updatedProfile.innerHTML = "";
            updateProfileForm.reset();
        });
    } catch (error) {
        // Error occurred while updating profile
        console.error("Failed to update profile:", error.message);
    }
});
