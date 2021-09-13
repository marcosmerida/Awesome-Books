let booklist = document.getElementById("books");
let titleinput = document.getElementById("title").;
let authorinput = document.getElementById("author");
let submitbutton = document.getElementById("button");

function Addbook(){
    let booktitle = titleinput.value;
    let bookauthor = authorinput.innerHTML;
    let book = '<li> <p>' + titleinput + '</p> <p>' + authorinput + '</p></li>';
    let liTag = document.createElement('li');
    liTag.innerHTML = book.trim();
    booklist.appendChild(liTag)
    console.log(titleinput);
}