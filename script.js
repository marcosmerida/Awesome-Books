/* eslint-disable no-unused-vars */

/* const booklist = document.getElementById('books');
let BookArray = [];


function printScreen() {
  BookArray = JSON.parse(localStorage.getItem('data'));
  if (BookArray == null) {
    BookArray = [];
  }
  booklist.innerHTML = '';
  BookArray.forEach((value, index) => {
    const book = `<li> <p> ${value[0]}</p> <p>${value[1]}</p><button onclick="removeBookFroList(${index})">Remove</button><hr></li>`;
    const liTag = document.createElement('li');
    liTag.setAttribute('id', index);
    liTag.innerHTML = book.trim();
    booklist.appendChild(liTag);
  });
}

function updateBookStorage() {
  localStorage.setItem('data', JSON.stringify(BookArray));
}

function addBookToList() {
  const titleinput = document.getElementById('title').value;
  const authorinput = document.getElementById('author').value;
  BookArray.push([titleinput, authorinput]);
  updateBookStorage();
  printScreen();
}

function removeBookFroList(index) {
  BookArray.splice(index, 1);
  updateBookStorage();
  printScreen();
}

printScreen(); */

class Book {
  title;
  author;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }


}

class AwesomeBooks {
  allbooks = []

  constructor(storedBooks) {
    this.books = storedBooks;
  }

  addBook(title, aithor) {
     let book = new Book(title, author);
     this.allbooks.push(book)
     this.#updateBookStorage()
  }

  removeBook(index){
    this.allbooks.slice(index,1);
    this.#updateBookStorage();
  }

   #updateBookStorage() {
    localStorage.setItem('data', JSON.stringify(this.allbooks));
  }
  
}

const booklist = document.getElementById('books');
let BookArray = [];
let awesomeBooks;

function printScreen(){
  booklist.innerHTML = '';
  bookArray = JSON.parse(localStorage.getItem('data'));
  if (BookArray == null) {
    BookArray = [];
  }
  awesomeBooks = new AwesomeBooks(bookArray)
  booklist.innerHTML = '';
  if(awesomeBooks.allbooks.length > 0){
     awesomeBooks.allbooks.forEach((book, index) => {
      const book = `<li> <p> ${book.title}</p> <p>${book.author}</p><button onclick="removeBookFroList(${index})">Remove</button><hr></li>`;
      const liTag = document.createElement('li');
      liTag.setAttribute('id', index);
      liTag.innerHTML = book.trim();
      booklist.appendChild(liTag);
     })
  }
}


function addBookToList(){
  const titleinput = document.getElementById('title').value;
  const authorinput = document.getElementById('author').value;
  awesomeBooks.addBook(titleinput,authorinput)
  printScreen();
}

function removeBookFroList(index){
   awesomeBooks.removeBook(index)
   printScreen()
}

console.log("hi");
printScreen();


