export declare function maybeGetUserInfo(): UserInfoOutcome;
type UserInfoOutcomeError = readonly ["error", Error];
type UserInfoOutcomeSuccess = readonly [
    "success",
    {
        readonly name: string;
        readonly email: string;
    }
];
type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;
declare global {
    interface Window {
        myName: string;
    }
}
export {};
