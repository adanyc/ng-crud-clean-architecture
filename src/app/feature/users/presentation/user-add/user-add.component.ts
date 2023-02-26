import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../domain/user';
import { USER_REPOSITORY } from '../../infrastructure/repository.module';

@Component({
  templateUrl: 'user-add.component.html',
})
export class UserAddComponent {
  private userRepository = inject(USER_REPOSITORY);
  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

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
      await this.userRepository.create(user);
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