import { PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  completed: boolean;
}