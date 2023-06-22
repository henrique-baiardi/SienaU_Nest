
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailIsUnique } from "../validations/check-email";


export class UpdateUserDto {

    @IsNotEmpty({ message: 'Name cannot be null'})
    @IsOptional()
    name: string;

    @IsEmail( undefined, { message: 'The email is not valid'})
    @EmailIsUnique({ message: 'Email is already being used'})
    @IsOptional()
    email: string;

    @MinLength( 6, { message: 'Password too short'})
    @IsOptional()
    password: string;
}