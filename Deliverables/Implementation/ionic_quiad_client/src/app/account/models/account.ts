import { IUser, User } from "./user";

export interface IAccount {

    id: number;
    email: string;
    username: string;
    user: IUser;
    token: string;

}

export class Account implements IAccount {

    public readonly id: number;
    public readonly email: string;
    public readonly username: string;
    public readonly user: User;
    public readonly token: string;

    public constructor(account: IAccount) {
        this.id = account.id;
        this.email = account.email;
        this.username = account.username;
        this.user = new User(account.user);
        this.token = account.token;
    }

}
