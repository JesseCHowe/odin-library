let myLibrary = [];

function Book(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
		return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

//!PLACEHOLDER
const theHobbit = new Book('The Hobbit','J.R.R. Tolkein',295,'not read yet');
const harryPotter = new Book('Harry Potter: and the Sorcerer\'s stone','J.K. Rowling', 312, 'read');
const naruto = new Book('Naruto', 'Masashi Kishimoto', 7805, 'read');
const toKillAMockingBird = new Book('To Kill A Mockingbird', 'Harper Lee', 195, 'not read yet');
const ABriefHistoryOfSpaceAndTime = new Book('A Brief History of Space and Time', 'Stephen Hawking', 340, 'not read yet');

const addBookToLibrary = book => myLibrary.push(book);

//!PLACEHOLDER
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(naruto);
addBookToLibrary(toKillAMockingBird);
addBookToLibrary(ABriefHistoryOfSpaceAndTime);

const bookDisplay = document.getElementById('book-display');

function render() {
	myLibrary.forEach(function(book) {
		let bookCard = document.createElement("div");
		let bookContent = document.createTextNode(`${book.info()}`);
		bookCard.appendChild(bookContent);  
		bookDisplay.appendChild(bookCard);
	});
}

render();