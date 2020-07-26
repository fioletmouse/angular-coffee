import { Injectable } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { TableIconsCellComponent } from '../elements/table-icons-cell/table-icons-cell.component';

@Injectable({
  providedIn: 'root'
})
export class TablesSettingsService {

  dictGridOptions: GridOptions = {
    columnDefs: [
     {
        headerName: 'Id',
        field: 'id',
        sortable: true,
        minWidth: 50,
        maxWidth: 80, },
      {
        headerName: 'Active',
        field: 'isActive',
        sortable: true,
        sort: 'desc',
        minWidth: 80,
        maxWidth: 100,
        valueFormatter: (params) => {
          return params.value === true ? 'Yes' : 'No';
        },
      }, {
        headerName: 'Name',
        field: 'name',
        sortable: true,
        flex: 1,
        minWidth: 100, }
    ],
    rowSelection: 'single',
    onRowClicked: () => {},
    rowData: [],
  };

  mainListGridOptions: GridOptions = {
    columnDefs: [
     {
        headerName: 'Id',
        field: 'id',
        sortable: true,
        minWidth: 50,
        maxWidth: 80, },
      {
        headerName: 'Country',
        field: 'country',
        sortable: true,
        flex: 1,
        minWidth: 150, },
      {
        headerName: 'Name',
        field: 'name',
        sortable: true,
        flex: 1,
        minWidth: 200, },
      {
        headerName: 'Processing',
        field: 'processing',
        sortable: true,
        flex: 1,
        minWidth: 110,
        cellRendererFramework: TableIconsCellComponent,
        cellRendererParams: {
          buttons: [
            {
              handler: null,
              icon: 'wb_sunny',
              tooltip: 'Dry',
              conditionValue: 2,
              conditionParam: 'processing_id'
            }, {
              handler: null,
              icon: 'waves',
              tooltip: 'Wet',
              conditionValue: 1,
              conditionParam: 'processing_id'
            }]
        }},
      {
        headerName: 'Taste',
        field: 'taste',
        sortable: true,
        flex: 1,
        minWidth: 250,
        valueFormatter: (params) => {
          if (params.value) {
            return `Sweet: ${params.value.sweet}%  Acid: ${params.value.acid}%
              Bitter: ${params.value.bitter}%`;
          }
          return 'N/A';
      }},
    ],
    rowSelection: 'single',
    suppressRowClickSelection: true,
    onRowClicked: () => {},
    onRowSelected: () => {},
    rowData: [],
  };

  constructor() { }
}
