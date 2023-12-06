import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TournamentSearchData } from 'src/app/main/interfaces/tournament.interface';


@Component({
  selector: 'app-by-tournament',
  templateUrl: './by-tournament.component.html',
  styles: [
  ]
})

export class ByTournamentComponent implements AfterViewInit {

  public mySearchForm = this.fb.group({
    name: new FormControl(''),
    region: new FormControl(''),
    start: new FormControl(""),
    end: new FormControl(""),
  })

  searchResults: TournamentSearchData[] = [
    {
      name: "Torneo 1",
      region: "Latinoamerica Sur",
      date: "2021-01-01",
      winner: "Jugador 1",
      mostUsedArchetype: "Aggro"
    },
    {
      name: "Torneo 2",
      region: "Latinoamerica Sur",
      date: "2021-01-01",
      winner: "Jugador 2",
      mostUsedArchetype: "Control"
    }
  ]

  dataSource: MatTableDataSource<TournamentSearchData> = new MatTableDataSource(this.searchResults);

  searchResultsColumns: string[] = ['name', 'region', 'date', 'winner', 'mostUsedArchetype'];

  constructor(private fb: FormBuilder){}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;;
  }


  onSave(){
    console.log(this.mySearchForm.value);
  }
}
