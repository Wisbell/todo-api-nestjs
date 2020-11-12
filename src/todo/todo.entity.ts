import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  completed: boolean;

  @ManyToOne(type => User, user => user.todos)
  user: User;

  @Column()
  userId: number;
}