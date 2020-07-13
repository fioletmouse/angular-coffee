import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';
import { DictService } from './../../services/dict.service';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [ CountryService ]
})
export class CountryComponent implements OnInit {

  title = 'Countries List';
  data$: Observable<DictTableItem[]>;
  gridOptions: GridOptions;

  constructor(
    private countryService: CountryService,
    private dictService: DictService
    ) { }

  ngOnInit(): void {
    this.data$ = this.countryService.getCountries();
    this.gridOptions = this.dictService.dictGridOptions;
  }

}
