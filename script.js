let booklist = document.getElementById("books");
let submitbutton = document.getElementById("button");
let counter = 1;
let BookArray = [];

/*  function Addbook(){
    let titleinput = document.getElementById('title').value;
    let authorinput = document.getElementById('author').value;

    let book = '<li> <p>' + titleinput + '</p> <p>' + 
    authorinput + '</p>'+ 
    '<button onclick="removeBook('+counter+')">Remove</button><hr></li>';
    let liTag = document.createElement('li');
    liTag.setAttribute("id", counter + ''); 
    liTag.innerHTML = book.trim();
    booklist.appendChild(liTag)
    counter++;
}
function removeBook(id){
    let idTag = document.getElementById(id);
    booklist.removeChild(idTag);
} */

function Addbook(){
    //!Getting values from the input
    let titleinput = document.getElementById('title').value;
    let authorinput = document.getElementById('author').value;
    //!Appending data to the array
    BookArray.push([titleinput, authorinput]);
    let bval = "";
    for(i = o; i <BookArray.length; i++){
        bval = bval + BookArray[i];
    }
    //!displaying array data
    document.getElementById('').innerHTML = bval;
}