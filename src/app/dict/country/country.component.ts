import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TablesSettingsService } from '../../services/tables-settings.service';
import { DictTableItem } from '../../shared/models/dictionary.model';
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
    private dictService: TablesSettingsService
    ) { }

  ngOnInit(): void {
    this.data$ = this.countryService.getCountries();
    this.gridOptions = this.dictService.dictGridOptions;
  }

}
