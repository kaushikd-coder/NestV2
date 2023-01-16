/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsNotEmpty } from "class-validator";
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}