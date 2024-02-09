document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    
    // Send form data to PHP script using AJAX
    fetch('server/contact.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Handle the response from the PHP script
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });