import { Test } from "@nestjs/testing";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";
import { userStub } from "../__mocks__/user.service";

jest.mock('../user.service')

describe('UserController', () => {

    let userController: UserController;
    let userService: UserService; 
    beforeEach(async () => {
        const module = await Test.createTestingModule({
        controllers: [UserController],
        providers: [UserService],
        }).compile();
    
        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService)
        // jest.clearAllMocks();
    });

    describe('getUsers', () => {
    //     it('should return the users info', () => {
    //         const result = userController.getUsers();
    //         expect(result).toEqual({name:"Kaushik", email:""})

    // })

    // test('getUsers() should return an object with name and email properties', () => {
    //     expect(getUsers()).toEqual({name: "Kaushik", email: "test12@gmail.com"});
    // });

    test('should return the users info', async () => {
        const result = await userController.getUsers();
        expect(result).toEqual(userStub())
    })

    })
})

//---------------------------------------------------

describe('signUp', () => {
    let userServiceMock;
    let signUpController;
  
    beforeEach(() => {
      userServiceMock = {
        getData: jest.fn()
      };
  
      signUpController = new SignUpController(userServiceMock);
    });
  
    it('should return success message and data', async () => {
      const mockData = { name: 'John Doe' };
      userServiceMock.getData.mockResolvedValue(mockData);
  
      const userInfo = { email: 'johndoe@example.com', password: 'password' };
      const result = await signUpController.signUp(userInfo);
  
      expect(result).toEqual({ message: 'Success', data: mockData });
      expect(userServiceMock.getData).toHaveBeenCalledWith(userInfo);
    });
  });
  

//----------------------------------------------------

  describe('getData', () => {
    let userService;
    let enterpriseServiceMock;
    let userModelMock;
  
    beforeEach(() => {
      enterpriseServiceMock = {
        createEnterprise: jest.fn()
      };
  
      userModelMock = {
        create: jest.fn()
      };
  
      userService = new UserService(enterpriseServiceMock, userModelMock);
    });
  
    it('should return user data', async () => {
      const mockEnterpriseId = '12345';
      enterpriseServiceMock.createEnterprise.mockResolvedValue({ _id: mockEnterpriseId });
  
      const mockUserData = { name: 'John Doe', enterpriseId: mockEnterpriseId };
      userModelMock.create.mockResolvedValue(mockUserData);
  
      const userInfo = { email: 'johndoe@example.com', password: 'password', enterpriseName: 'ABC Corp' };
      const result = await userService.getData(userInfo);
  
      expect(result).toEqual(mockUserData);
      expect(enterpriseServiceMock.createEnterprise).toHaveBeenCalledWith(userInfo.enterpriseName);
      expect(userModelMock.create).toHaveBeenCalledWith({ ...userInfo, enterpriseId: mockEnterpriseId });
    });
  
    it('should handle errors', async () => {
      enterpriseServiceMock.createEnterprise.mockRejectedValue(new Error('Enterprise creation failed'));
  
      const userInfo = { email: 'johndoe@example.com', password: 'password', enterpriseName: 'ABC Corp' };
      try {
        await userService.getData(userInfo);
        fail('Expected an error to be thrown');
      } catch (error) {
        expect(error.message).toBe('Enterprise creation failed');
      }
    });
  });
  