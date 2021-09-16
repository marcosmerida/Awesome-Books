/* eslint-disable max-classes-per-file */
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
      const bookone = `<li> <p> ${book.title} by ${book.author}</p><button class='removeBook' id='buttonremove' value='${index}'>Remove</button></li>`;
      const liTag = document.createElement('li');
      liTag.setAttribute('id', index);
      liTag.innerHTML = bookone.trim();
      booklist.appendChild(liTag);
    });
  } else {
    const nobookText = `<li><p>No Books avialable</p></li>`;
    const liTag = document.createElement('li');
    liTag.innerHTML = nobookText.trim();
    booklist.appendChild(liTag);
  }

  function removeBookFroList(index) {
    awesomeBooks.removeBook(index);
    printScreen();
  }

  document.querySelectorAll('.removeBook').forEach((node) => {
    node.addEventListener('click', () => {
      removeBookFroList(node.value);
    });
  });
}

printScreen();

document.getElementById('button').addEventListener('click', () => {
  const titleinput = document.getElementById('title');
  const authorinput = document.getElementById('author');
  awesomeBooks.addBook(titleinput.value, authorinput.value);
  titleinput.value = '';
  authorinput.value = '';
  printScreen();
});

document.getElementById('menuAdd').addEventListener('click', () => {
  document.getElementById("listView").style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('Inputs2AddBooks').style.display = 'block';
});

document.getElementById('menuContact').addEventListener('click', () => {
  document.getElementById("listView").style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('Inputs2AddBooks').style.display = 'none';
}); 

document.getElementById('menuList').addEventListener('click', () => {
  document.getElementById("listView").style.display = 'block';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('Inputs2AddBooks').style.display = 'none';
});