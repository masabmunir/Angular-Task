import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';
  private selectedUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?per_page=8`).pipe(
      catchError(this.handleError)
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // method to set the selected user

  setSelectedUser(user: User | null): void {
    this.selectedUserSubject.next(user);
  }

  getSelectedUser(): Observable<User | null> {
    return this.selectedUserSubject.asObservable();
  }

  // generic method to handle errors

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(`API call failed: ${error.message}`);
    return throwError('Something went wrong; please try again later.');
  }
}
