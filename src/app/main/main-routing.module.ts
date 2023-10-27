import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { ProfileComponent } from './profile/profile.component';
import { ByPlayerComponent } from './pages/search/by-player/by-player.component';
import { ByAtributeComponent } from './pages/search/by-atribute/by-atribute.component';
import { ByRegionComponent } from './pages/search/by-region/by-region.component';
import { ByTournamentComponent } from './pages/search/by-tournament/by-tournament.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'new-deck', component: NewDeckComponent},
      {path: 'search/by-player', component: ByPlayerComponent},
      {path: 'search/by-atribute', component: ByAtributeComponent},
      {path: 'search/by-region', component: ByRegionComponent},
      {path: 'search/by-tournament', component: ByTournamentComponent},
      {path: '**', redirectTo: 'profile'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
