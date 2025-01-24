import { Component } from '@angular/core';
import { User, UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule,MatTableModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getSelectedUser().subscribe((user) => {
      this.user = user || null;
    });
  }

  navigateToList(): void {
    this.router.navigate(['/']);
  }
}
