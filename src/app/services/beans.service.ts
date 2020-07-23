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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
