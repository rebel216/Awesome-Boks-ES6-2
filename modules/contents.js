import BookObject from './createBooks.js';
/* eslint-disable brace-style */
export default class DisplayBooks {
  static displaybooks() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const addBtn = document.querySelector('#addBtn');
    const heading = document.getElementById('title1');
    const listSec = document.querySelector('.list');
    const addNewSec = document.querySelector('.addNew');
    const contactSec = document.querySelector('.contact');
    let id = 1 || JSON.parse(localStorage.getItem('maxId'));
    // Add Button Event
    addBtn.addEventListener('click', (e) => {
      // eslint-disable-next-line no-empty
      BookObject.addBook(title.value, author.value, id);
      const book = new BookObject(title.value, author.value, id);
      id += 1;
      localStorage.setItem(id, JSON.stringify(book));
      BookObject.clearInputs();
      listSec.style.display = 'block';
      addNewSec.style.display = 'none';
      contactSec.style.display = 'none';
      heading.innerHTML = 'All Awesome Books';
      e.preventDefault();
    });

    window.onload = () => {
      BookObject.displayBooks();
    };
  }
}