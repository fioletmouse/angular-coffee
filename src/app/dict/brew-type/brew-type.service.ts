import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DictTableItem } from '../../shared/dictionary.model';

@Injectable()
export class BrewTypeService {

  constructor() { }

  getBrewType(): Observable<DictTableItem[]> {
    return of([
      { id: 1, name: 'b1', isActive: true},
      { id: 2, name: 'b2', isActive: false}
    ]);
  }
}
