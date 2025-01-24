import { Component } from '@angular/core';
import { User, UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = [];
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data: any) => this.users = data.data,
      error: (err) => this.errorMessage = err,
    });
  }

  viewDetails(user: User): void {
    this.userService.setSelectedUser(user);
    this.router.navigate(['/user-detail']);
  }
}
