import { PrimaryGeneratedColumn, Column, Entity, Unique, OneToMany } from "typeorm";
import { Todo } from "../todo/todo.entity";

@Entity()
@Unique(["username"])
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