import { Controller, Delete, Get, NotImplementedException, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  // TODO: Admin only, add guard
  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }

  @Post()
  async createUser(newUser: User): Promise<User> {
    // return this.userService.createUser(newUser);
    throw new NotImplementedException();
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, updatedUser: User): Promise<User> {
    throw new NotImplementedException();
    // return this.userService.getUser(updatedUser.id.toString());
  }

  @Delete(':id')
  async deleteUser(id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
