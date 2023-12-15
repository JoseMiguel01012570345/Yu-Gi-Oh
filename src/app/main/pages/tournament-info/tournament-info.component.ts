import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { TournamentsService } from '../../services/tournaments.service';

@Component({
  templateUrl: './tournament-info.component.html',

})

export class TournamentInfoComponent implements OnInit {

  public id:string = "";
  public name:string = "";
  public date:number = 0;

  constructor( private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tournamentService: TournamentsService){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    console.log("Encode URL example: " + this.splitDateAndName("20230115%21Torneo%20de%20Prueba")[0])
    console.log("Encode URL example: " + this.splitDateAndName("20230115%21Torneo%20de%20Prueba")[1])
    console.log("ID: " + this.id)

    const tournamentDate = this.splitDateAndName(this.id)[0];
    const tournamentName = this.splitDateAndName(this.id)[1];


    //20230115%21Torneo%20de%20Prueba

    const testDate = this.splitDateAndName("20230115%21Torneo%20de%20Prueba")[0];
    const testName = this.splitDateAndName("20230115%21Torneo%20de%20Prueba")[1];

    // this.tournamentService.findTournament(parseInt(testDate), testName).subscribe();
  }


  splitDateAndName(combinedString: string): [string, string] {
    const [tournamentDate, encodedTournamentName] = combinedString.split('%21');
    const tournamentName = this.decodeTournamentName(encodedTournamentName);
    return [tournamentDate, tournamentName];


  }
  combineDateAndName(tournamentDate: string, encodedTournamentName: string): string {
    return `${tournamentDate}%21${encodedTournamentName}`;
  }

  // Método para codificar el nombre del torneo para su inclusión en la URL
  encodeTournamentName(tournamentName: string): string {
    return encodeURIComponent(tournamentName);
  }

  // Método para decodificar el nombre del torneo desde la URL
  decodeTournamentName(encodedTournamentName: string): string {
    return decodeURIComponent(encodedTournamentName);
  }


  // //Esto es para probar, debes dar una lista de Usuario/Deck en correspondencia a los participantes o las peticiones del torneo
  // submissions: [string, string][] = [['Usuario1', 'Deck1'], ['Usuario2', 'Deck2'], ['Usuario3', 'Deck3']];

  // rondas: { numero: number; enlace: string }[] = [
  //   { numero: 1, enlace: './1' },
  //   { numero: 2, enlace: './2' },
  //   { numero: 3, enlace: './3' },
  // ]

  // onAcceptClick(userName: string): void
  // {
  //   console.log('Aceptar clicado para el usuario:' + userName);
  // }

  // onDenyClick(userName: string): void
  // {
  //   console.log("Usuario denegado: " + userName)
  // }

}
