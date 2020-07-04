import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DictTableItem } from '../elements/dict-table/dict-table-datasource';

@Injectable({
  providedIn: 'root'
})
export class BrewTypeService {

  constructor() { }

  getBrewType(): Observable<DictTableItem[]> {
    return of([
      { id: 1, name: '1'},
      { id: 2, name: '2'}
    ]);
  }
}
