import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ArchetypeSearchData } from 'src/app/main/interfaces/archetype.interface';

@Component({
  selector: 'app-by-attribute',
  templateUrl: './by-attribute.component.html',
  styles: [
  ]
})
export class ByAtributeComponent implements AfterViewInit{
  public mySearchForm = this.fb.group({
    name: new FormControl(''),
  })

  searchResults: ArchetypeSearchData[] = [
    {
      name: "Fire",
      mostPopularRegion: "asdasfsf",
      amountsOfPlayerUsingIt: 3,
      amountOfTournamentsWhereIsUsed: 5,
    },
    {
      name: "Water",
      mostPopularRegion: "asdasfsf",
      amountsOfPlayerUsingIt: 5,
      amountOfTournamentsWhereIsUsed: 7,
    },
  ]

  dataSource: MatTableDataSource<ArchetypeSearchData> = new MatTableDataSource(this.searchResults);

  searchResultsColumns: string[] = ['name', 'mostPopularRegion', 'amountsOfPlayerUsingIt', 'amountOfTournamentsWhereIsUsed'];

  constructor(private fb: FormBuilder){}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;;
  }

  onSave(){
    console.log(this.mySearchForm.value);
  }

}
