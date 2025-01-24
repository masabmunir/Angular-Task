import { Routes } from '@angular/router';
import { UserListComponent } from './Component/user-list/user-list.component';
import { UserDetailComponent } from './Component/user-detail/user-detail.component';
import { NavbarComponent } from './Component/navbar/navbar.component';

export const routes: Routes = [
    { path: '', component: UserListComponent }, 
    { path: 'user-detail', component: UserDetailComponent },
    { path: '**', redirectTo: '' } 
  ];
