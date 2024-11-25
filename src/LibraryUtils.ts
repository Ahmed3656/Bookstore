import { Book } from "./Book";

export default class LibraryUtils {
  public static generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  public static validateBook(book: Book): boolean {
    return book.title !== "" && book.author !== "" && book.year > 0 && book.category !== "";
  }
}
