const dialog = document.querySelector('dialog')
const booksContainer = document.querySelector('.books-container');

let myLibrary = [
    {
        title: "Atomic Habits",
        author: "James Clear",
        pages: 235,
        read: true
    },
    {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        pages: 256,
        read: true
    },
    {
        title: "Harry Potter and the Sorceror's Stone",
        author: "J.K Rowling",
        pages: 389,
        read: false
    }
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

function displayBooks() {
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card')

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "DELETE"
        deleteBtn.addEventListener('click', () => {
            myLibrary = myLibrary.filter(current => book.title !== current.title)
            booksContainer.textContent = ''
            displayBooks()
        })
        bookCard.appendChild(deleteBtn)
        
        const title = document.createElement('h2');
        title.classList.add('title')
        title.textContent = book.title;
        bookCard.appendChild(title);
        
        const author = document.createElement('h4');
        author.classList.add('author')
        author.textContent = `By: ${book.author}`;
        bookCard.appendChild(author);
        
        const pages = document.createElement('p');
        pages.classList.add('pages')
        pages.textContent = `Pages: ${book.pages}`;
        bookCard.appendChild(pages);
        
        const readContainer = document.createElement('div')
        readContainer.classList.add("read-container")

        const readToggle = document.createElement('button')
        readToggle.classList.add('read-toggle')
        readToggle.textContent = 'TOGGLE'
        readToggle.addEventListener('click', () => {
            book.read = !book.read;
            read.textContent = book.read ? "Have read" : "Have not read";
        })

        const read = document.createElement('p');
        read.classList.add('read')
        read.textContent = book.read ? "Have read" : "Have not read";

        readContainer.appendChild(read)
        readContainer.appendChild(readToggle)
        bookCard.appendChild(readContainer);

        booksContainer.appendChild(bookCard);
    });
}


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push({
        title,
        author,
        pages,
        read
    })
}

const deleteBook = () => {

}
displayBooks()

// query selectors
document.querySelector('.new-book').addEventListener('click', () => dialog.showModal())
document.querySelector('.close-modal').addEventListener('click', () => dialog.close())
document.querySelector('.submit').addEventListener('click', (event) => {
    event.preventDefault()
    const form = document.querySelector('form')

    const newTitle = document.querySelector('#title').value
    const newAuthor = document.querySelector('#author').value
    const newPages = document.querySelector('#pages').value
    const newRead = document.querySelector('#read').value   

    addBookToLibrary(newTitle, newAuthor, newPages, newRead)
    booksContainer.textContent = ''
    displayBooks()
    form.reset()
})