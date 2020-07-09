import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainListItem } from '../../elements/main-list/main-list-datasource';
import { BeansService } from './../../services/beans.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = 'Coffee beans';
  data$: Observable<MainListItem[]>;

  constructor(private beansService: BeansService) { }

  ngOnInit(): void {
    this.data$ = this.beansService.getList();
  }

}
