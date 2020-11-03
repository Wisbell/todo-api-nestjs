import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userService: InMemoryDBService<UserEntity>) {
    userService.create({ username: 'test', password: 'test', emailAddress: 'test@test.com', admin: true });
  }

  getAllUsers(): UserEntity[] {
    return this.userService.getAll();
  }

  getUser(id: string): UserEntity {
    return this.userService.get(id);
  }

  getUserByUsername(username: string): UserEntity {
    return this.userService.query(record => record.username === username)[0];
  }

  createUser(newUser: UserEntity) {
    return this.userService.create(newUser);
  }

  updateUser(updatedUser: UserEntity) {
    return this.userService.update(updatedUser);
  }

  deleteUser(id: string): void {
    this.userService.delete(id);
  }
}
