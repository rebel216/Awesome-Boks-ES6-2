const collection = document.querySelector('.collection');
export default class BookObject {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static displayBooks = () => {
    collection.innerHTML = '';
    const keys = Object.keys(localStorage);
    keys.forEach((element) => {
      if (element === 'maxId') return;
      const retrievedBook = JSON.parse(localStorage.getItem(element));
      this.createElements(retrievedBook.title, retrievedBook.author, element);
    });
    if (collection.innerHTML === '') {
      collection.style.border = 'none';
    }
  };

  static addBook = (title, author, id) => {
    this.createElements(title, author, id);
  };

  static createElements = (title, author, id) => {
    const remBtn = [];
    const div = [];
    div[id] = document.createElement('div');
    div[id].setAttribute('id', id);
    const pText = document.createElement('p');
    pText.textContent = `'${title}' by ${author}`;

    remBtn[id] = document.createElement('button');
    remBtn[id].setAttribute('id', id);
    remBtn[id].textContent = 'Remove';
    remBtn[id].addEventListener('click', (e) => {
      const key = e.target.id;
      div[e.target.id].remove();
      localStorage.removeItem(key);
      if (collection.innerHTML === '') {
        collection.style.border = 'none';
      }
    });
    div[id].append(pText, remBtn[id]);
    collection.appendChild(div[id]);
    collection.style.border = '3px solid black';
  };

  static storeLS = (book, id) => {
    localStorage.setItem(id, JSON.stringify(book));
  };

  static clearInputs = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
}