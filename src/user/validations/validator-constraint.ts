import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint()
export class ValidatorConstraintt implements ValidatorConstraintInterface {

    constructor( private userRepository: UserRepository ) {}
    
    async validate(value: any, validationArguments?: ValidationArguments):  Promise<boolean> {
        // const checkUserEmail = await this.userRepository.checkEmail(value)
        // return !checkUserEmail;
        return false
    }
}