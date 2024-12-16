export declare class Book {
    deweydecimalNumber(): number;
}
declare module "../lib/registry" {
    interface DataTypeRegistery {
        book: Book;
    }
}
