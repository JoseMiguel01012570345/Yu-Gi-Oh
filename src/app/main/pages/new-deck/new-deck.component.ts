import { Component, OnInit } from '@angular/core';
import { DecksService } from '../../services/decks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  createDeckForm: FormGroup;

  constructor(private decksService: DecksService,
              private formBuilder: FormBuilder,
              private router: Router)
  {
    this.createDeckForm = this.formBuilder.group({
      name: ['', Validators.required],
      attribute: ['', Validators.required],
      mainDeckCardsAmount: [40, [Validators.required, Validators.min(40), Validators.max(60)]],
      extraDeckCardsAmount: [0, [Validators.required, Validators.min(0), Validators.max(15)]],
      sideDeckCardsAmount: [0, [Validators.required, Validators.min(0), Validators.max(15)]],
    });
  }

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

  CreateDeck(): void {
    console.log(this.createDeckForm.value);
  }
}
