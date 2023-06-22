import { Module } from "@nestjs/common";
import { UserController } from "./user.controler";
import { UserRepository } from "./user.repository";
import { EmailIsUniqueValidator } from "./validations/check-email";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailIsUniqueValidator]
})
export class UserModule {}