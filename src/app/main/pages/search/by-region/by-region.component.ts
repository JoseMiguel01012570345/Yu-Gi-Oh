import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RegionSearchData } from 'src/app/main/interfaces/region.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements AfterViewInit {

  public mySearchForm = this.fb.group({
    name: new FormControl(''),
    region: new FormControl(''),
    start: new FormControl(""),
    end: new FormControl(""),
  })

  searchResults: RegionSearchData[] = [
    {
      name: "A",
      mostPopularArchetype: "Fire",
      playersAmount: 10,
      amountOfWinners: 2,
    },
    {
      name: "A",
      mostPopularArchetype: "Fire",
      playersAmount: 10,
      amountOfWinners: 2,
    },
  ]

  dataSource: MatTableDataSource<RegionSearchData> = new MatTableDataSource(this.searchResults);

  searchResultsColumns: string[] = ['name', 'mostPopularArchetype', 'playersAmount', 'amountOfWinners'];

  constructor(private fb: FormBuilder){}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;;
  }


  onSave(){
    console.log(this.mySearchForm.value);
  }
}
