import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";
import { ListUsertDto } from "./dto/listUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async userCreate(userEntity: UserEntity) {
        await this.userRepository.save(userEntity);
    }

    async allUserList() {
        const usuarioSalvos = await this.userRepository.find();
        const usuariosLista = usuarioSalvos.map(
            (user) => new ListUsertDto(user.id, user.name)
        )
        return usuariosLista;
    }

    async updateUser(id: string, userEntity: UpdateUserDto) {
       await this.userRepository.update(id, userEntity);
    }

    async deleteUser(id: string) {
        await this.userRepository.delete(id)
    }

}