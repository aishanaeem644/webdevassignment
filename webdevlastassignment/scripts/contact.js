// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

document.getElementById('submit-button').addEventListener('click', function (event) {
    event.preventDefault();
    const contactPage = document.getElementById('contact-page');
    const userName = document.getElementById('user-name').value;
    const userEmail = document.getElementById('user-email').value;
    const userMessage = document.getElementById('user-message').value;

    if (!userName , !userEmail , !userMessage) {
        alert('Please fill in all the fields');
        return;
    }

    contactPage.innerHTML = '<p>Thank you for your message, ' + userName + '!</p>';
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

