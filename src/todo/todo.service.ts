import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoService: InMemoryDBService<TodoEntity>) {
    todoService.create({ description: 'test' });
  }

  getAllTodos(): TodoEntity[] {
    return this.todoService.getAll();
  }

  getTodo(id: string): TodoEntity {
    return this.todoService.get(id);
  }

  createTodo(todo: TodoEntity) {
    return this.todoService.create(todo);
  }

  updateTodo(todo: TodoEntity) {
    return this.todoService.update(todo);
  }

  deleteTodo(id: string): void {
    this.todoService.delete(id);
  }
}
