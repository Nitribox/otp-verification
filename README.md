# otp-verification
OTP Email Verification System
A simple OTP (One-Time Password) email verification system built using Node.js, Express, HTML, CSS, and JavaScript. This project sends an OTP to a user’s email and verifies it on the frontend. The system ensures responsive design for user-friendliness across devices.

Features
Generates a 4-digit OTP and sends it to the user’s email.
Verifies the OTP entered by the user.
Frontend fully responsive using HTML, CSS, and JavaScript.
Backend implemented with Node.js, Express, and Nodemailer.
Cross-origin request handling with CORS.
Prerequisites
Before running the project, make sure you have the following installed:

Node.js (v12 or higher)
npm
Installation
1. Clone the repository
2. git clone https://github.com/yourusername/otp-email-verification.git
cd otp-email-verification
Install dependencies
Run the following command to install the required dependencies for the backend:
npm install
3. Set up environment variables
Create a .env file in the root directory and add the following variables:
EMAIL=your-email@gmail.com
PASSWORD=your-app-password
PORT=3000
Replace your-email@gmail.com with the email address that will send the OTPs.
Replace your-app-password with the email app password (for Gmail, you may need to set up an App Password).
4. Start the server
Run the following command to start the Node.js backend server:
node index.js
The server will be running on http://localhost:3000.

Running the Project
Frontend
Open the index.html file located in the project root using a browser (no need for a local server).
Enter your email address in the form and click Send OTP.
Check your email for the OTP and enter it in the OTP field.
Click Verify OTP to verify the OTP.
Backend
The backend runs on Node.js using Express.js. It handles sending emails via Nodemailer and validating the OTP.

Responsiveness
The frontend design is responsive, meaning it will adjust correctly on mobile, tablet, and desktop screens. This has been achieved using custom CSS and media queries.

Project Structure
.
├── index.html       # Frontend HTML page
├── script.js        # Frontend JavaScript for handling OTP logic
├── styles.css       # Frontend CSS for styling and responsiveness
├── index.js         # Node.js backend for sending and verifying OTPs
├── package.json     # npm package file
├── .env             # Environment variables file (ignored in git)
└── README.md        # Project README file
Technologies Used
Frontend:
HTML5, CSS3, JavaScript
Fully responsive with CSS
Backend:
Node.js, Express.js
Nodemailer for sending emails
Other:
CORS for cross-origin requests
dotenv for managing environment variables
follow this and u will be able to run the project . Thanks karan Chauhan later.....🙆🙆👍🪔
