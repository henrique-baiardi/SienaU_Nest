import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()
export class UserRepository {
  
    private users: UserEntity[] = [];

    async create(user: UserEntity) {
        this.users.push(user)
    }

    async getAll() {
        return this.users;
    }

    async checkEmail(email: string) {
        const checkUserEmail = this.users.find(
            user => user.email === email
        );
        return checkUserEmail !== undefined;
    }

    async update(id:string, userDateUpdate: Partial<UserEntity>){
        const checkUser = this.users.find(
            userSave => userSave.id === id
        );

        if(!checkUser) throw new Error('User not exist');

        Object.entries(userDateUpdate).forEach(([chave, value])=> {
            if(chave === 'id') {
                return
            }

            checkUser[chave] = value;
        })
        return checkUser
    }

    async remove(id:string) {
        const user = this.checkUserId(id);

        this.users = this.users.filter(
            userRemoved => user.id !== id
        )

        return user;
    }

    private checkUserId(id:string){
        const checkUser = this.users.find(
            userSave => userSave.id === id
        );

        if(!checkUser) throw new Error('User not exist');

        return checkUser;
    }
}