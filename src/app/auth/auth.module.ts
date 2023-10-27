import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ]
})
export class AuthModule { }
