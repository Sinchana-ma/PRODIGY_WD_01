
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };
  

  document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
 
    const name = document.getElementById('name').value.trim(); 
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim(); 
    let errorMessages = ''; 
  
    document.getElementById('errorMessages').innerHTML = '';
  
    if (name.length < 3) {
      errorMessages += 'Name must be at least 3 characters long.<br>';
    }

    if (message.length < 10) {
        errorMessages += 'Message must be at least 10 characters long.<br>';
      }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      errorMessages += 'Please enter a valid email address.<br>';
    }
  
 
    if (errorMessages) {
      document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
      alert('Form submitted successfully!');
    }
  });
  