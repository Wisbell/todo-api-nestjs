import { Body, Controller, Delete, Get, NotImplementedException, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  // TODO: Admin only or user only
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }

  // NOTE: No guards?
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  // TODO: Admin only
  @Patch(':id')
  async updateUser(@Param('id') id: string, updatedUser: User): Promise<User> {
    throw new NotImplementedException();
    // return this.userService.getUser(updatedUser.id.toString());
  }

  // TODO: Admin only or logged in user only
  @Delete(':id')
  async deleteUser(id: string): Promise<void> {
    return await this.userService.deleteUser(id);
  }
}
