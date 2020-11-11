import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor() {

  }

  // getAllTodos(): TodoEntity[] {
  //   return this.todoService.getAll();
  // }

  // getTodo(id: string): TodoEntity {
  //   return this.todoService.get(id);
  // }

  // createTodo(todo: TodoEntity) {
  //   return this.todoService.create(todo);
  // }

  // updateTodo(todo: TodoEntity) {
  //   return this.todoService.update(todo);
  // }

  // deleteTodo(id: string): void {
  //   this.todoService.delete(id);
  // }
}
