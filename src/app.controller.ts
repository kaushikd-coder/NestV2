/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Param, Patch, Delete } from "@nestjs/common";


@Controller()
export class AppController {
    @Get()
    getHello(): string {
        return "Welcome"
    }
}