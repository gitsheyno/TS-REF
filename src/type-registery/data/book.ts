export class Book {
  deweydecimalNumber(): number {
    return 42;
  }
}

declare module "../lib/registry" {
  export interface DataTypeRegistery {
    book: Book;
  }
}
