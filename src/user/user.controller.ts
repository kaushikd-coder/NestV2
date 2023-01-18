/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Req, Param, Patch, Delete, ParseIntPipe, UsePipes, ValidationPipe } from "@nestjs/common";
import { Body } from "@nestjs/common/decorators";
import { Request } from "express";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';
@Controller('/user')
export class UserController{

    constructor(private userService: UserService) {}
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    setUser(@Body() createUser: CreateUserDto ) {
        return this.userService.setUser(createUser);
    }

    @Patch("/:id")
    updateUser(@Body() body: any, @Param() params:{id: number} ) {
        return this.userService.updateUser(body, params);
    }

    @Get("/:userId")
    getUser(@Param('userId', ParseIntPipe)  userId: string){
        return this.userService.getUser(userId);
    }

    @Delete("/:userId")
    deleteUser(@Param() params: {userId: number}){
        return this.userService.deleteUser(params);
    }
}
