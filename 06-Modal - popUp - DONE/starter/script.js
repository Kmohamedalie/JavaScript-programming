'use strict';

// access the elements using classes by DOM query
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//const openModal function
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// closeModal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// display the overlay
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].addEventListener('click', openModal));

// close the modal by clicking the button
btnCloseModal.addEventListener('click', closeModal);
// overlay to disappear when you click outside
overlay.addEventListener('click', closeModal);

// "Esc" Keypress Event close modal
document.addEventListener('keydown', function (e) {
  console.log('A key way pressed');
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
