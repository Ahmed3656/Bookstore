import { Book } from "./Book";

export default class BookList {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);  
  }

  removeBook(idx: number): void {
    this.books.splice(idx - 1, 1);
  }

  searchBooks(query: string | number, field: keyof Book): Book[] {
    return this.books.filter((book) => book[field] === query);
  }

  markAsBorrowed(idx: number, borrower: string): void {
    if (this.books[idx - 1]) {
      this.books[idx - 1].isBorrowed = true;
      this.books[idx - 1].borrowedBy = borrower;
    }
  }

  markAsReturned(idx: number): void {
    if (this.books[idx - 1]) {
      this.books[idx - 1].isBorrowed = false;
      this.books[idx - 1].borrowedBy = null;
    }
  }

  getBorrowedBooks(): Book[] {
    return this.books.filter((book) => book.isBorrowed);
  }

  printBooks(): void {
    this.books.forEach((book) => {
      console.log(book);
    });
  }
}
