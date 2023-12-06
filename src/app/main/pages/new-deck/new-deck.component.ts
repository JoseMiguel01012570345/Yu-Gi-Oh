import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GetDeck } from './query'
import { Deck } from '../../interfaces/deck.interface';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styles: [
  ]
})
export class NewDeckComponent {
  public attributes:Deck[] = [];

  constructor(private apolo:Apollo){}

  getDecks(){
    this.apolo.watchQuery({
      query: GetDeck
    }).valueChanges.subscribe(({data})=>{

      this.attributes=(data as any).Resoult as Deck[];

    })
  }
}
