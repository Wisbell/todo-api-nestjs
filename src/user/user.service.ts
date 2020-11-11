import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'test',
        password: 'test',
        emailAddress: 'test@test.com',
        admin: false
      } as User,
      {
        id: 2,
        username: 'chris',
        password: 'secret',
        emailAddress: 'test@test.com',
        admin: false
      } as User,
      {
        id: 3,
        username: 'maria',
        password: 'guess',
        emailAddress: 'test@test.com',
        admin: false
      } as User
    ];
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    return this.users.find(user => user.id === parseInt(id));
  }

  getUserByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }

  createUser(newUser: User): User {
    // this.users.push(newUser);
    // return newUser;
    throw new NotImplementedException();
  }

  updateUser(updatedUser: User) {
    // return this.userService.update(updatedUser);
    throw new NotImplementedException();
  }

  deleteUser(id: string): void {
    // this.userService.delete(id);
    throw new NotImplementedException();
  }
}
