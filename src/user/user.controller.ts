import { Controller, Param } from '@nestjs/common';
import { Delete, Get, Patch, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAllUsers(): UserEntity[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string): UserEntity {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(newUser: UserEntity): UserEntity {
    return this.userService.createUser(newUser);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, updatedUser: UserEntity): UserEntity {
    this.userService.updateUser(updatedUser);
    return this.userService.getUser(updatedUser.id);
  }

  @Delete(':id')
  deleteUser(id: string): void {
    return this.userService.deleteUser(id);
  }
}
