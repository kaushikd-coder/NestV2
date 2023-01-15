/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Param, Patch, Delete } from "@nestjs/common";
import { Request } from "express";

@Controller('/user')
export class UserController{
    @Get()
    getUsers() {
        return {name:"Kaushik", email:"test12@gmail.com"};
    }

    @Post()
    setUser(@Req() req: Request ) {
        return req.body;
    }

    @Patch()
    updateUser(@Req() req: Request ) {
        return req.body;
    }

    // @Get("/:userId")
    // getUser(@Param() userId: number){
    //     return userId;
    // }

    @Delete("/:userId")
    deleteUser(@Param() params: {userId: number}){
        return params;
    }
}