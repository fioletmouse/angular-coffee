import { Injectable } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

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
        minWidth: 130, },
      {
        headerName: 'Taste',
        field: 'taste',
        sortable: true,
        flex: 1,
        minWidth: 100, },
    ],
    rowSelection: 'single',
    suppressRowClickSelection: true,
    onRowClicked: () => {},
    onRowSelected: () => {},
    rowData: [],
  };

  constructor() { }
}
