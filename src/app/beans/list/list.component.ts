import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
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
  constructor(private beansService: BeansService) { }

  ngOnInit(): void {
    this.data$ = this.beansService.getList();

    this.gridOptions =  {
      columnDefs: [
         {
          headerName: 'test',
          field: 'deliveryNo',
          sortable: true,
          minWidth: 50,
          maxWidth: 200, }
      ],
      rowSelection: 'multiple',
      rowMultiSelectWithClick: false,
      suppressRowClickSelection: true,
      onRowClicked: () => {},
      onRowSelected: () => {},
      rowData: [],
    };
  }

}
