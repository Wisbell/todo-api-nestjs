import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';

// TODO: Add correct return types, not found..

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  // @Get()
  // getAllTodos(): TodoEntity[] {
  //   return this.todoService.getAllTodos();
  // }

  // @Get(':id')
  // getTodo(@Param('id') id: string): TodoEntity {
  //   return this.todoService.getTodo(id);
  // }

  // @Post()
  // createTodo(todo: TodoEntity): TodoEntity {
  //   return this.todoService.createTodo(todo);
  // }

  // @Patch(':id')
  // updateTodo(@Param('id') id: string, updatedTodo: TodoEntity): TodoEntity {
  //   this.todoService.updateTodo(updatedTodo);
  //   return this.todoService.getTodo(updatedTodo.id);
  // }

  // @Delete(':id')
  // deleteTodo(id: string): void {
  //   return this.todoService.deleteTodo(id);
  // }
}
