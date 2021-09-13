let booklist = document.getElementById("books");
let submitbutton = document.getElementById("button");
let BookArray = [];

printScreen();


function addBookToList(){
    let titleinput = document.getElementById('title').value;
    let authorinput = document.getElementById('author').value;
    BookArray.push([titleinput, authorinput]);
    updateBookStorage()
    printScreen()
}


function removeBookFroList(index){
    BookArray.splice(index,1);
    updateBookStorage()
    printScreen();
}


function printScreen(){
    BookArray = JSON.parse(localStorage.getItem("data"));
    booklist.innerHTML = "";
    BookArray.forEach(function(value, index){
        let book = '<li> <p>' + value[0] + '</p> <p>' + 
    value[1] + '</p>'+ 
    '<button onclick="removeBookFroList('+index+')">Remove</button><hr></li>';
    let liTag = document.createElement('li');
    liTag.setAttribute("id", index + ''); 
    liTag.innerHTML = book.trim();
    booklist.appendChild(liTag)
    })
}

function updateBookStorage(){
    localStorage.setItem("data", JSON.stringify(BookArray))
}
