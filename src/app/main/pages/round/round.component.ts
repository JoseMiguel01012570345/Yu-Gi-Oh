import { Component } from '@angular/core';

@Component({
  templateUrl: './round.component.html',
})
export class RoundComponent {

  //Otro objeto que es para probar, tiene que pedirse de la base de datos
  public matchs = [
    [{ nombre: 'Jugador1', deck: 'Deck1', puntuacion: 0 }, { nombre: 'Jugador5', deck: 'Deck5', puntuacion: 0 }],
    [{ nombre: 'Jugador2', deck: 'Deck2', puntuacion: 0 }, { nombre: 'Jugador6', deck: 'Deck6', puntuacion: 0 }],
    [{ nombre: 'Jugador3', deck: 'Deck3', puntuacion: 0 }, { nombre: 'Jugador7', deck: 'Deck7', puntuacion: 0 }],
    [{ nombre: 'Jugador4', deck: 'Deck4', puntuacion: 0 }, { nombre: 'Jugador8', deck: 'Deck8', puntuacion: 0 }],
    [{ nombre: 'Jugador1', deck: 'Deck1', puntuacion: 0 }, { nombre: 'Jugador5', deck: 'Deck5', puntuacion: 0 }],
    [{ nombre: 'Jugador2', deck: 'Deck2', puntuacion: 0 }, { nombre: 'Jugador6', deck: 'Deck6', puntuacion: 0 }],
    [{ nombre: 'Jugador3', deck: 'Deck3', puntuacion: 0 }, { nombre: 'Jugador7', deck: 'Deck7', puntuacion: 0 }],
    [{ nombre: 'Jugador4', deck: 'Deck4', puntuacion: 0 }, { nombre: 'Jugador8', deck: 'Deck8', puntuacion: 0 }],
  ];

}
