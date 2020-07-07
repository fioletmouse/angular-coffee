import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DictTableItem } from '../../shared/dictionary.model';

@Injectable()
export class CountryService {

  constructor() { }

  getCountries(): Observable<DictTableItem[]> {
    return of([
      { id: 1, name: 'c1', isActive: false},
      { id: 2, name: 'c2', isActive: true}
    ]);
  }
}
