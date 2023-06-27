import { Module } from "@nestjs/common";
import { UserController } from "./user.controler";
import { UserRepository } from "./user.repository";
import { EmailIsUniqueValidator } from "./validations/check-email";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserRepository, EmailIsUniqueValidator, UserService]
})
export class UserModule {}