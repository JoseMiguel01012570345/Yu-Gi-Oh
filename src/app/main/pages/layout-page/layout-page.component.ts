import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public profileRoute = './profile/' + localStorage.getItem('username');
  public sidebarItems =
  [
    {name: 'Jugadores', route: './search/by-player'},
    {name: 'Atributos', route: './search/by-attribute'},
    {name: 'Región', route: './search/by-region'},
    {name: 'Torneo', route: './search/by-tournament'},
  ]

  constructor(private readonly router:Router)
  {

  }
  logout():void
  {
    this.router.navigate(['/auth/login'])
  }
}
