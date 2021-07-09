import { Observable } from "rxjs";

export abstract class IRepository<T>  {
    abstract getAll(url:string): Observable<T[]>;
}
