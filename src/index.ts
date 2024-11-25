import BookList from "./BookList";
import LibraryUtils from "./LibraryUtils";

const bookList = new BookList();

const books = [
  {
    id: LibraryUtils.generateId(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isBorrowed: false,
    year: 1925,
    borrowedBy: null,
    category: "Fiction",
  },
  {
    id: LibraryUtils.generateId(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isBorrowed: false,
    year: 1960,
    borrowedBy: null,
    category: "Fiction",
  },
  {
    id: LibraryUtils.generateId(),
    title: "1984",
    author: "George Orwell",
    isBorrowed: false,
    year: 1949,
    borrowedBy: null,
    category: "Dystopian",
  },
  {
    id: LibraryUtils.generateId(),
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isBorrowed: false,
    year: 1813,
    borrowedBy: null,
    category: "Romance",
  },
  {
    id: LibraryUtils.generateId(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isBorrowed: false,
    year: 1960,
    borrowedBy: null,
    category: "Fiction",
  },
];

books.forEach((book) => {
  if (LibraryUtils.validateBook(book)) {
    bookList.addBook(book);
  }
});

console.log("All books:");
bookList.printBooks();

console.log("Search by title:");
console.log(bookList.searchBooks("To Kill a Mockingbird", "title"));

console.log("Search by year:");
console.log(bookList.searchBooks(1925, "year"));

console.log("Mark as borrowed:");
bookList.markAsBorrowed(3, "John");
bookList.markAsBorrowed(5, "Jane");

console.log(bookList.getBorrowedBooks());

console.log("All books after mark as borrowed:");
bookList.printBooks();

bookList.markAsReturned(3);

console.log("All books after mark as returned:");
bookList.printBooks();
