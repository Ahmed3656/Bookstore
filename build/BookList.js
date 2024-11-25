"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BookList {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(idx) {
        this.books.splice(idx - 1, 1);
    }
    searchBooks(query, field) {
        return this.books.filter((book) => book[field] === query);
    }
    markAsBorrowed(idx, borrower) {
        if (this.books[idx - 1]) {
            this.books[idx - 1].isBorrowed = true;
            this.books[idx - 1].borrowedBy = borrower;
        }
    }
    markAsReturned(idx) {
        if (this.books[idx - 1]) {
            this.books[idx - 1].isBorrowed = false;
            this.books[idx - 1].borrowedBy = null;
        }
    }
    getBorrowedBooks() {
        return this.books.filter((book) => book.isBorrowed);
    }
    printBooks() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
}
exports.default = BookList;
