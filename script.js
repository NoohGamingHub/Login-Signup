document.addEventListener("DOMContentLoaded", () => {
  const authForm = document.getElementById("authForm");
  const toggleForm = document.getElementById("toggleForm");
  const submitBtn = document.getElementById("submitBtn");

  let isLogin = true;

  toggleForm.addEventListener("click", () => {
    isLogin = !isLogin;
    submitBtn.textContent = isLogin ? "Login" : "Sign Up";
    toggleForm.textContent = isLogin
      ? "Sign Up"
      : "Login";
    document.querySelector(".switch").innerHTML = isLogin
      ? "Don't have an account? <span id='toggleForm'>Sign Up</span>"
      : "Already have an account? <span id='toggleForm'>Login</span>";
  });

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (email && password) {
      if (isLogin) {
        alert("Login Successful!");
      } else {
        alert("Sign Up Successful!");
      }

      // Redirect to a URL after login
      window.location.href = "https://noohgaminghub.github.io/Games/"; // Replace with your desired URL
    } else {
      alert("Please fill in all fields");
    }
  });
});
