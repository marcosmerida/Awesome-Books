class Book {
  title;

  author;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

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
let BookArray = [];

function printScreen() {
  booklist.innerHTML = '';
  let bookArray = JSON.parse(localStorage.getItem('data'));
  if (BookArray == null) {
    BookArray = [];
  }
  let awesomeBooks = new AwesomeBooks(bookArray);
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

function addBookToList() {
  const titleinput = document.getElementById('title').value;
  const authorinput = document.getElementById('author').value;
  awesomeBooks.addBook(titleinput, authorinput);
  printScreen();
}

function removeBookFroList(index) {
  awesomeBooks.removeBook(index);
  printScreen();
}

printScreen();
