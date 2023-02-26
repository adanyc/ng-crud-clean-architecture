import { User } from './user';

export interface UserRepository {
  create(user: User): Promise<void>;
  delete(id: number): Promise<void>;
  update(user: User): Promise<void>;
  find(id: number): Promise<User | undefined>;
  findAll(): Promise<User[]>;
}