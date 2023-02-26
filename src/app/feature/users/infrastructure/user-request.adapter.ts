import { User } from '../domain/user';

export interface UserRequestDto {
  fullName: string;
  workEmail: string;
}

export class UserRequestAdapter implements UserRequestDto {
  fullName = '';
  workEmail = '';

  constructor(user: User) {
    this.fullName = user.name;
    this.workEmail = user.email;
  }
}
