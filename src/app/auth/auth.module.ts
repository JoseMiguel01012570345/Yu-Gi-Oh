import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpLink } from 'apollo-angular/http';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloModule } from 'apollo-angular';

const uri = 'http://192.168.161.100:3000/graphql';

function createApollo(httplink: HttpLink) : ApolloClientOptions<any> {
  return {
    link: httplink.create({uri}),
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
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ApolloModule
  ],
  providers:[
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class AuthModule { }
