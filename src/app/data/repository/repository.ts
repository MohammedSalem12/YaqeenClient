import { Observable } from "rxjs";
import { IRepository } from "src/app/core/repositories/irepository";
import { HttpClient } from "@angular/common/http";
import { UserRepositoryMapper } from "../mapper/user-repository-mapper";
import { Injectable } from "@angular/core";


@Injectable()
export class Repository<T> extends IRepository<T> {
  

    constructor(private http: HttpClient){super()}
      
         getAll(url:string): Observable<T[]> {
            return this.http.get<T[]>(url)  
         }

         post(url: string,request:T): Observable<T> {
            return this.http.post<T>(url,request)  ;
         }
}
