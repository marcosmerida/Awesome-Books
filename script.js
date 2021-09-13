let booklist = document.getElementById("books");
let titleinput = document.getElementById("title");
let authorinput = document.getElementById("author");
let submitbutton = document.getElementById("button");

function Addbook(){
    let booktitle = titleinput.textContent;
    let bookauthor = authorinput.textContent;
    let book = "<li> <p>${booktitle}</p> <p>${bookauthor}</p></li>"
    let liTag = document.createElement('li');
    liTag.innerHTML = book.trim();
    booklist.appendChild(liTag)
}