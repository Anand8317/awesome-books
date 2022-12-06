import { AwesomeBooks } from './modules/awebooks.js';
import { DateTime } from './modules/luxon.js';

const book = new AwesomeBooks();

const setRmvs = () => {
  const xallRmvs = document.getElementsByClassName('rmv');
  const allRmvs = Array.from(xallRmvs);

  allRmvs.forEach((btn) => {
    btn.addEventListener('click', () => {
      book.removeBook(btn.id);
      book.displayBooks();
      setRmvs();
      window.localStorage.setItem('books', JSON.stringify(book.booksList));
    });
  });
};

const addButton = document.querySelector('#button');
addButton.addEventListener('click', () => {
  const titleInput = document.querySelector('#title').value;
  const authorInput = document.querySelector('#author').value;
  book.addToBooksList(titleInput, authorInput);
  book.displayBooks();
  setRmvs();

  window.localStorage.setItem('books', JSON.stringify(book.booksList));
});

window.onload = () => {
  const inputs = document.querySelector('.inputs');
  const bookSec = document.querySelector('.list_div');
  const contDiv = document.querySelector('.contDiv');

  contDiv.classList.add('hide');
  inputs.classList.add('hide');

  const localStorageItem = window.localStorage.getItem('books');

  if (localStorageItem) {
    book.booksList = JSON.parse(localStorageItem);

    book.displayBooks();
    setRmvs();
  }
};

const listNav = document.getElementById('list__nav1');
const addNav = document.getElementById('list__nav2');
const contNav = document.getElementById('list__nav3');
const inputs = document.querySelector('.inputs');
const bookSec = document.querySelector('.list_div');
const contDiv = document.querySelector('.contDiv');
const navTitle = document.querySelector('.nav__title');

listNav.addEventListener('click', () => {
  bookSec.classList.remove('hide');
  bookSec.classList.add('show');

  contDiv.classList.add('hide');

  inputs.classList.add('hide');
});

addNav.addEventListener('click', () => {
  inputs.classList.remove('hide');
  inputs.classList.toggle('show2');

  bookSec.classList.add('hide');

  contDiv.classList.add('hide');
});

contNav.addEventListener('click', () => {
  contDiv.classList.remove('hide');
  contDiv.classList.add('show');

  bookSec.classList.add('hide');

  inputs.classList.add('hide');
});

navTitle.addEventListener('click', () => {
  bookSec.classList.remove('hide');
  bookSec.classList.add('show');

  contDiv.classList.add('hide');

  inputs.classList.add('hide');
});


window.setInterval(() => {
  const clock = document.querySelector('.clock');
  const now1 = DateTime.now();
  clock.innerHTML = now1.toLocaleString(DateTime.DATETIME_MED);
}, 1000);