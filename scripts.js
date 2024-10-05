
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactMethod = document.getElementById('contact-method').value;
    const terms = document.getElementById('terms').checked;
  
    // Validate fields
    if (!name || !email || !contactMethod || !terms) {
      alert('Please fill out all required fields and accept terms.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Store data in an object
    const formData = {
      name: name,
      email: email,
      contactMethod: contactMethod
    };
  
    
    displayFormData(formData);
  });
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function displayFormData(data) {
    const formSummary = document.getElementById('formSummary');
    const summaryContent = document.getElementById('summary-content');
  
    summaryContent.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>
    `;
  
    formSummary.style.display = 'block';
  }
  