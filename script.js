const form = querySelector('form');
const card1 = querySelector('.card1');
const card2 = querySelector('.card2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    card1.classList.add('hide');
    card2.classList.remove('hide');
});