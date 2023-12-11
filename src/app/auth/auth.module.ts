import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppModule } from '../app.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { FormsModule } from '@angular/forms';

const uri = 'http://localhost:3000/graphql';

function createApollo(httpLink: HttpLink) : ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache()
  };
}

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
    ApolloModule,
    FormsModule
  ],
  providers:[{
    provide: APOLLO_OPTIONS,
    useFactory: createApollo,
    deps:[HttpLink]
  }]
})
export class AuthModule { }
