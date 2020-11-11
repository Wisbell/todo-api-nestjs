import { Controller, Delete, Get, NotImplementedException, Param, Patch, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAllUsers(): User[] {
    // return this.userService.getAllUsers();
    throw new NotImplementedException();
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    throw new NotImplementedException();
    // return this.userService.getUser(id);
  }

  @Post()
  createUser(newUser: User): User {
    return this.userService.createUser(newUser);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, updatedUser: User): User {
    this.userService.updateUser(updatedUser);
    throw new NotImplementedException();
    // return this.userService.getUser(updatedUser.id.toString());
  }

  @Delete(':id')
  deleteUser(id: string): void {
    return this.userService.deleteUser(id);
  }
}
