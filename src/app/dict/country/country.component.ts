import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  providers: [ CountryService ]
})
export class CountryComponent implements OnInit {

  title = 'Countries List';
  data$: Observable<DictTableItem[]>;

  constructor(
    private countryService: CountryService,
    ) { }

  ngOnInit(): void {
    this.data$ = this.countryService.getCountries();
  }

  onSave($event: DictTableItem) {
    this.countryService.saveOrUpdate($event);
  }
}
