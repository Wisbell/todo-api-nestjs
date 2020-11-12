import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ) { }

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getTodo(id: string): Promise<Todo> {
    return await this.todoRepository.findOne(id);
  }

  async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo> {
    const todo = new Todo();
    todo.text = createTodoDto.text;
    todo.completed = false;
    todo.user = user;

    return await this.todoRepository.save(todo);
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    throw new NotImplementedException();
  }

  async deleteTodo(id: string): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
