import BookObject from './createBooks.js';
/* eslint-disable brace-style */
let id = JSON.parse(localStorage.getItem('maxId'));
export default class DisplayBooks {
  static displaybooks() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const addBtn = document.querySelector('#addBtn');
    const heading = document.getElementById('title1');
    const listSec = document.querySelector('.list');
    const addNewSec = document.querySelector('.addNew');
    const contactSec = document.querySelector('.contact');
    // Add Button Event
    addBtn.addEventListener('click', (e) => {
      // eslint-disable-next-line no-empty
      if (title.value === '' || author.value === '') {
        e.preventDefault();
      }
      // eslint-disable-next-line no-trailing-spaces

      else {
        BookObject.addBook(title.value, author.value, id);
        const book = new BookObject(title.value, author.value, id);
        BookObject.storeLS(book, id);
        id += 1;
        localStorage.setItem('maxId', id);
        BookObject.clearInputs();
        listSec.style.display = 'block';
        addNewSec.style.display = 'none';
        contactSec.style.display = 'none';
        heading.innerHTML = 'All Awesome Books';
      }

      e.preventDefault();
    });

    window.onload = () => {
      BookObject.displayBooks();
    };
  }
}