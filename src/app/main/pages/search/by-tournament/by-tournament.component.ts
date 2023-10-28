import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-by-tournament',
  templateUrl: './by-tournament.component.html',
  styles: [
  ]
})
  
export class ByTournamentComponent {

  public searchInput = new FormControl('');

}
