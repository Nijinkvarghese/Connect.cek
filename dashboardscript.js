document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
  
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
  
        const targetId = this.getAttribute('href'); // Get target section id
        const targetSection = document.querySelector(targetId); // Find target section
  
        // Hide all sections
        sections.forEach(section => {
          section.style.display = 'none';
        });
  
        // Display only the target section
        targetSection.style.display = 'block';
      });
    });
  });
  