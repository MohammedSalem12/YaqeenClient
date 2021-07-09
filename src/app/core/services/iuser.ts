import { Observable } from "rxjs";
import { UserModel } from "../domain/user-model";

export abstract class IUser {
    abstract getAllUsers(): Observable<UserModel[]>;
}
