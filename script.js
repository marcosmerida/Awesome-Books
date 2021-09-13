let booklist = document.getElementById("books");
let titleinput = document.getElementById("title");
let authorinput = document.getElementById("author");
let submitbutton = document.getElementById("button");
let counter = 1;

function Addbook(){
    let booktitle = titleinput.value;
    let bookauthor = authorinput.value;


    let book = '<li id="'+counter+'"> <p>' + booktitle + '</p> <p>' + 
    bookauthor + '</p>'+ 
    '<button onclick="removeBook('+counter+')">Remove</button><hr></li>';
    let liTag = document.createElement('li');
    liTag.innerHTML = book.trim();
    booklist.appendChild(liTag)
    console.log(booktitle);
    counter++;
}
function removeBook(id){
    
}