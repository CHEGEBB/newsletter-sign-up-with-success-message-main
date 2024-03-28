document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.card1 form');
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        card1.classList.add('hide');
        card2.classList.remove('hide');
    });
});