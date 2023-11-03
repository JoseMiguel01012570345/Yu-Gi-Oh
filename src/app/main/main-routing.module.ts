import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ByPlayerComponent } from './pages/search/by-player/by-player.component';
import { ByAtributeComponent } from './pages/search/by-attribute/by-attribute.component';
import { ByRegionComponent } from './pages/search/by-region/by-region.component';
import { ByTournamentComponent } from './pages/search/by-tournament/by-tournament.component';
import { NewTournamentComponent } from './pages/new-tournament/new-tournament.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'search/by-player', component: ByPlayerComponent},
      {path: 'search/by-attribute', component: ByAtributeComponent},
      {path: 'search/by-region', component: ByRegionComponent},
      {path: 'search/by-tournament', component: ByTournamentComponent},

      {path: 'profile/:id', component: ProfileComponent},
      {path: 'profile/:id/new-deck', component: NewDeckComponent},

      {path: 'new-tournament', component: NewTournamentComponent},

      {path: '**', redirectTo: 'profile'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,

  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
