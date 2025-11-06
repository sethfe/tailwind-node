const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');
hb.addEventListener('click', () => {
    pn.classList.toggle('hidden');
});