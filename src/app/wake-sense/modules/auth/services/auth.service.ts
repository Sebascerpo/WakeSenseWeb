import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private router: Router,
  ) {}

  async login() {
    this.router.navigate(['wake-sense/home'])
  }

  async logout(): Promise<void> {
    this.router.navigate(['/login']);
  }
}