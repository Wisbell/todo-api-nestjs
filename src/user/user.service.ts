import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // private readonly users: User[];

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    // this.users = [
    //   {
    //     id: 1,
    //     username: 'test',
    //     password: 'test',
    //     emailAddress: 'test@test.com',
    //     admin: false
    //   } as User,
    //   {
    //     id: 2,
    //     username: 'chris',
    //     password: 'secret',
    //     emailAddress: 'test@test.com',
    //     admin: false
    //   } as User,
    //   {
    //     id: 3,
    //     username: 'maria',
    //     password: 'guess',
    //     emailAddress: 'test@test.com',
    //     admin: false
    //   } as User
    // ];
  }

  // getAllUsers(): User[] {
  //   return this.users;
  // }

  // getUser(id: string): User {
  //   return this.users.find(user => user.id === parseInt(id));
  // }

  getUserByUsername(username: string): User {
    // return this.users.find(user => user.username === username);
    return new User();
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
