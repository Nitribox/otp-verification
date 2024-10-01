document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
  
    fetch('http://localhost:5500/sendOTP', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.getElementById('message').textContent = 'OTP sent successfully.';
          document.getElementById('otp-section').style.display = 'block';
        } else {
          document.getElementById('message').textContent = 'Error sending OTP.';
        }
      })
      .catch(error => console.error('Error:', error));
  });
  
  document.getElementById('verify-otp').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
  
    fetch('http://localhost:5500/verifyOTP', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, otp: otp }) // sending email with OTP
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.getElementById('message').textContent = 'OTP verified successfully.';
        } else {
          document.getElementById('message').textContent = 'Invalid OTP.';
        }
      })
      .catch(error => console.error('Error:', error));
  });
  