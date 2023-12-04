import { Component } from '@angular/core';

@Component({
  templateUrl: './tournament-info.component.html',

})

export class TournamentInfoComponent {

  //Esto es para probar, debes dar una lista de Usuario/Deck en correspondencia a los participantes o las peticiones del torneo
  submissions: [string, string][] = [['Usuario1', 'Deck1'], ['Usuario2', 'Deck2'], ['Usuario3', 'Deck3']];

  rondas: { numero: number; enlace: string }[] = [
    { numero: 1, enlace: './1' },
    { numero: 2, enlace: './2' },
    { numero: 3, enlace: './3' },
  ]
  onAcceptClick(userName: string): void
  {
    console.log('Aceptar clicado para el usuario:' + userName);
  }

  onDenyClick(userName: string): void
  {
    console.log("Usuario denegado: " + userName)
  }

}
