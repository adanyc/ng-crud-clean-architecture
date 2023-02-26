import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';

@NgModule({
  declarations: [
    UserEditComponent,
  ],
  imports: [
    UserEditRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class UserEditModule { }