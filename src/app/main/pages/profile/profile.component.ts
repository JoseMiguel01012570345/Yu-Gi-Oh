import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Deck } from '../../interfaces/deck.interface';
import { UserData } from '../../interfaces/user.interface';

import { DecksService } from '../../services/decks.service';
import { TournamentsService } from '../../services/tournaments.service';
// import { Tournament } from '../../interfaces/tournament.interface';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { GET_DECKS_DATA, GET_TOURNAMENTS_DATA, MyDeck, MyTournament } from './querys';
import { Apollo } from 'apollo-angular';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit {

  public myDecksColumns: string[] = ['name', 'attribute'];
  public myDecks: MyDeck[] = [];

  public id:string = "";

  public myTournamentsColumns: string[] = ["name", "date", "region"]
  public myTournaments: MyTournament[] = [];

  Error: boolean = false;

  ErrorMessage: string = '';

  constructor( private userService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private readonly apollo: Apollo
              ){}

  ngOnInit(): void {
    this.Error = false;
    this.apollo.watchQuery({
      query: GET_DECKS_DATA
    }).valueChanges.pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internale Error Server';
      return throwError(error);
    })).subscribe(({data}) => {
      this.myDecks = (data as any).decksData;
      //codigo a realizar
    });

    this.apollo.watchQuery({
      query:GET_TOURNAMENTS_DATA
    }).valueChanges.pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internale Error Server'
      return throwError(error);
    })).subscribe(({data}) => {
      this.myTournaments = (data as any).tournamentsData;
      //codigo a realizar
    })
  }

  showPasswordMenu: boolean = false;
  newPassword: string = '';
  // En estas funciones usas el id para hablar con el backend
  DeleteUser(): void
  {}

  UpgradeUserToAdmin(): void
  {}

  TogglePasswordMenu(): void
  {
    this.showPasswordMenu = !this.showPasswordMenu
  }

  ChangeUserPassword(newPassword: string): void
  {
    this.showPasswordMenu = !this.showPasswordMenu;
    console.log("New Pass: " + newPassword + " for user: " + this.id);
    this.newPassword = '';
  }
}
