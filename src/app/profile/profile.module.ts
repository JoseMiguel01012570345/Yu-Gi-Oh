import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    NewDeckComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
