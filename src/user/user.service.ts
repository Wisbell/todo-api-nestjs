import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

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

  async getUserByUsername(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: { username },
    });
  }

  // TODO: Do not store plain text passwords -> bcrypt
  // TODO: Do not allow duplicate username's -> send detailed error to user
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.password = createUserDto.password;
    user.admin = false;

    return this.userRepository.save(user);
  }

  // TODO: Implement this
  async updateUser(updatedUser: User): Promise<User> {
    // return this.userService.update(updatedUser);
    throw new NotImplementedException();
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
