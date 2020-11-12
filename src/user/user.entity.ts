import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Todo } from "../todo/todo.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  admin: boolean;

  @OneToMany(type => Todo, todo => todo.user)
  todos: Todo[];
}