const button = document.querySelector('.button--form');
const select = document.querySelector('.select');

button.addEventListener('click', () => {
  select.classList.toggle('select--opened');
});
