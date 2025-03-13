import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, RouterLink]
})
export class LoginComponent {
  loginForm: FormGroup;
  error: string | null = null;
  showPassword: boolean = false;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
  onSubmit() {
    if (this.loginForm.invalid) {
      this.error = 'Por favor, completa los campos correctamente.';
      return;
    }

    this.authService.login().then(() => {
      this.router.navigate(['/wake-sense/home']);
    }).catch(err => {
      this.error = 'Error en la autenticación. Verifica tus credenciales.';
    });
  }
}