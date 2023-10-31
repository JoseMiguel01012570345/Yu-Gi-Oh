import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PlayerSearchData } from 'src/app/main/interfaces/player.interface';

@Component({
  selector: 'app-by-player',
  templateUrl: './by-player.component.html',
  styles: [
  ]
})
export class ByPlayerComponent implements AfterViewInit{

  public mySearchForm = this.fb.group({
    name: new FormControl(''),
    region: new FormControl(''),
    start: new FormControl(""),
    end: new FormControl(""),
  })

  searchResults: PlayerSearchData[] = [
    {
      name: "Jhon Doe",
      decksAmount: 34,
      region: "asdasd",
      amountOfTournamentsParticipated: 40,
      amountOfTournamentsWinned :2,
    },
    {
      name: "Francis V.",
      region: "aasdknask",
      decksAmount: 20,
      amountOfTournamentsParticipated:30,
      amountOfTournamentsWinned:1,
    },
  ]

  dataSource: MatTableDataSource<PlayerSearchData> = new MatTableDataSource(this.searchResults);

  searchResultsColumns: string[] = ['name', 'decksAmount', 'region', 'amountOfTournamentsParticipated', 'amountOfTournamentsWinned'];

  constructor(private fb: FormBuilder){}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;;
  }

  onSave(){
    console.log(this.mySearchForm.value);
  }

}
