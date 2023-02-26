import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './user-add.component';

@NgModule({
  declarations: [
    UserAddComponent,
  ],
  imports: [
    UserAddRoutingModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class UserAddModule { }