// import { UserService } from './../user.service';
// import { userStub } from "test/stubs/user.stub"
import { CreateUserDto } from "src/user/dto/user-create.dto";

export const userStub = (): CreateUserDto => {
    return{
        name:"John Doe", 
        email:"testing1@gmail.com"
    }
}

export const UserService = jest.fn().mockReturnValue({
    getUsers: jest.fn().mockResolvedValue(userStub())
})