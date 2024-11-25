"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryUtils {
    static generateId() {
        return Math.floor(Math.random() * 1000000);
    }
    static validateBook(book) {
        return book.title !== "" && book.author !== "" && book.year > 0 && book.category !== "";
    }
}
exports.default = LibraryUtils;
