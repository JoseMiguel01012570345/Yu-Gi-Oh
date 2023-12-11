import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ArcheType, GET_ARCHETYPES } from './query';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styles: [
  ]
})
export class NewDeckComponent implements OnInit {

  //los arquetipos
  ArcheTypes!: ArcheType[];

  Error: boolean = false;

  ErrorMessage: string = '';

  constructor(
    private readonly apollo: Apollo
  ) { }

  ngOnInit(): void {
    //aqui se cargan los arquetipos
    this.Error = false;
    this.apollo.watchQuery({
      query: GET_ARCHETYPES
    }).valueChanges.pipe(catchError(error => {
      this.Error = true;
      this.ErrorMessage = 'Internal Error Server';
      return throwError(error);
    })).subscribe(({data}) => {
      this.ArcheTypes = (data as any).archetypes as ArcheType[];
    });
  }

}
