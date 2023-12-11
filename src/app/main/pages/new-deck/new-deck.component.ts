import { Component } from '@angular/core';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styles: [
  ]
})
export class NewDeckComponent {
  public attributes = [
    { id: '1', value: "Type 1"},
    { id: '2', value: "Mixto"},
  ]
}
