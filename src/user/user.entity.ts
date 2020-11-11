import { PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  emailAddress: string;
  
  @Column()
  admin: boolean;
}