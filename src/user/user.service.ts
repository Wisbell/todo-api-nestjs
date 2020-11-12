import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUser(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  // TODO: Create user DTO
  //  https://github.com/nestjs/nest/blob/master/sample/05-sql-typeorm/src/users/users.service.ts
  async createUser(newUser: User): Promise<User> {
  // createUser(createUserDto: CreateUserDto): User {
    // this.users.push(newUser);
    // return newUser;
    throw new NotImplementedException();

    // const user = new User();
    // user.firstName = createUserDto.firstName;
    // user.lastName = createUserDto.lastName;

    // return this.usersRepository.save(user);
  }

  async updateUser(updatedUser: User): Promise<User> {
    // return this.userService.update(updatedUser);
    throw new NotImplementedException();
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
    throw new NotImplementedException();
  }
}
