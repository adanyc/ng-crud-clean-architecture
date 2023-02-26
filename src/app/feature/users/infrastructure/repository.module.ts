import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { UserRepository } from '../domain/user.repository';
import { UserHttpRepository } from './user-http.repository';

export const USER_REPOSITORY = new InjectionToken<UserRepository>('UserRepository');

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: USER_REPOSITORY,
      useFactory: () => new UserHttpRepository(),
      deps: [HttpClient],
    },
  ],
})
export class RepositoryModule { }