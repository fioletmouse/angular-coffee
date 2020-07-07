import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DictTableItem } from '../../shared/dictionary.model';

@Injectable()
export class ProcessingService {

  constructor() { }

  getProcessingType(): Observable<DictTableItem[]> {
    return of([
      { id: 1, name: 'p1', isActive: true},
      { id: 2, name: 'p2', isActive: false}
    ]);
  }
}
