import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_PARTICIPATE } from '../querys';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit{

  @Input()
  TournamentName!: string;

  @Input()
  TournamentDate!: number

  @Input()
  MatchID!: number;

  PlayerOne!: string;
  PlayerTwo!: string;

  @Input()
  PLayerOneScore!: number

  @Input()
  PLayerTwoScore!: number

  Error: boolean = false;

  ErrorMessage: string = '';

  constructor (
    private readonly apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_PARTICIPATE,
      variables:{
        TournamentName: this.TournamentName,
        TournamentDate: this.TournamentDate,
        MatchID: this.MatchID
      }
    }).valueChanges.pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internale Error Server';
      return throwError(error);
    })).subscribe(({data}) => {
      this.PlayerOne = (data as any).participate.PayerOneID;
      this.PlayerTwo = (data as any).PlayerTwoID;
      //codigo a realizar
    });
  }

  incrementScore(score: number): void {
    score += 1;
  }

  decrementScore(score: number): void {
    if (score > 0) {
      score -= 1;
    }
  }

}
