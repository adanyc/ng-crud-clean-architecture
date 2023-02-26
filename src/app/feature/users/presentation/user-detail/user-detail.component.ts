import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../domain/user';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit, OnDestroy {
  private userRepository = inject(USER_REPOSITORY);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  user: Promise<User | undefined> | null = null;
  userId: number = 0;
  subscription$: Subscription = new Subscription();

  ngOnInit(): void {
    this.findUser();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  findUser() {
    this.subscription$ = this.route.params.subscribe(params => {
      this.userId = Number(params['id']);
      this.user = this.userRepository.find(this.userId);
    });
  }

  async handleClickDelete() {
    await this.userRepository.delete(this.userId);
    this.goToUsersList();
  }

  handleClickCancel() {
    this.goToUsersList();
  }

  goToUsersList() {
    this.router.navigateByUrl('/users/users-list');
  }
}
