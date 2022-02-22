import { UserModel } from './user.model';
export declare const getUserByName: (name: any) => boolean;
export declare const createUser: (user: UserModel) => Promise<{
    id: number;
}>;
