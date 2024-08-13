const myLibrary = [];

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("bookAuthor").value;
  const page = document.getElementById("bookPage").value;
  const read = document.getElementById("readCheck").checked;

  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
}

function displayLibrary() {
  const libraryDisplay = document.getElementById("libraryDisplay");
  libraryDisplay.innerHTML = ''; 
  libraryContainer.style.display = 'block'; 

  if (myLibrary.length === 0) {
    libraryDisplay.innerHTML = '<p>Library is empty.</p>';
  } else {
    myLibrary.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.className = 'mb-2 p-2 border';
      bookElement.innerHTML = `
        <h6>Title: ${book.title}</h6>
        <p>Author: ${book.author}</p>
        <p>Page: ${book.page}</p>
        <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      `;
      libraryDisplay.appendChild(bookElement);
    });
  }
}

