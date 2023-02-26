import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';
import { UserRequestAdapter } from './user-request.adapter';
import { UserResponseAdapter, UserResponseDto } from './user-response.adapter';
import { inject } from '@angular/core';

export class UserHttpRepository implements UserRepository {
  private http = inject(HttpClient);
  private api = `${environment.apiBase}/users`;

  create(user: User): Promise<void> {
    return lastValueFrom(this.http.post<void>(this.api, new UserRequestAdapter(user)));
  }

  delete(id: number): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${this.api}/${id}`));
  }

  update(user: User): Promise<void> {
    return lastValueFrom(this.http.put<void>(this.api, new UserRequestAdapter(user)));;
  }

  find(id: number): Promise<User | undefined> {
    return lastValueFrom(this.http.get<UserResponseDto>(`${this.api}/${id}`).pipe(
      map(userResponseDto => new UserResponseAdapter(userResponseDto))
    ));
  }

  findAll(): Promise<User[]> {
    return lastValueFrom(this.http.get<UserResponseDto[]>(this.api).pipe(
      map((userResponseDtos: UserResponseDto[]) => {
        return userResponseDtos.map(userResponseDto => new UserResponseAdapter(userResponseDto));
      })
    ));
  }
}