import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainListItem } from '../elements/main-list/main-list-datasource';

@Injectable({
  providedIn: 'root'
})
export class BeansService {

  constructor() { }

  getList(): Observable<MainListItem[] > {
    const tt: MainListItem = {
      id: 1,
      name: 'string',
      country: 'string',
      processing: 'string',
      taste: 'string',
    };
    return of([tt]);
  }
}
