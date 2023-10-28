import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { ProfileRoutingModule } from './main-routing.module';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ByPlayerComponent } from './pages/search/by-player/by-player.component';
import { ByAtributeComponent } from './pages/search/by-attribute/by-attribute.component';
import { ByRegionComponent } from './pages/search/by-region/by-region.component';
import { ByTournamentComponent } from './pages/search/by-tournament/by-tournament.component';



@NgModule({
  declarations: [
    NewDeckComponent,
    LayoutPageComponent,
    ProfileComponent,
    ByPlayerComponent,
    ByAtributeComponent,
    ByRegionComponent,
    ByTournamentComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ]
})
export class ProfileModule { }
