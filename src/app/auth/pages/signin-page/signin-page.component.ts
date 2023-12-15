import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      roll: ['', Validators.required],
      mun: ['', Validators.required],
      prov: ['', Validators.required],
      phoneNumber: [null, Validators.pattern(/^\d{8}$/)],
    });

  }


  SignIn(): void {

    if (this.signinForm.valid){

      const { username, password, roll, mun, prov, phoneNumber } = this.signinForm.value;

      this.authService.signin(username, password, roll, mun, prov, phoneNumber).subscribe({
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
