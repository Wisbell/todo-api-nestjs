import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [InMemoryDBModule.forRoot()],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
