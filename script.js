const booklist = document.getElementById('books');
let BookArray = [];

function printScreen(){
  BookArray = JSON.parse(localStorage.getItem('data'));
  if(BookArray == null){
      BookArray = [];
  }
  booklist.innerHTML = "";
  BookArray.forEach(function(value, index) {
      let book = '<li> <p>' + value[0] + '</p> <p>' + 
  value[1] + '</p>'+ 
  '<button onclick="removeBookFroList('+index+')">Remove</button><hr></li>';
  let liTag = document.createElement('li');
  liTag.setAttribute('id', index + ''); 
  liTag.innerHTML = book.trim();
  booklist.appendChild(liTag);
    });
  }

function addBookToList(){
  const titleinput = document.getElementById('title').value;
  const authorinput = document.getElementById('author').value;
  BookArray.push([titleinput, authorinput]);
  updateBookStorage();
  printScreen();
}

function removeBookFroList(index){
  BookArray.splice(index,1);
  updateBookStorage();
  printScreen();
}

printScreen();

function updateBookStorage(){
  localStorage.setItem('data', JSON.stringify(BookArray));
}
