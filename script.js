document.addEventListener("DOMContentLoaded", function() {
  // Dummy username and password
  const validUsername = "Wang123";
  const validPassword = "Wang1";

  // Form submission event listener
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if username and password are correct
    if (username === validUsername && password === validPassword) {
      // Redirect to the dashboard page
      window.location.href = "dashboard.html";
    } else {
      // Display error message or perform other actions
      alert("Incorrect username or password. Please try again.");
    }
  });
});