const form = querySelector('#newsleter-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
});