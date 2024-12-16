export declare class Magazine {
    issueNumber(): number;
}
declare module "../lib/registry" {
    interface DataTypeRegistery {
        magazine: Magazine;
    }
}
