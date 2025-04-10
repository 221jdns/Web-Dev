import { Component } from '@angular/core';
import { AuthService } from '../../components/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: ServiceService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res) => {
        this.auth.saveTokens(res.access, res.refresh);
        this.router.navigate(['/protected']);
      },
      error: () => {
        this.errorMessage = 'Login failed';
      }
    });
  }
}
