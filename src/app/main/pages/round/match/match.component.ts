import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {

  @Input()
  jugador1 = { nombre: 'Jugador1', deck: 'Deck1', puntuacion: 3 };
  @Input()
  jugador2 = { nombre: 'Jugador2', deck: 'Deck2', puntuacion: 2 };

  incrementScore(player: any): void {
    player.puntuacion += 1;
  }

  decrementScore(player: any): void {
    if (player.puntuacion > 0) {
      player.puntuacion -= 1;
    }
  }
}
