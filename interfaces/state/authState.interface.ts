import { UserModel } from "../user.interface";

export interface AuthState {
    isLogin: boolean;
    authUser: UserModel | null;
    loginToken: string | null;
    authError: string;
}