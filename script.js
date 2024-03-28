document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.inputs form');
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const dismissButton = document.querySelector('.card2 button[type="dismiss"]');
    const emailInput = document.querySelector('#email');
    const confirmationEmail = document.querySelector('.subscribe strong');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            card1.classList.add('hide');
            card2.classList.remove('hide');
            confirmationEmail.textContent = email;
            removeErrorMessage();
        } else {
            displayErrorMessage();
        }
    });

    dismissButton.addEventListener('click', function() {
        card2.classList.add('hide');
        card1.classList.remove('hide');
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayErrorMessage() {
        let errorMessage = document.getElementById('email-error');
        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.id = 'email-error';
            errorMessage.classList.add('error-message');
            errorMessage.textContent = 'Valid email required';
            emailInput.parentNode.appendChild(errorMessage);
            const rect = emailInput.getBoundingClientRect();
            errorMessage.style.top = `${rect.top}px`;
            errorMessage.style.left = `${rect.right + 10}px`;
        }
        errorMessage.style.display = 'block';
        emailInput.style.borderColor = 'hsla(10, 100%, 70%, 1)';
        emailInput.style.backgroundColor = 'hsla(10, 100%, 90%, 1)';
    }

    function removeErrorMessage() {
        const errorMessage = document.getElementById('email-error');
        if (errorMessage) {
            errorMessage.style.display = 'none';
            errorMessage.remove();
            emailInput.style.borderColor = '';
        }
    }
});