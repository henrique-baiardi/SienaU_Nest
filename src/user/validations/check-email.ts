import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailIsUniqueValidator implements ValidatorConstraintInterface {

    constructor( private userRepository: UserRepository ) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const checkUserEmail = await this.userRepository.checkEmail(value)
        return !checkUserEmail;
    }

}

export const EmailIsUnique = ( validationOptions: ValidationOptions ) => {
    return (object: Object, propiedade: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propiedade,
            options: validationOptions,
            constraints: [],
            validator: EmailIsUniqueValidator
        })

    }
}