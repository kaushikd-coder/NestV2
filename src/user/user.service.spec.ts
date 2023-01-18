import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/user-create.dto';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return the users info', () => {
        const result = service.getUsers();
        expect(result).toEqual({name:"Kaushik", email:"test12@gmail.com"});
    });
});

describe('setUser', () => {
  it('should return createUser', () => {
    const createUserMock = {
      name: 'John Doe',
      email: 'test12@gmail.com'
    };
    // const createUserDto = new CreateUserDto(createUserMock);
    const output = service.setUser(createUserMock);
    expect(output).toEqual(createUserMock);
  });
});
});
