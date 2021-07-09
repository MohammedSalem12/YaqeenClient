import { Observable } from "rxjs";
import { LoginModel } from "../domain/login-model";

export abstract class IRepository<T>  {
    abstract getAll(url:string): Observable<T[]>;
    abstract post(url:string,request:T): Observable<T>;
}
