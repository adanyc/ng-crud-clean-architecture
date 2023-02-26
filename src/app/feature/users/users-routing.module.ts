import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        redirectTo: 'users-list',
        pathMatch: 'full',
      },
      {
        path: 'users-list',
        loadChildren: () => import('./presentation/users-list/users-list.module').then(m => m.UsersListModule),
      },
      {
        path: 'user-add',
        loadChildren: () => import('./presentation/user-add/user-add.module').then(m => m.UserAddModule),
      },
      {
        path: 'user-edit/:id',
        loadChildren: () => import('./presentation/user-edit/user-edit.module').then(m => m.UserEditModule),
      },
      {
        path: 'user-detail/:id',
        loadChildren: () => import('./presentation/user-detail/user-detail.module').then(m => m.UserDetailModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
