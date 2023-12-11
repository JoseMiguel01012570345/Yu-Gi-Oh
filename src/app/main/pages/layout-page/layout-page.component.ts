import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public profileRoute = './profile';
  public sidebarItems =
  [
    {name: 'Jugadores', route: './search/by-player'},
    {name: 'Atributos', route: './search/by-attribute'},
    {name: 'Región', route: './search/by-region'},
    {name: 'Torneo', route: './search/by-tournament'},
  ]
}
