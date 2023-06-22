import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validations/check-email";


export class CreateUserDto {

    @IsNotEmpty({ message: 'Name cannot be null'})
    name: string;

    @IsEmail( undefined, { message: 'The email is not valid'})
    @EmailIsUnique({ message: 'Email is already being used'})
    email: string;

    @MinLength( 6, { message: 'Password too short'})
    password: string;
}