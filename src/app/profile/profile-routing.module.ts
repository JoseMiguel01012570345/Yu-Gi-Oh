import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'new-deck', component: NewDeckComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
