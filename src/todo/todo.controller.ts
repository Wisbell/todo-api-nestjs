import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/user/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
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

  @Post()
  async createTodo(
    @Body() createTaskDto: CreateTodoDto,
    @GetUser() user: User
  ): Promise<Todo> {
    return await this.todoService.createTodo(createTaskDto, user);
  }

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
