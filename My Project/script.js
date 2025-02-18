emailjs.init('RV0Sffcobv2O3k-Py');

// Get elements
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const userNote = document.getElementById('userNote');
const username = document.getElementById('username');

// EmailJS configuration (you need to sign up on EmailJS)
const serviceID = 'service_0c7qgv8';    // Your service ID
const templateID = 'template_2y3vnqi';  // Your template ID
const userID = 'RV0Sffcobv2O3k-Py';          // Your EmailJS user ID


// Save button click event
saveBtn.addEventListener('click', () => {
    const note = userNote.value.trim();
    const name = username.value.trim();

    if (note && name) {
        // Send the email with the note and username
        sendEmail(name, note);
    } else {
        alert('Please enter your name and note.');
    }
});

// Clear button click event
clearBtn.addEventListener('click', () => {
    // Clear both textarea and input fields
    userNote.value = '';
    username.value = '';
});

// Function to send email using EmailJS
function sendEmail(name, note) {
    const emailParams = {
        user_name: name,
        user_note: note,
    };

    emailjs.send(serviceID, templateID, emailParams, userID)
        .then(response => {
            alert('Your note has been sent!');
            console.log('Email sent successfully:', response);
        })
        .catch(error => {
            alert('Oops! Something went wrong.');
            console.error('Error sending email:', error);
        });
}