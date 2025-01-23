// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select all links inside the nav with id 'nav1'
    const navLinks = document.querySelectorAll('#nav1 a');
  
    // Loop through all links and add event listeners
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Remove the 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add the 'active' class to the clicked link
        this.classList.add('active');
      });
    });
  });
  