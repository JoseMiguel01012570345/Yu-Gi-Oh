import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styles: [
  ]
})
export class SigninPageComponent {

  signinForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private readonly router: Router)
  {
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  SignIn(): void {

    if (this.signinForm.valid){

      const { username, role, password } = this.signinForm.value;

      this.authService.signin(username, password, role).subscribe({
        next: (result) => {

          localStorage.setItem("username", username)
          console.log('Usuario creado o autenticado con éxito:', result);

          this.router.navigate(['./main/profile/' + localStorage.getItem('username')])
        },
        error: (error) => {
          console.error('Error al crear o autenticar usuario:', error);
        },
      });
    }
  }
}
