import { Component, OnDestroy, OnInit } from '@angular/core';
import { Deck } from '../../interfaces/deck.interface';
import { DecksService } from '../../services/decks.service';
import { TournamentsService } from '../../services/tournaments.service';
import { Tournament } from '../../interfaces/tournament.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})

export class ProfileComponent implements OnInit {

  public myDecksColumns: string[] = ['name', 'attribute'];
  public myDecks: Deck[] = [];

  public myTournamentsColumns: string[] = ["name", "date", "region"]
  public myTournaments: Tournament[] = [];

  constructor( private decksService: DecksService, private tournamentService: TournamentsService){}

  ngOnInit(): void {

    this.decksService.getDecks()
    .subscribe( decks => this.myDecks = decks)

    this.tournamentService.getTournaments()
    .subscribe( tournaments => this.myTournaments = tournaments)
  }
}
