import { Injectable } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  dictGridOptions: GridOptions = {
    columnDefs: [
     {
        headerName: 'Id',
        field: 'id',
        sortable: true,
        minWidth: 50, },
      {
        headerName: 'Name',
        field: 'name',
        sortable: true,
        flex: 1,
        minWidth: 100, },
      {
        headerName: 'Active',
        field: 'isActive',
        sortable: true,
        flex: 1,
        minWidth: 50,
        valueFormatter: (params) => {
          return params.value === true ? 'Yes' : 'No';
        },
      }
    ],
    rowSelection: 'single',
    suppressRowClickSelection: true,
    onRowClicked: () => {},
    onRowSelected: () => {},
    rowData: [],
  };

  constructor() { }
}
