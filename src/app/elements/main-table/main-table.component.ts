import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { Observable, Subscription } from 'rxjs';
import { DictTableItem } from '../../shared/models/dictionary.model';

@Component({
  selector: 'el-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit, OnDestroy {

  @Input() data$: Observable<DictTableItem[]>;
  @Input() gripOptions: GridOptions;

  dataSubscription: Subscription = null;

  agGrid: AgGridAngular = null;
  defaultColumnDef = {
    resizable: true,
  };

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  onGridReady(e: AgGridAngular) {
    this.agGrid = e;

    this.dataSubscription = this.data$
    .subscribe({
      next: (newRowData) => {
        if (this.agGrid === null) {
          return;
        }
        if (Array.isArray(newRowData)) {
          this.agGrid.api.setRowData(newRowData);
        }
      },
      error: err => console.error(err),
    });
  }
}
