import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { RepositoryModule } from './infrastructure/repository.module';

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    UsersRoutingModule,
    RepositoryModule,
  ],
})
export class UsersModule { }