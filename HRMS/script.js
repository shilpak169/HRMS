document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const errorMessage = document.getElementById("error-message");

  // Simple login simulation
  if (role === "admin") {
    if (username === "admin" && password === "admin123") {
      errorMessage.textContent = "Login successful as Admin!";
      errorMessage.style.color = "green";
      window.location.href = 'admin.html';
      // Redirect to admin dashboard or perform other actions
    } else {
      errorMessage.textContent = "Invalid Admin credentials!";
    }
  } else if (role === "employee") {
    if (username === "employee" && password === "employee123") {
      errorMessage.textContent = "Login successful as Employee!";
      errorMessage.style.color = "green";
      window.location.href = 'employee.html';
      // Redirect to employee dashboard or perform other actions
    } else {
      errorMessage.textContent = "Invalid Employee credentials!";
    }
  } else {
    errorMessage.textContent = "Invalid credentials!";
  }
});
