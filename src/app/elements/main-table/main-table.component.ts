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
  @Input() clickedRow$: Observable<DictTableItem>;

  dataSubscription: Subscription = null;
  clickedRowSubscription: Subscription = null;

  agGrid: AgGridAngular = null;
  defaultColumnDef = {
    resizable: true,
  };
  smallSize = false;

  constructor() { }

  ngOnInit() {
    if (this.clickedRow$ != null) {
      this.clickedRowSubscription = this.clickedRow$
        .subscribe({
          next: (row) => {
            if (row === null) {
              this.smallSize = false;
            } else {
              this.smallSize = true;
            }

          },
          error: err => console.error(err),
        });
    }
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    if (this.clickedRowSubscription) {
      this.clickedRowSubscription.unsubscribe();
    }
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
