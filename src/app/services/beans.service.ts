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
      processing_id: 1,
      processing: 'Мытая',
      taste: {
        sweet: 40,
        acid: 50,
        bitter: 70,
      },
    }, {
      id: 2,
      name: 'Финка Лас-Брикас',
      country: 'Сальвадор',
      processing_id: 2,
      processing: 'Сухая',
      taste: null,
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
      brew: ['Кемерс', 'Аэропресс'],
      roastDate: '12/11/2020',
      taste: {
        sweet: 40,
        acid: 50,
        bitter: 70,
      },
    };
    return of(tt);
  }
}
