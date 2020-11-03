import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get()
  getAllTodos(): TodoEntity[] {
    return this.todoService.getAllTodos();
  }

  @Get()
  getTodo(id: string): TodoEntity {
    return this.todoService.getTodo(id);
  }

  @Post()
  createTodo(todo: TodoEntity): TodoEntity {
    return this.todoService.createTodo(todo);
  }

  @Get()
  updateTodo(updatedTodo: TodoEntity): TodoEntity {
    this.todoService.updateTodo(updatedTodo);
    return this.todoService.getTodo(updatedTodo.id);
  }

  @Delete()
  deleteTodo(id: string): void {
    return this.todoService.deleteTodo(id);
  }

}
