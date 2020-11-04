import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async validateUser(username: string, password: string): Promise<any> {
    console.log('validateUser called');
    const user = await this.userService.getUserByUsername(username);
    console.log('user', user);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
