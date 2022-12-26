const content = document.querySelector('.content');
let myLib = [];
let bookID = 1;

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    info() {
        let str = 'not read yet'
        if (this.isRead === true) {str = 'read'}
        return `${this.title} by ${this.author}, ${this.pages} pages, ${str}`   
    }

    addBooktoLibrary() {
        myLib.push(this);
        createCard(this);
        localStorage.setItem('books', JSON.stringify(myLib));
        bookID++;
    }

    remove(){
        const index = myLib.indexOf(this);
        if (index > -1) {
            myLib.splice(index, 1);
            localStorage.setItem('books', JSON.stringify(myLib));
        }
    }

    getTitle(){return this.title}
    getAuthor(){return this.author}
    getPages(){return this.pages}
    getIsRead(){return this.isRead}

    setIsRead(bool){this.isRead = bool;}
}

if (localStorage.getItem('books') !== null) {
    const booksFromStorage = JSON.parse(localStorage.getItem('books'));
    for (let i = 0; i < booksFromStorage.length; i++) {
        let book = booksFromStorage[i];
        (new Book(book.title, book.author, book.pages, book.isRead)).addBooktoLibrary();
    }
}

function createCard(book){
    let card = document.createElement('div');
    card.className = 'card';
    card.id = 'b' + bookID;

    let title = document.createElement('div');
    let author = document.createElement('div');
    let pages = document.createElement('div');
    let isRead = document.createElement('button');
    let remove = document.createElement('button');

    title.textContent = book.getTitle();
    author.textContent = book.getAuthor();
    pages.textContent = book.getPages();

    isRead.innerHTML = 'Not read'
    isRead.style.backgroundColor = 'rgb(252, 124, 124)';
    if (book.getIsRead()){
        isRead.innerHTML = 'Read';
        isRead.style.backgroundColor = 'rgb(118, 245, 118)';
    }

    remove.innerHTML = 'Remove'

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(remove);

    isRead.addEventListener('click', function(){
        if(book.getIsRead()){
            isRead.innerHTML = 'Not read'
            book.setIsRead(false);
            isRead.style.backgroundColor = 'rgb(252, 124, 124)';
        }
        else{
            isRead.innerHTML = 'Read'
            book.setIsRead(true);
            isRead.style.backgroundColor = 'rgb(118, 245, 118)';
        }
    })

    remove.addEventListener('click', function(){
        console.log(book.info());
        book.remove();
        card.remove();
    })

    content.appendChild(card);
}

const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', function(){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let isRead = false;
    if (document.querySelector('#isread').value === 'true'){
        isRead = true;
    }
    
    if (formValidator(title, author, pages)){
        let book = new Book(title, author, pages, isRead);
        book.addBooktoLibrary();
    }
})

function formValidator(title, author, pages){
    if (title.length < 1 || author.length < 1 || pages.length < 1){
        return false;
    }
    return true;
}