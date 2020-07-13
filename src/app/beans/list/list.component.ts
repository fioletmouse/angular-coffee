import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TablesSettingsService } from 'src/app/services/tables-settings.service';
import { MainListItem } from '../../shared/models/list.model';
import { BeansService } from './../../services/beans.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title = 'Coffee beans';
  data$: Observable<MainListItem[]>;
  gridOptions: GridOptions;

  constructor(
    private beansService: BeansService,
    private dictService: TablesSettingsService
    ) { }

  ngOnInit(): void {
    this.data$ = this.beansService.getList();
    this.gridOptions =  this.dictService.mainListGridOptions;
  }

}
