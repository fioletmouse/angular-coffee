import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BeansDetail, MainListItem } from '../shared/models/beans.model';

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
    const tt: BeansDetail = {
      id: 1,
      name: 'Периконго',
      country: 'Колумбия',
      processing: 'Мытая',
      type: 'Катурра',
      area: 'Уила',
      region: '-',
      description: 'test',
      minAltitude: 1600,
      maxAltitude: null,
      roastDate: '12/11/2020',
      taste: 'string',
    };
    return of(tt);
  }
}
