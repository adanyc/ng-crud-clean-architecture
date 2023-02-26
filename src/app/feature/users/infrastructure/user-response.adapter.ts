import { User } from '../domain/user';

export interface UserResponseDto {
  id: number;
  fullName: string;
  workEmail: string;
}

export class UserResponseAdapter implements User {
  id: number;
  name: string;
  email: string;

  constructor(userResponseDto: UserResponseDto) {
    this.id = userResponseDto.id;
    this.name = userResponseDto.fullName;
    this.email = userResponseDto.workEmail;
  }
}
