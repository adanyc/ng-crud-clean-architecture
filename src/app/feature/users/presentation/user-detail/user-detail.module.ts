import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';

@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
  ],
})
export class UserDetailModule { }