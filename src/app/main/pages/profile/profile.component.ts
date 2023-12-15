import { Component, OnDestroy, OnInit } from '@angular/core';
import { Deck } from '../../interfaces/deck.interface';
import { UserData } from '../../interfaces/user.interface';

import { DecksService } from '../../services/decks.service';
import { TournamentsService } from '../../services/tournaments.service';
import { Tournament } from '../../interfaces/tournament.interface';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { JsonPipe } from '@angular/common';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent implements OnInit {

  isAdmin: boolean = false;

  public myDecksColumns: string[] = ['name', 'attribute'];
  public myDecks: Deck[] = [];

  public id:string = "";

  public myTournamentsColumns: string[] = ["name", "date", "region"]
  public myTournaments: Tournament[] = [];

  constructor( private userService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router)
  {
    const isAdminValue = localStorage.getItem('isAdmin');
    console.log("isAdmin: " + isAdminValue);
    this.isAdmin = isAdminValue === 'true';
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });


    this.activatedRoute.params
    .pipe(
      switchMap ( ({id}) => this.userService.getUserData(id))
    )
    .subscribe(
      user => {

        console.log("User: ");
        console.log(user.Decks)



        if( !user ) return this.router.navigate(['/auth/login']);

        this.myDecks = user.Decks;
        this.myTournaments = user.Tournaments;

        return;
      }
    );

    // //TEMPORAL
    // this.userService.getPlayers().subscribe();
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
