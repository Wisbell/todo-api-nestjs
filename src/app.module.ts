import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { join } from 'path';
import * as typeOrmConfig from './config/typeorm.config';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'test',
    //   // entities: [__dirname + '/**/*.entity.{js,ts}'],
    //   // entities: [join(__dirname, '**', '*.entity{.ts,.js}')],
    //   // entities: ["dist/**/*.entity{.ts,.js}"],
    //   entities: [],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forRoot(),
    // TodoModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
