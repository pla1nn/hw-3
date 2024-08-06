const openButton = document.querySelector('[data-action="open-modal"]');
const closeButton = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector('.js-backdrop');

openButton.addEventListener('click', openFn);
closeButton.addEventListener('click', closeFn);

function openFn() {
  backdrop.classList.remove('is-hidden');
}

function closeFn() {
  backdrop.classList.add('is-hidden');
}