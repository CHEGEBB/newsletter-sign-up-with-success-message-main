document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.inputs form');
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const dismissButton = document.querySelector('.card2 button[type="dismiss"]');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('#email').value;
        if (emailInput.trim() !== '') {
            card1.classList.add('hide');
            card2.classList.remove('hide');
        }
    });

    dismissButton.addEventListener('click', function() {
        card2.classList.add('hide');
        card1.classList.remove('hide');
    });
});