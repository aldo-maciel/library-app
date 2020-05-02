export interface User {
    readonly _id: string;
    name: string;
    password: string;
    admin?: boolean;
    login: string;
}
