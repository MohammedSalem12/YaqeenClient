import { Observable } from "rxjs";
import { UserModel } from "src/app/core/domain/user-model";
import { IRepository } from "src/app/core/repositories/irepository";
import { HttpClient } from "@angular/common/http";
import { UserRepositoryMapper } from "../mapper/user-repository-mapper";
import {map} from 'rxjs/operators';



export class Repository<T> extends IRepository<T> {

    constructor(     
           private http: HttpClient,
           private mapper: UserRepositoryMapper
        ){super()}
        getAll(url:string): Observable<T[]> {
            return this.http.get<T[]>(url)
  
         }
}
