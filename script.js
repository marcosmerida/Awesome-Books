/* eslint-disable no-unused-vars */
class AwesomeBooks {
  allbooks = [];

  constructor(storedBooks) {
    this.allbooks = storedBooks;
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.allbooks.push(book);
    this.#updateBookStorage();
  }

  removeBook(index) {
    this.allbooks.splice(index, 1);
    this.#updateBookStorage();
  }

  #updateBookStorage() {
    localStorage.setItem('data', JSON.stringify(this.allbooks));
  }
}

const booklist = document.getElementById('books');
const BookArray = [];
let awesomeBooks;

function printScreen() {
  booklist.innerHTML = '';
  let bookArray = JSON.parse(localStorage.getItem('data'));
  if (bookArray == null) {
    bookArray = [];
  }
  awesomeBooks = new AwesomeBooks(bookArray);
  if (awesomeBooks.allbooks.length > 0) {
    awesomeBooks.allbooks.forEach((book, index) => {
      const bookone = `<li> <p> ${book.title}</p> <p>${book.author}</p><button onclick='removeBookFroList(${index})'>Remove</button><hr></li>`;
      const liTag = document.createElement('li');
      liTag.setAttribute('id', index);
      liTag.innerHTML = bookone.trim();
      booklist.appendChild(liTag);
    });
  }
}

function removeBookFroList(index) {
  awesomeBooks.removeBook(index);
  printScreen();
}

printScreen();

const buttonbook = document.getElementById('button').addEventListener('click', () => {
  const titleinput = document.getElementById('title').value;
  const authorinput = document.getElementById('author').value;
  awesomeBooks.addBook(titleinput, authorinput);
  printScreen();
});