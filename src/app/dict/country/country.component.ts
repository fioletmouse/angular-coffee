import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictTableItem } from '../../shared/dictionary.model';
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

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.data$ = this.countryService.getCountries();
  }

}
