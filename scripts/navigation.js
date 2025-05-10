

const mainnav = document.querySelector('.menu');
const hambutton = document.querySelector('#menuButton');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
