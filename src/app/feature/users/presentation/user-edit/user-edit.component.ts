import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../domain/user';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: 'user-edit.component.html',
})
export class UserEditComponent implements OnInit, OnDestroy {
  private userRepository = inject(USER_REPOSITORY);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  user: User | undefined;
  userId: number = 0;
  isPromiseResolved: boolean = false;
  subscription$: Subscription = new Subscription();
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit(): void {
    this.findUser();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  async findUser() {
    this.subscription$ = this.route.params.subscribe(async params => {
      this.userId = Number(params['id']);
      const foundUser = await this.userRepository.find(this.userId);
      if (foundUser) {
        this.form.patchValue(foundUser);
      }
      this.isPromiseResolved = true;
    });
  }

  handleClickCancel() {
    this.resetForm();
    this.goToUsersList();
  }

  async handleFormSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();

      return;
    }

    const name = this.form.controls.name.value;
    const email = this.form.controls.email.value;

    if (name && email) {
      const user: User = { name, email };
      await this.userRepository.update(user);
      this.resetForm();
      this.goToUsersList();
    }
  }

  isValidField(field: string) {
    const control = this.form.get(field);

    return control!.errors && control!.touched;
  }

  resetForm() {
    this.form.reset();
  }

  async goToUsersList() {
    await this.router.navigateByUrl('/users/users-list');
  }
}