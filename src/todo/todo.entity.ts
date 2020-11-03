import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface TodoEntity extends InMemoryDBEntity {
  firstName: string;
  lastName: string;
  emailAddress: string;
  admin: boolean;
}