// app.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
  
    toggleButton.addEventListener("click", function () {
      // Toggle the "dark-mode" class on the body element
      document.body.classList.toggle("dark-mode");
      
      // Optionally, update the button text
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
      } else {
        toggleButton.textContent = "Dark Mode";
      }
    });
});