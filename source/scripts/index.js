const button = document.querySelector('.button--form');
const select = document.querySelector('.select');

button.addEventListener('click', () => {
  select.classList.toggle('select--opened');
  button.classList.toggle('button--opened');
});

const buttonBeds = document.querySelector('.button-beds');
const selectBeds = document.querySelector('.select-beds');

buttonBeds.addEventListener('click', () => {
  selectBeds.classList.toggle('select--opened');
  buttonBeds.classList.toggle('button--opened');
});

const buttonBaths = document.querySelector('.button-baths');
const selectBaths = document.querySelector('.select-baths');

buttonBaths.addEventListener('click', () => {
  selectBaths.classList.toggle('select--opened');
  buttonBaths.classList.toggle('button--opened');
});


