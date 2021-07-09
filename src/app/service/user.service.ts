import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../core/domain/user-model';
import { IRepository } from '../core/repositories/irepository';
import { IUser } from '../core/services/iuser';
import { UserRepositoryMapper } from '../data/mapper/user-repository-mapper';
import { UserEntity } from '../entity/user-entity';

@Injectable({
  providedIn: 'root'
})
export class UserService extends IUser {
  constructor(
    private _repository:IRepository<UserEntity>,
    private _mapper:UserRepositoryMapper,
  ) {super(); }


  getAllUsers(): Observable<UserModel[]> {
   return this._repository.getAll('').pipe(
      map(this._mapper.mapFromList)
    )
  }

}
