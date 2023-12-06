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
import { Apollo } from 'apollo-angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})

export class ProfileComponent implements OnInit {

  public myDecksColumns: string[] = ['name', 'attribute'];
  public myDecks: Deck[] = [];

  public id:string = "";

  public myTournamentsColumns: string[] = ["name", "date", "region"]
  public myTournaments: Tournament[] = [];

  constructor( private userService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router,private readonly apolo:Apollo){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.activatedRoute.params
    .pipe(
      switchMap ( ({id}) => this.userService.getUserById(id))
    )
    .subscribe(
      user => {

        if( !user ) return this.router.navigate(['/auth/login']);

        this.myDecks = user.mydecks;
        this.myTournaments = user.myTournaments;

        return;

      }
    );

  }
}
