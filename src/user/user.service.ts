/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
@Injectable()
export class UserService {

    getUsers(){
        return {name:"Kaushik", email:"test12@gmail.com"};
    }

    setUser(createUser: CreateUserDto){
        return createUser;
    }

    updateUser(req:any, params:{id:number}){
        return {...req.body,params};
    }

    getUser(userId:string){
        return {userId}
    }

    deleteUser(params: {userId: number}){
        return {message:`${params} deleted successfully`}
    }
}
