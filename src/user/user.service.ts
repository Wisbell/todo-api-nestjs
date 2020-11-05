import { Injectable, NotImplementedException } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  private readonly users: UserEntity[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'test',
        password: 'test',
        emailAddress: 'test@test.com',
        admin: false
      },
      {
        id: 2,
        username: 'chris',
        password: 'secret',
        emailAddress: 'test@test.com',
        admin: false
      },
      {
        id: 3,
        username: 'maria',
        password: 'guess',
        emailAddress: 'test@test.com',
        admin: false
      }
    ];
  }

  getAllUsers(): UserEntity[] {
    return this.users;
  }

  getUser(id: string): UserEntity {
    return this.users.find(user => user.id === parseInt(id));
  }

  getUserByUsername(username: string): UserEntity {
    return this.users.find(user => user.username === username);
  }

  createUser(newUser: UserEntity): UserEntity {
    // this.users.push(newUser);
    // return newUser;
    throw new NotImplementedException();
  }

  updateUser(updatedUser: UserEntity) {
    // return this.userService.update(updatedUser);
    throw new NotImplementedException();
  }

  deleteUser(id: string): void {
    // this.userService.delete(id);
    throw new NotImplementedException();
  }
}
