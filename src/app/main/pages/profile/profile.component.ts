import { Component, OnInit } from '@angular/core';
import { Deck } from '../../interfaces/deck.interface';
import { DecksService } from '../../services/decks.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})

export class ProfileComponent implements OnInit {

  public myDecksColumns: string[] = ['name', 'attribute'];
  public myDecks: Deck[] = [];

  constructor( private decksService: DecksService){}

  ngOnInit(): void {

    this.decksService.getDecks()
      .subscribe( decks => this.myDecks = decks)

  }
}
