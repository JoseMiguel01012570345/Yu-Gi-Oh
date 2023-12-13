import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {


  isAuthenticated: boolean = false;

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private readonly router:Router)
  {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  login(): void {

    if (this.loginForm.valid){
      // Lógica de autenticación aquí

      console.log(this.loginForm.value);

      const { username, role, password } = this.loginForm.value;

      this.isAuthenticated = this.authService.login(username, password);

      if(this.isAuthenticated)
      {
        this.router.navigate(['./main/profile/' + localStorage.getItem('username')])
      }

      else
      {
        this.loginForm.reset();
        this.router.navigate(['./auth/login'])
      }
    }

  }
}
