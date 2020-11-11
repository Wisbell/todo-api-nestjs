// import { PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

// export class User extends BaseEntity {
@Entity()
export class User {
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