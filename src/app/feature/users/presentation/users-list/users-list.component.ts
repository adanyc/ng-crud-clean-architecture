import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../domain/user';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: 'users-list.component.html',
})
export class UsersListComponent implements OnInit {
  private userRepository = inject(USER_REPOSITORY);

  users: Promise<User[]> | null = null;

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.users = this.userRepository.findAll();
  }
}