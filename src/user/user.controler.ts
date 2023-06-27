import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/createUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid} from 'uuid';
import { ListUsertDto } from "./dto/listUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { UserService } from "./user.service";


@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository,
        private userService:UserService
        ) {}

    @Post()
    async createUser(@Body() userDate: CreateUserDto) {

        const userEntity = new UserEntity();
        userEntity.name = userDate.name;
        userEntity.email = userDate.email;
        userEntity.password = userDate.password;
        userEntity.id = uuid();

        this.userService.userCreate(userEntity);
        return { 
            message: 'user created successfully' ,
            user: new ListUsertDto(userEntity.id, userEntity.name)
        };
    }

    @Get()
    async getAllUsers() {
        const allUsers = await this.userService.allUserList();

        return allUsers;
    }

    @Put('/:id')
    async updateUser(@Param('id') id:string, @Body() newUserDate: UpdateUserDto) {
        const userCurrent = await this.userService.updateUser(id, newUserDate);

        return {
            message: 'user update successfully' ,
            user: userCurrent
        }
    }

    @Delete('/id')
    async removeUser(@Param('id') id:string){
        const user = await this.userService.deleteUser(id);

        return {
            message: 'user removed successfully' ,
            user: user
        }
    }

}