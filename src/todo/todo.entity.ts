import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface TodoEntity extends InMemoryDBEntity {
  description: string;
  completed: boolean;
}