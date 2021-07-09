import { Mapper } from "src/app/core/base/mapper";
import { UserModel } from "src/app/core/domain/user-model";
import { UserEntity } from "src/app/entity/user-entity";

export class UserRepositoryMapper implements Mapper<UserEntity,UserModel>{
    mapFrom(param: UserEntity): UserModel {
        return {
            id: param.id,
            name: param.name,
            age: param.age,
        };
    }
    mapTo(param: UserModel): UserEntity {
        return {
            id: 0,
            name: param.name,
            age: param.age
        };
    }
    mapFromList(param: UserEntity[]): UserModel[] {
        let userModels: UserModel[] = [];

        param.forEach(userEntity => {
            userModels.push(
                {
                    id: userEntity.id,
                    name: userEntity.name,
                    age: userEntity.age,
                }
            )
        });

        return userModels; 
    }
    mapToList(param: UserModel[]): UserEntity[] {

        let userEntities: UserEntity[] = [];

        param.forEach(UserModel => {
            userEntities.push({
                id: UserModel.id,
                name: UserModel.name,
                age: UserModel.age,
            })
        });

        return userEntities;    
    }

}
