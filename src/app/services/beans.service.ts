import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainListItem } from '../shared/models/list.model';

@Injectable({
  providedIn: 'root'
})
export class BeansService {

  constructor() { }

  getList(): Observable<MainListItem[] > {
    const tt: MainListItem[] = [{
      id: 1,
      name: 'Периконго',
      country: 'Колумбия',
      processing: 'Мытая',
      taste: 'string',
    }, {
      id: 2,
      name: 'Финка Лас-Брикас',
      country: 'Сальвадор',
      processing: 'Сухая',
      taste: 'string',
    }];
    return of(tt);
  }

  getDetailById(id: number) {
    const tt: MainListItem = {
      id: 1,
      name: 'Периконго',
      country: 'Колумбия',
      processing: 'Мытая',
      taste: 'string',
    };
    return of(tt);
  }
}
