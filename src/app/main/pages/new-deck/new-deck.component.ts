import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../services/decks.service';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styles: [
  ]
})
export class NewDeckComponent implements OnInit {

  attributes = [
    { id: '1', value: "Type 1"},
    { id: '2', value: "Mixto"},
  ]

  constructor(private decksService: DecksService) { }

  ngOnInit(): void {
    this.decksService.getAllArchetypes().subscribe(
      (names) => {
        // Llena la lista con los nombres y asigna un ID basado en el índice
        this.attributes = names.map((name, index) => ({ id: (index + 1).toString(), value: name }));
        console.log(this.attributes); // Aquí puedes trabajar con la lista de nombres
      },
      (error) => {
        console.error('Error al obtener los nombres de arquetipos:', error);
      }
    );
  }
}
