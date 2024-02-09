export {};

declare global {
    type UserT = {
        displayName: string | null;
        email: string | null;
        photoURL: string | null;
    };
    
    type ErrorT = string | null;
}
