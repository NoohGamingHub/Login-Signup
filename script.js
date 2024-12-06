// Initialize local storage users array
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  
  // Select DOM elements
  const signupBtn = document.getElementById('signupBtn');
  const loginBtn = document.getElementById('loginBtn');
  const message = document.getElementById('message');
  
  function showMessage(msg, isError = false) {
    message.textContent = msg;
    message.style.color = isError ? 'red' : 'green';
  }
  
  signupBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!validateEmail(email)) {
      showMessage('Invalid email format.', true);
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
  
    if (existingUser) {
      showMessage('Email already exists. Try logging in.', true);
      return;
    }
  
    users.push({ email, username, password });
    localStorage.setItem('users', JSON.stringify(users));
    showMessage('Sign-up successful!');
  });
  
  loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!validateEmail(email)) {
      showMessage('Invalid email format.', true);
      return;
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
  
    if (user) {
      showMessage(`Welcome back, ${user.username}!`);
    } else {
      showMessage('Invalid email or password.', true);
    }
  });
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  