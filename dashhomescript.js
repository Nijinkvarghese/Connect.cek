// Sample data for recent posts (replace with your actual post data)
const recentPosts = [
    { title: "Exciting News: New Features Added!", content: "Discover the latest updates and enhancements to our platform.", author: "Admin", time: "2 hours ago" },
    { title: "Seeking Collaborators for a New Project", content: "Interested in joining forces? Let's create something amazing together!", author: "User123", time: "1 day ago" },
    // Add more posts as needed
];

// Function to create HTML structure for a post
function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <span>Posted by ${post.author} - ${post.time}</span>
    `;
    return postElement;
}

// Function to display recent posts
function displayRecentPosts() {
    const postsContainer = document.getElementById("posts-container");
    // Clear previous posts
    postsContainer.innerHTML = "";
    // Create and append post elements
    recentPosts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

// Call the function to display recent posts
displayRecentPosts();
