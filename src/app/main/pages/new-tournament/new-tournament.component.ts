import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentsService } from '../../services/tournaments.service';

@Component({
  templateUrl: './new-tournament.component.html',
})

export class NewTournamentComponent {
  newTournamentForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private readonly router:Router,
              private tournamentService: TournamentsService)
  {

    this.newTournamentForm = this.formBuilder.group({
      name: ['', Validators.required],
      mun: ['', Validators.required],
      prov: ['', Validators.required],
      date: [null, Validators.required],
    });
  }

  newTournament(): void {

      if (this.newTournamentForm.valid){

        const { name, mun, prov, date } = this.newTournamentForm.value;

        const formatDate = this.formatDate(date);
        console.log(this.newTournamentForm.value);

        this.tournamentService.createTournament(formatDate, name, mun, prov).subscribe();
      }
  }

  formatDate(fecha:string): Number{
    const fechaObj = new Date(fecha);

    const año = fechaObj.getFullYear();
    const mes = (fechaObj.getMonth() + 1).toString().padStart(2, '0'); // Los meses son 0 indexados
    const dia = fechaObj.getDate().toString().padStart(2, '0');

    return Number(`${año}${mes}${dia}`);
  }
}
